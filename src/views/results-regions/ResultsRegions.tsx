import { LeftOutlined } from '@ant-design/icons'
import { Button, Col, Layout, Row, Space, Table } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import RegionDetail from './components/RegionDetail'
import { ResultsRegionsContextProvider } from './context/ResultsRegionsContextProvider'
import { useResultsRegions } from './hooks/useResultsRegions'
import './ResultsRegions.scss'

interface Props {
  processId: number
}

const ResultsRegions: React.FC<Props> = ({ processId }) => {
  const {
    history,
    regionsData,
    setRegionsData,
    loading,
    setLoading,
    getRegionData,
    columns,
  } = useResultsRegions(processId)

  useEffect(() => {
    getRegionData()
  }, [])

  return (
    <ResultsRegionsContextProvider
      processId={processId}
      regionsData={regionsData}
      setRegionsData={setRegionsData}
      loading={loading}
      setLoading={setLoading}
    >
      <Layout
        className="site-layout-background page-container"
        style={{ background: 'none' }}
      >
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <div className="results-content">
            <Row>
              <Col>
                <Button type="link" onClick={() => history.go(-1)}>
                  <Space size="small">
                    <LeftOutlined />
                  </Space>
                  Volver
                </Button>
              </Col>
              <Col>
                <h1>Resultados por Región</h1>
              </Col>
            </Row>
            <div>
              {regionsData.length && !loading && (
                <Table
                  dataSource={regionsData}
                  columns={columns}
                  pagination={false}
                  expandable={{
                    onExpand: (expand, record) => {
                      if (expand) {
                        console.log(expand, record)
                      }
                    },
                    expandedRowRender: (record) => (
                      <RegionDetail record={record} />
                    ),
                  }}
                />
              )}
            </div>
          </div>
        </Content>
      </Layout>
    </ResultsRegionsContextProvider>
  )
}

export default ResultsRegions
