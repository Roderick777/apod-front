import { Layout, Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import React, { useContext } from 'react'
import Loader from '../../../components/Loader/Loader'
import { ResultsContext } from '../context/ResultsContextProvider'

const { Sider } = Layout
interface Props {}

const ProcessList = (props: Props) => {
  const { electoralProcesses, loading, setCurrentProcess } =
    useContext(ResultsContext)
  return (
    <Sider className="site-layout-background" width={300}>
      <Menu mode="inline" style={{ height: '100%' }}>
        {electoralProcesses.map((e, i) => (
          <Menu.Item key={i} onClick={() => setCurrentProcess(e)}>
            {e.nombre}
          </Menu.Item>
        ))}
        {loading && <Loader />}
      </Menu>
    </Sider>
  )
}

export default ProcessList
