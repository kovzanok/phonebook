export interface IClient {
  _id: string;
  name: string;
  substations: substation[];
  people: IPerson[] | [];
  contacts: IContact[] | [];
}

export interface IPerson extends IContact {
  position: string;
  info: string;
}

export interface IContact {
  _id: string;
  name: string;
  phones: adressee[];
  email: adressee[];
}

export type adressee = {
  value: string;
  _id: string;
};

export type substation = {
  name: string;
  info: string;
  _id: string;
};

export type handleActiveFunction = (props: { isActive: boolean }) => string;

export type LoginParams = {
  login: string;
  password: string;
};

export type authContextValueType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];
export type loginContextValueType = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];
