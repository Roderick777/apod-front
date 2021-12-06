import React, { useContext, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import HomeView from '../../views/home/HomeView'
import ResultsView from '../../views/results/ResultsView'
import { HomeFilled } from '@ant-design/icons'
import './Router.scss'
import logo from '../../assets/images/logoweb.png'
import ResultsRegions from '../../views/results-regions/ResultsRegions'
import LoginAdmin from '../../views/admin/login/LoginAdmin'
import {
  RouterContext,
  RouterContextComponent,
} from '../../context/RouterContext'
import LocalesAdmin from '../../views/admin/locales/LocalesAdmin'
import { PoliticaPrivacidad } from '../../views/politicaPrivacidad/PoliticaPrivacidad'
import ActasView from '../../views/actas/ActasView'

interface Props {}

export const RouterComponent = (props: Props) => {
  const { authenticated } = useContext(RouterContext)
  const links = [
    {
      link: '/',
      name: 'Home',
      component: <HomeView />,
    },
    {
      link: '/resultados',
      name: 'Resultados',
      component: <ResultsView />,
    },
    {
      link: '/actas',
      name: 'Actas',
      component: <ActasView />,
    },
  ]

  const reverseLinks = () => {
    const newLinks = [
      ...links,
      // {
      //   link: '/resultados-regiones/:processId',
      //   name: 'Resultados Regiones',
      //   component: <ResultsRegions />,
      // },
    ].reverse()
    return newLinks
  }

  useEffect(() => {
    console.log('estado autenticación', authenticated)
  }, [authenticated])

  return (
    <RouterContextComponent>
      <Router>
        <div
          style={{ maxWidth: '1200px', position: 'relative', margin: '0 auto' }}
        >
          <nav className="nav-router">
            <div className="logo-container">
              <img src={logo} className="logo" />
            </div>
            <ul className="menu">
              <li className="link">
                <Link to="/" className="link-icon">
                  <HomeFilled />
                </Link>
              </li>
              {links.map((e, i) => (
                <li className="link" key={i}>
                  <Link className="link-text" to={e.link}>
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Switch>
            {/* ADMIN */}
            <Route path="/admin/login" component={() => <LoginAdmin />} />
            <Route path="/admin/locales" component={() => <LocalesAdmin />} />
            <Route path="/politica" component={() => <PoliticaPrivacidad />} />

            {/* ADMIN */}
            <Route
              path="/resultados-regiones/:processId"
              render={({ match }) => {
                return (
                  <ResultsRegions processId={(match.params as any).processId} />
                )
              }}
            />
            {reverseLinks().map((e, i) => (
              <Route key={i} path={e.link} component={() => e.component} />
            ))}
          </Switch>
        </div>
      </Router>
    </RouterContextComponent>
  )
}
