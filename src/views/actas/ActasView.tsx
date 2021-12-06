import { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { ResultsService } from '../../services/ResultsService'
import Loader from '../../components/Loader/Loader'

const { Sider } = Layout

const ActasView = (props: any) => {
  const [currentProcessData, setCurrentProcessData] = useState({})
  const [electoralProcesses, setElectoralProcesses] = useState([])
  const [loading, setLoading] = useState(true)

  const init = () => {
    ResultsService.getProcessList().then((res) => {
      setElectoralProcesses(res)
      setLoading(false)
    })
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div>
      <>
        <Layout
          className="site-layout-background page-container"
          style={{ background: 'none' }}
        >
          <Sider className="site-layout-background" width={300}>
            <Menu mode="inline" style={{ height: '100%' }}>
              {electoralProcesses.map((e: any, i) => (
                <Menu.Item key={i} onClick={() => setCurrentProcessData(e)}>
                  {e.nombre}
                </Menu.Item>
              ))}
              {loading && <Loader />}
            </Menu>
          </Sider>
          <Layout style={{ background: 'none' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <div className="results-content">
                {currentProcessData ? (
                  <div>
                    <>En construcción</>
                  </div>
                ) : (
                  <div>Selecciona un proceso electoral</div>
                )}
              </div>
            </Content>
          </Layout>
        </Layout>
      </>
    </div>
  )
}

export default ActasView
