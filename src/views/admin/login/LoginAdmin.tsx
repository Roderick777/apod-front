import { Form, Input, Button } from 'antd'
import { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { RouterContext } from '../../../context/RouterContext'
import { useNotification } from '../../../hooks/useNotification'
import { AuthService } from '../../../services/AuthService'

const LoginAdmin: React.FC<any> = () => {
  const form = AuthService.getCredentials()
  const { notify } = useNotification()
  const [email, setEmail] = useState(form ? form.email : '')
  const [password, setPassword] = useState(form ? form.password : '')
  const { setAuthenticated } = useContext(RouterContext)
  const history = useHistory()

  const login = async (email: string, password: string) => {
    await AuthService.login({ email, password })
    const userData = AuthService.getUserData()
    setAuthenticated(true)
    notify(
      'Bienvenido ' + userData.name,
      'Has iniciado Sesión como administración'
    )
    updateCredentials(email, password)
    history.push('/admin/locales')
  }

  const updateCredentials = (email: string, password: string) => {
    AuthService.setCredentials(email, password)
  }

  const onFinish = async (values: any) =>
    await login(values.email, values.password)

  const onFinishFailed = (errorInfo: any) => console.log('Failed:', errorInfo)

  return (
    <div
      className="page-padding"
      style={{
        position: 'relative',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ email, password, remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Correo" name="email">
          <Input
            defaultValue={email}
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </Form.Item>

        <Form.Item label="Clave" name="password">
          <Input.Password
            defaultValue={password}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Iniciar Sesión
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginAdmin
