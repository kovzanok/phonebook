import React from "react";
import { IContact, IPerson } from "../types";
import { TextInput } from "@mantine/core";

interface IContactNameProps {
  contact: IContact | IPerson;
}

export default function EditableContactName({ contact }: IContactNameProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "5px" }}>
      {"position" in contact ? (
        <>
          <TextInput
            fw='bold'
            placeholder='Должность'
            value={contact.position}
          ></TextInput>
          <TextInput
            placeholder='ФИО'
            fz='20px'
            value={contact.name}
          ></TextInput>
        </>
      ) : (
        <TextInput
          placeholder='Контакт'
          fz='20px'
          value={contact.name}
        ></TextInput>
      )}
    </div>
  );
}
