import React from "react";

interface IAdresseeListProps {
  list: string[] | [];
}

export default function AdresseeList({ list }: IAdresseeListProps) {
  return (
    <ul style={{ fontSize: "20px", listStyle: "none", padding: "0" }}>
      {list?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
