import { Service } from './Service'
import jwtDecode from 'jwt-decode'

export class AuthService extends Service {
  public static async login({ email, password }: any) {
    const body: any = { email, password }
    const auth: any = await this.post('login', body)
    this.setToken(auth.token)
    return auth
  }

  public static setToken(token: string): void {
    localStorage.setItem('token', token)
  }

  /** @description Retorna la data desencriptada del token */
  public static getUserData(): any | null {
    const token = localStorage.getItem('token')
    if (token) {
      return jwtDecode<any>(token)
    }
    return null
  }

  public static setCredentials(email: string, password: string) {
    const credentials = JSON.stringify({ email, password })
    localStorage.setItem('credentials', credentials)
  }

  public static getCredentials(): any | null {
    const credentials = localStorage.getItem('credentials')
    return credentials ? JSON.parse(credentials) : null
  }
}
