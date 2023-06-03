export type NewClient = Omit<IClient, "id">;

export interface IClient {
  id: number;
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
  name: string;
  phones: string[] | []
  email: string[] | [];
}

export type substation = {
  name: string;
  info: string;
};

export type handleActiveFunction = (props: { isActive: boolean }) => string;

export type authContextValueType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];