import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "./ClientLink.module.css";
import { handleActiveFunction } from "../../types";

interface IClientLinkProps {
  id: number;
  name: string;
}

export default function ClientLink({ name, id }: IClientLinkProps) {
  const handleActive: handleActiveFunction = ({ isActive }) => {
    if (!isActive)
      return Object.values(classNames)
        .filter((className) => !className.includes("client-link_active"))
        .join(" ");
    return Object.values(classNames).join(" ");
  };

  return (
    <NavLink className={handleActive} to={`${id}`}>
      {name}
    </NavLink>
  );
}
