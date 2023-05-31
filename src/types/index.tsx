export interface IClient {
  id: number;
  name: string;
  substations: [substation];
  people?: [IPerson];
  contacts?: [IContact];
}

interface IPerson extends IContact {
  position: string;
  info: string;
}

interface IContact {
  name: string;
  phones?: [phone];
  destination?: [addressee];
  id: number;
}

type substation = {
  id: number;
  name: string;
  info?: string;
};

type phone = {
  number: string;
  id: number;
};

type addressee = {
  text: string;
  id: number;
};

export type handleActiveFunction = (props: { isActive: boolean }) => string;
