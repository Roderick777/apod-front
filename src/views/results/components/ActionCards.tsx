import { PieChartOutlined } from '@ant-design/icons'
import { Avatar, Card, Col, Row } from 'antd'
import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { useNotification } from '../../../hooks/useNotification'
import { ResultsContext } from '../context/ResultsContextProvider'

interface Props {}

const ActionCards = (props: Props) => {
  const history = useHistory()
  const { currentProcessData } = useContext(ResultsContext)
  const { notify } = useNotification()

  const goToRegionsResults = () => {
    if (currentProcessData) {
      history.push('/resultados-regiones/' + currentProcessData[0].id)
    }
  }

  const goToProvinces = () => {
    if (currentProcessData) {
      notify('Aviso', 'Esta opción se encuentra en construcción')
    }
  }

  return (
    <div>
      <Row>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <Card
            onClick={() => goToRegionsResults()}
            style={{
              borderRadius: '10px',
              border: 'none',
              marginRight: '10px',
              marginTop: '20px',
              cursor: 'pointer',
            }}
          >
            <Avatar
              style={{
                color: 'var(--primary-color)',
                backgroundColor: 'var(--primary-color-opacity)',
              }}
            >
              <PieChartOutlined />
            </Avatar>
            <span style={{ paddingLeft: '10px' }}>Detalle por Regiones</span>
          </Card>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <Card
            style={{
              borderRadius: '10px',
              border: 'none',
              marginLeft: '10px',
              marginTop: '20px',
              cursor: 'pointer',
            }}
            onClick={() => goToProvinces()}
          >
            <Avatar
              style={{
                color: 'var(--primary-color)',
                backgroundColor: 'var(--primary-color-opacity)',
              }}
            >
              <PieChartOutlined />
            </Avatar>
            <span style={{ paddingLeft: '10px' }}>Detalle por Provincias</span>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ActionCards
