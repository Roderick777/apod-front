import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { useEffect, useState } from 'react'
import { useNotification } from '../../hooks/useNotification'
import { IProcesoElectoral } from '../../interfaces/ProcesoElectoral.interface'
import { ResultsService } from '../../services/ResultsService'
import ActionCards from './components/ActionCards'
import ProcessList from './components/ProcessList'
import TableOptions from './components/TableOptions'
import { ResultsContextProvider } from './context/ResultsContextProvider'
import './ResultsView.scss'

interface Props {}

const ResultsView = (props: Props) => {
  const [electoralProcesses, setElectoralProcesses] = useState<
    Array<IProcesoElectoral>
  >([])
  const [currentProcess, setCurrentProcess] = useState<any>(null)
  const [currentProcessData, setCurrentProcessData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const { notify, notifyError } = useNotification()

  useEffect(() => {
    ResultsService.getProcessList().then((res) => {
      setElectoralProcesses(res)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (currentProcess) {
      ResultsService.getVotosByProceso(currentProcess.id)
        .then((res: any) => {
          if (res.length > 0) {
            setCurrentProcessData(res)
          } else {
            notifyError(
              'Proceso vacío',
              'El proceso electoral seleccionado no posée registros'
            )
          }
        })
        .catch((e) => {
          console.log(e)
          notify(
            'Error',
            'En estos momentos no podemos mostrar la información solicitada'
          )
        })
    }
  }, [currentProcess])

  return (
    <ResultsContextProvider
      electoralProcesses={electoralProcesses}
      setElectoralProcesses={setElectoralProcesses}
      currentProcess={currentProcess}
      setCurrentProcess={setCurrentProcess}
      currentProcessData={currentProcessData}
      setCurrentProcessData={setCurrentProcessData}
      loading={loading}
      setLoading={setLoading}
    >
      <>
        <Layout
          className="site-layout-background page-container"
          style={{ background: 'none' }}
        >
          <ProcessList />
          <Layout style={{ background: 'none' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <div className="results-content">
                {currentProcessData ? (
                  <div>
                    <TableOptions />
                    <ActionCards />
                  </div>
                ) : (
                  <div>Selecciona un proceso electoral</div>
                )}
              </div>
            </Content>
          </Layout>
        </Layout>
      </>
    </ResultsContextProvider>
  )
}

export default ResultsView
