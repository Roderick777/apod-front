import React from 'react'
import '../HomeView.scss'
import image from '../../../assets/images/caracteristicas/caracteristicas.png'
import { Card, Col, Row } from 'antd'
interface Props {}

const HomeCaracteristicas = (props: Props) => {
  return (
    <div
      className="caracteristicas"
      style={{ backgroundImage: 'url(' + image + ')' }}
    >
      <Row>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <h1>Características de la plataforma APOD</h1>
        </Col>
      </Row>
      <Row className="caracteristicas-cards">
        <Col className="pa-2" xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <Card className="caracteristicas-card">Contenido</Card>
        </Col>
        <Col className="pa-2" xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <Card className="caracteristicas-card">Contenido</Card>
        </Col>
        <Col className="pa-2" xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <Card className="caracteristicas-card">Contenido</Card>
        </Col>
        <Col className="pa-2" xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
          <Card className="caracteristicas-card">Contenido</Card>
        </Col>
      </Row>
    </div>
  )
}

export default HomeCaracteristicas
