import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import classNames from "./ClientLink.module.css";
import { IClient, handleActiveFunction } from "../../types";

type IClientLinkProps = Pick<IClient, "_id" | "name">;

export default function ClientLink({ name, _id }: IClientLinkProps) {
  const [searchParams] = useSearchParams();
  const handleActive: handleActiveFunction = ({ isActive }) => {
    if (!isActive)
      return Object.values(classNames)
        .filter((className) => !className.includes("client-link_active"))
        .join(" ");
    return Object.values(classNames).join(" ");
  };

  return (
    <NavLink className={handleActive} to={`${_id}?${searchParams.toString()}`}>
      {name}
    </NavLink>
  );
}
