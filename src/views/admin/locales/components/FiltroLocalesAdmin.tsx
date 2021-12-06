import React, { FC, useContext, useEffect, useState } from 'react'
import { Col, Row, Select, Form, Button } from 'antd'
import { IRegion } from '../../../../interfaces/Region.interface'
import { ProvincesService } from '../../../../services/ProvincesServices'
import { IProvincia } from '../../../../interfaces/Provincia.interface'
import { RegionsService } from '../../../../services/RegionsService'
import { LocalesAdminContext } from '../context/LocalesAdminContextProvider'

interface IProps {
  onFilter: () => void
}

export const FiltroLocalesAdmin: FC<IProps> = ({ onFilter }) => {
  const { setFilters, filters } = useContext(LocalesAdminContext)
  const [regions, setRegions] = useState<Array<IRegion>>([])
  const [provinces, setProvinces] = useState<Array<IProvincia>>([])
  const { Option } = Select
  const dimensions = { xxl: 6, xl: 6, lg: 8, md: 12, sm: 24, xs: 24 }

  const init = async () => {
    const regionsData: any = await RegionsService.list()
    setRegions(regionsData.regions)
  }

  const getProvinces = async (region: number) => {
    const provincesData: any = await ProvincesService.list(region)
    setProvinces(provincesData.provincias)
  }

  const getCommunes = async (region: number) => {}

  const updateFilters = (key: string, value: any) => {
    const newFilters = [...filters, { key, value }]
    setFilters(newFilters)
  }

  const applyFilter = () => {
    onFilter()
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div style={{ paddingTop: '15px', paddingBottom: '15px' }}>
      <Row>
        <Col {...dimensions} style={{ paddingRight: '15px' }}>
          <div>Región</div>
          <Select
            style={{ width: '100%' }}
            placeholder="Selecionar Región"
            onChange={(e: any) => {
              updateFilters('region', e)
              getProvinces(e)
            }}
          >
            {regions.map((e, i) => (
              <Option key={'region' + i} value={e.id}>
                {e.nombre_region}
              </Option>
            ))}
          </Select>
        </Col>
        {provinces.length > 0 && (
          <Col {...dimensions} style={{ paddingRight: '15px' }}>
            <div>Provincias</div>
            <Select
              style={{ width: '100%' }}
              placeholder="Selecionar Provincias"
              onChange={(e: any) => {
                getCommunes(e)
              }}
            >
              {provinces.map((e, i) => (
                <Option key={'region' + i} value={e.provincia_numero}>
                  {e.provincia_nombre}
                </Option>
              ))}
            </Select>
          </Col>
        )}
      </Row>
      <Row style={{ paddingTop: '15px' }}>
        <Col {...dimensions} style={{ paddingRight: '15px' }}>
          filtros aplicados:
          {filters.map((e, i) => (
            <span key={`filter-${i}`}>{e.key}</span>
          ))}
        </Col>
      </Row>
      <Row style={{ paddingTop: '15px' }}>
        <Col {...dimensions} style={{ paddingRight: '15px' }}>
          <Button type="primary" onClick={() => applyFilter()}>
            Filtrar
          </Button>
        </Col>
      </Row>
    </div>
  )
}
