import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'
import { AuthService } from '../services/AuthService'

export interface IRouterContext {
  authenticated: boolean
  setAuthenticated: Dispatch<SetStateAction<boolean>>
}

export const RouterContext = createContext({} as IRouterContext)

export const RouterContextComponent: FC<any> = ({ children }: any) => {
  const userData = AuthService.getUserData()
  const hasSession = userData !== null
  const [authenticated, setAuthenticated] = useState<boolean>(hasSession)
  return (
    <RouterContext.Provider
      value={{
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </RouterContext.Provider>
  )
}
