import { IClient } from "../types";
import ClientLink from "./ClientLink";

interface IClientsListProps {
  clients: IClient[];
}

interface IListItemProps {}

export default function ClientsList({ clients }: IClientsListProps) {
  return (
    <ul
      style={{
        listStyle: "none",
        width: "80%",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      {clients.map(
        (client: IClient): React.ReactElement<IListItemProps> => (
          <li style={{ width: "100%" }} key={client.id}>
            <ClientLink {...client} />
          </li>
        )
      )}
    </ul>
  );
}
