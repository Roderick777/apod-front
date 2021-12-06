import { Service } from './Service'

export class ProvincesService extends Service {
  public static async list(region: number) {
    return await this.get(`provincias?region=${region}`)
  }
}
