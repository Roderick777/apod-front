import { Button, Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { useContext } from 'react'
import { useHistory } from 'react-router'
import { RouterContext } from '../../context/RouterContext'

export const AdminWrapper = ({ children }: any) => {
  const { authenticated } = useContext(RouterContext)
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }

  return (
    <>
      <Layout
        className="site-layout-background page-container"
        style={{ background: 'none' }}
      >
        <Layout style={{ background: 'none' }}>
          <Content
            style={{ padding: '0 24px', maxWidth: '1200px', minHeight: 280 }}
          >
            <div>
              {authenticated ? (
                <div>{children}</div>
              ) : (
                <div
                  style={{
                    maxWidth: '500px',
                    height: '90vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    margin: '0 auto',
                  }}
                >
                  <div>
                    <h1>
                      Usted no posee permisos para ingresar a esta interfaz
                    </h1>
                    <Button type="primary" onClick={() => goToHome()}>
                      Volver a la página principal
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
