import { ActionIcon, CloseButton, TextInput } from "@mantine/core";
import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import classNames from "./EditableAdresseeList.module.css";
import { randomId } from "@mantine/hooks";

import { useFormContext } from "../../pages/NewClientPage";

interface IEditableAdresseeListProps {
  index: number;
  placeholder: "Телефон" | "Email/факс";
  listName: "contacts" | "people";
}

export default function EditableAdresseeList({
  index,
  placeholder,
  listName,
}: IEditableAdresseeListProps) {
  const form = useFormContext();
  const listType = placeholder === "Телефон" ? "phones" : "email";
  const list = form.values[listName][index][listType];

  const addAdressee = (): void => {
    form.insertListItem(`${listName}.${index}.${listType}`, {
      value: "",
      _id: randomId(),
    });
  };

  const removeAdressee = (itemIndex: number): void => {
    form.removeListItem(`${listName}.${index}.${listType}`, itemIndex);
  };

  return (
    <ul className={classNames["adressee-list"]}>
      {list?.map((item, itemIndex) => (
        <li key={item._id} className={classNames["adressee-item"]}>
          {itemIndex === 0 ? (
            <ActionIcon
              onClick={addAdressee}
              variant='transparent'
              disabled={list.length === 3}
            >
              <IoIosAddCircleOutline size='28px' />
            </ActionIcon>
          ) : (
            <CloseButton
              onClick={() => removeAdressee(itemIndex)}
              size='28px'
            />
          )}
          <TextInput
            placeholder={placeholder}
            {...form.getInputProps(
              `${listName}.${index}.${listType}.${itemIndex}.value`
            )}
          />
        </li>
      ))}
    </ul>
  );
}
