import { Card, Col, Collapse, Row } from 'antd'
import { IFaq } from '../../../interfaces/Faq.interface'
import faqsSlide from '../../../assets/images/faqs/faqs-background.jpg'
import { MinusCircleFilled, PlusCircleFilled } from '@ant-design/icons'

interface Props {
  faqs: Array<IFaq>
}
const { Panel } = Collapse

const HomeFAQ = ({ faqs }: Props) => {
  return (
    <div
      className="faqs-container"
      style={{ backgroundImage: 'url(' + faqsSlide + ')' }}
    >
      <h1>Preguntas frecuentes</h1>
      <Row>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <Collapse
            accordion
            defaultActiveKey={0}
            bordered={false}
            expandIcon={({ isActive }) =>
              isActive ? (
                <MinusCircleFilled
                  style={{ color: 'var(--primary-color)', fontSize: '20px' }}
                />
              ) : (
                <PlusCircleFilled
                  style={{ color: 'var(--primary-color)', fontSize: '20px' }}
                />
              )
            }
          >
            {faqs &&
              faqs.map((e, i) => (
                <Panel
                  header={<span className="question">{e.question}</span>}
                  key={i}
                >
                  <div className="ask">
                    <Card
                      style={{
                        borderRadius: '16px',
                        border: 'none !important',
                      }}
                    >
                      {e.ask}
                    </Card>
                  </div>
                </Panel>
              ))}
          </Collapse>
        </Col>
      </Row>
    </div>
  )
}

export default HomeFAQ
