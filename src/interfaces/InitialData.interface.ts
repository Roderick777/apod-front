import { IComuna } from './Comuna.interface';
import { IPollingPlace } from './PollingPlace.interface';
import { IProcesoElectoral } from './ProcesoElectoral.interface';
import { IProvincia } from './Provincia.interface';
import { IRegion } from './Region.interface';

export interface IInitialData {
  regiones: Array<IRegion>;
  provincias: Array<IProvincia>;
  comunas: Array<IComuna>;
  locales: Array<IPollingPlace>;
  local: IPollingPlace;
  procesoElectoralVigente: IProcesoElectoral;
}
