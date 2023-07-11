import { adressee } from "../types";

interface IAdresseeListProps {
  list: adressee[];
}

export default function AdresseeList({ list }: IAdresseeListProps) {
  return (
    <ul style={{ fontSize: "20px", listStyle: "none", padding: "0" }}>
      {list?.map((item) => (
        <li key={item._id}>{item.value}</li>
      ))}
    </ul>
  );
}
