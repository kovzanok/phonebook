import React from "react";
import { addressee } from "../types/index";

interface IAdresseeListProps {
  list: addressee[] | undefined;
}

export default function AdresseeList({ list }: IAdresseeListProps) {
  return (
    <ul style={{ fontSize:'20px', listStyle: "none", padding: "0" }}>
      {list?.map((item, index) => (
        <li  key={index}>{item.value}</li>
      ))}
    </ul>
  );
}
