import { Service } from './Service'

export class CommunesService extends Service {
  public static async list(region: number) {
    return await this.get(`comuna?region=${region}`)
  }
}
