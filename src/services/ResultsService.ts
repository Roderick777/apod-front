import { IFormatoVoto } from '../interfaces/FormatoVoto.interface'
import { IProcesoElectoral } from '../interfaces/ProcesoElectoral.interface'
import { Service } from './Service'

export class ResultsService extends Service {
  public static async getProcessList(): Promise<any> {
    const res: any = await this.get('proceso-electoral')
    return res.procesos
  }

  public static async getVotosByProceso(procesoId: number) {
    const data: Array<IFormatoVoto> = await this.get(
      'voto/por-proceso?procesoId=' + procesoId
    )
    if (data.length) {
      let total = 0
      for (const element of data[0].opciones) {
        total += element.votos || 0
      }
      data[0].opciones.map((e) => {
        const percent = ((e.votos || 0) / total) * 100
        e.porcentaje_voto = parseFloat(percent.toFixed(1))
      })
      return data
    }
    return data
  }

  public static async getVotosByRegiones(processId: number) {
    const data: any = await this.get(`voto/por-regiones?processId=${processId}`)
    data.response.map((e: any) => (e.key = e.id))
    return data.response
  }
}
