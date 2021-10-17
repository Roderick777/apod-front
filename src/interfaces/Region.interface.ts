import { IFormatoVoto } from './FormatoVoto.interface'

export interface IRegion {
  created_at: string
  id: number
  nombre_region: string
  numero_region: string
  updated_at: string
  formatos?: Array<IFormatoVoto>
  key?: number
}
