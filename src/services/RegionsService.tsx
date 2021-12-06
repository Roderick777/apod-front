import { IFormatoVoto } from '../interfaces/FormatoVoto.interface'
import { IProcesoElectoral } from '../interfaces/ProcesoElectoral.interface'
import { Service } from './Service'

export class RegionsService extends Service {
  public static async list() {
    return await this.get('regiones')
  }
}
