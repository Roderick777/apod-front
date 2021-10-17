export interface IUserData {
  id?: number;
  email: string;
  name: string;
  role_id: string | number;
  password?: string;
  avatar: string;
  invited_by: any;
  settings: IUserDataSettings;
}

export interface IUserDataToken extends IUserData {
  exp: number;
  iat: number;
}

export interface IUserDataSettings {
  region: string;
  local_id: string;
  comuna_nombre: string;
  provincia_numero: string;
}
