import React, { useContext } from 'react'
import { Alert, Avatar, Button, Col, Row, Table } from 'antd'
import { ResultsContext } from '../context/ResultsContextProvider'
import { IOpcionVoto } from '../../../interfaces/OpcionVoto.interface'
import { useDownload } from '../../../hooks/useDownload'
import { FileExcelOutlined } from '@ant-design/icons'

interface Props {}

const TableOptions = (props: Props) => {
  const firstLetter = (value: string) => value.charAt(0).toUpperCase()

  const columns: Array<any> = [
    {
      title: 'Nombre candidato',
      dataIndex: 'nombre_opcion',
      key: 'nombre_opcion',
      render: (value: string, record: IOpcionVoto) => (
        <div>
          <Avatar
            style={{
              color: 'var(--primary-color)',
              backgroundColor: 'var(--primary-color-opacity)',
            }}
          >
            {firstLetter(value)}
          </Avatar>
          <span style={{ paddingLeft: '10px' }}>{value}</span>
        </div>
      ),
    },
    {
      title: 'Cantidad de Votos',
      dataIndex: 'votos',
      key: 'votos',
    },
    {
      title: 'Porcentaje de Votos',
      dataIndex: 'porcentaje',
      key: 'porcentaje',
      render: (value: any) => <span>{value} %</span>,
    },
  ]
  const { currentProcessData } = useContext(ResultsContext)
  const { download } = useDownload()

  const downloadExcel = () => {
    download('/votacion.xlsx')
  }

  return (
    <div>
      {currentProcessData ? (
        <>
          {currentProcessData[0] && (
            <>
              <Row style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                <Col span={24}>
                  <h1>{currentProcessData[0].nombre}</h1>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div className="alert" style={{ marginBottom: '10px' }}>
                    <div>
                      La data que presentamos en APOD corresponde a la
                      información que ha sido recopilada a través de nuestra
                      plataforma. Esta información puede ser parcial y en ningun
                      caso representa el resultado completo de las votaciones
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        paddingTop: '10px',
                      }}
                    >
                      <Button type="primary" onClick={() => downloadExcel()}>
                        <FileExcelOutlined />
                        <span style={{ paddingRight: '10px' }}>
                          Descargar Excel
                        </span>
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
              {currentProcessData[0].opciones && (
                <Table<any>
                  columns={columns}
                  dataSource={currentProcessData[0].opciones}
                  pagination={false}
                />
              )}
            </>
          )}
        </>
      ) : (
        <div />
      )}
    </div>
  )
}

export default TableOptions
