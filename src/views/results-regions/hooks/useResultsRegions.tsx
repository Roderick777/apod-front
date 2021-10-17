import { Avatar } from 'antd'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { IOpcionVoto } from '../../../interfaces/OpcionVoto.interface'
import { IRegion } from '../../../interfaces/Region.interface'
import { ResultsService } from '../../../services/ResultsService'

export const useResultsRegions = (processId: number) => {
  const history = useHistory()
  const [regionsData, setRegionsData] = useState<any>([])
  const [loading, setLoading] = useState(true)

  const getRegionData = async () => {
    const data: any = await ResultsService.getVotosByRegiones(processId)
    setRegionsData(data)
    setLoading(false)
    console.log(data)
  }

  const firstLetter = (value: string) => value.charAt(0).toUpperCase()

  const columns: Array<any> = [
    {
      title: 'Región',
      dataIndex: 'nombre_region',
      key: 'nombre_region',
      render: (value: string, record: IRegion) => {
        const shortValue = value

        return (
          <div>
            <Avatar
              style={{
                color: 'var(--primary-color)',
                backgroundColor: 'var(--primary-color-opacity)',
              }}
            >
              {firstLetter(shortValue)}
            </Avatar>
            <span style={{ paddingLeft: '10px' }}>{shortValue}</span>
          </div>
        )
      },
    },
  ]

  return {
    history,
    regionsData,
    setRegionsData,
    loading,
    setLoading,
    getRegionData,
    columns,
  }
}
