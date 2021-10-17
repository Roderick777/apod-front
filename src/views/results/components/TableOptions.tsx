import React, { useContext } from 'react'
import { Avatar, Table } from 'antd'
import { ResultsContext } from '../context/ResultsContextProvider'
import { IOpcionVoto } from '../../../interfaces/OpcionVoto.interface'

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
      dataIndex: 'porcentaje_voto',
      key: 'porcentaje_voto',
      render: (value: any) => <span>{value} %</span>,
    },
  ]
  const { currentProcessData } = useContext(ResultsContext)
  return (
    <div>
      {currentProcessData ? (
        <>
          <h1>{currentProcessData[0].nombre}</h1>
          <Table<any>
            columns={columns}
            dataSource={currentProcessData[0].opciones}
            pagination={false}
          />
        </>
      ) : (
        <div />
      )}
    </div>
  )
}

export default TableOptions
