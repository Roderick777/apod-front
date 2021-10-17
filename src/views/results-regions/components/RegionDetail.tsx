import { Card, Table } from 'antd'
import React from 'react'
import { IRegion } from '../../../interfaces/Region.interface'

interface Props {
  record: IRegion
}

const RegionDetail = ({ record }: Props) => {
  const formatos = record.formatos || []

  const columns: Array<any> = [
    {
      title: 'Región',
      dataIndex: 'nombre_opcion',
      key: 'nombre_opcion',
    },
    {
      title: 'Cantidad de Votos',
      dataIndex: 'votos',
      key: 'votos',
    },
  ]

  return (
    <div>
      {formatos.map((e, i) => (
        <Card>
          <h4>{e.nombre}</h4>
          <Table columns={columns} dataSource={e.opciones} pagination={false} />
        </Card>
      ))}
    </div>
  )
}

export default RegionDetail
