import { IPollingPlace } from '../interfaces/PollingPlace.interface'
import { Service } from './Service'

export class PollingPlaceService extends Service {
  public static async getPollingPlaces() {
    return (await this.get('locales')) as Array<IPollingPlace>
  }
}
