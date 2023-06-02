import { ActionIcon, CloseButton, TextInput } from "@mantine/core";
import React from "react";
import { nanoid } from "nanoid";
import { IoIosAddCircleOutline } from "react-icons/io";
import classNames from "./EditableAdresseeList.module.css";

interface IEditableAdresseeListProps {
  list: string[] | [];
  placeholder: "Телефон" | "Email/факс";
}

export default function EditableAdresseeList({
  list,
  placeholder,
}: IEditableAdresseeListProps) {
  return (
    <ul className={classNames["adressee-list"]}>
      {list?.map((item, index) => (
        <li className={classNames["adressee-item"]} key={nanoid()}>
          {index === 0 ? (
            <ActionIcon variant="transparent" disabled={list.length === 3}>
              <IoIosAddCircleOutline size='28px' />
            </ActionIcon>
          ) : (
            <CloseButton size='28px' />
          )}
          <TextInput placeholder={placeholder} value={item} />
        </li>
      ))}
    </ul>
  );
}
