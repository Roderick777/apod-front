import { Button, Col, Row } from 'antd'
import React from 'react'
import '../HomeView.scss'
import movilSlide from '../../../assets/images/slider/movil-slider.png'
import { useHistory } from 'react-router'

interface Props {}

const HomeSlider = (props: Props) => {
  const history = useHistory()

  const goToResults = () => {
    history.push('/resultados')
  }

  return (
    <div
      className="slider-container"
      style={{ backgroundImage: 'url(' + movilSlide + ')' }}
    >
      <div>
        <Row>
          <Col span={12}>
            <div>
              <h1 className="slider-text">
                <div>
                  APOD es la Plataforma de ayuda para apoderados en procesos de
                  votaciones de Chile
                </div>
                <Button
                  className="btn-secondary"
                  shape="round"
                  onClick={() => goToResults()}
                >
                  Ver Resultados
                </Button>
              </h1>
            </div>
          </Col>
          <Col span={12}>
            <div></div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default HomeSlider
