import { IClient } from "../types";
import ClientLink from "./ClientLink";

interface IClientsListProps {
  clients: IClient[];
}

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
      {clients.map((client: IClient) => (
        <li style={{ width: "100%" }} key={client._id}>
          <ClientLink {...client} />
        </li>
      ))}
    </ul>
  );
}
