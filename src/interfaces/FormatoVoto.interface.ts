import { IOpcionVoto } from './OpcionVoto.interface';

export interface IFormatoVoto {
  created_at: string;
  id: number;
  nombre: string;
  opciones: Array<IOpcionVoto>;
  proceso_electoral_id: number;
  updated_at: string;
  mesas?: Array<any>;
}
