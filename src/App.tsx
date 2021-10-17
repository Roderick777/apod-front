import React from 'react'
import 'antd/dist/antd.less'
import './styles/vars.scss'
import './App.scss'
import { RouterComponent } from './components/Router/Router'

export const App: React.FC = () => {
  return (
    <div className="App">
      <RouterComponent />
    </div>
  )
}
