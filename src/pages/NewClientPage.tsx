import { Flex, TextInput } from "@mantine/core";
import React from "react";
import { NewClient } from "../types";
import EditableSubstationList from "../components/EditableSubstationsList";
import { EditableContactsList } from "../components/EditableContactsList";

const initialClient: NewClient = {
  name: "",
  substations: [
    { name: "", info: "" },
    { name: "", info: "" },
  ],
  people: [
    {
      position: "Энергетик",
      name: "",
      phones: ["", "", ""],
      email: ["", ""],
      info: "",
    },
    {
      position: "Энергетик",
      name: "",
      phones: ["", ""],
      email: ["", ""],
      info: "",
    },
  ],
  contacts: [
    {
      name: "",
      phones: ["", ""],
      email: ["", "", ""],
    },
    {
      name: "",
      phones: ["", ""],
      email: ["", "", ""],
    },
  ],
};

export default function NewClientPage() {
  return (
    <Flex gap='20px' direction='column' align='center'>
      <form style={{ width: "100%",display:'flex',flexDirection:'column',rowGap:'10px' }}>
        <TextInput
          ta='center'
          w='50%'
          m='0 auto'
          style={{ fontSize: "20px" }}
          placeholder='Название организации'
          label={
            <span
              style={{
                fontSize: "30px",
              }}
            >
              Потребитель
            </span>
          }
          value={initialClient.name}
        />
        <EditableSubstationList substations={initialClient.substations} />
        <EditableContactsList contacts={initialClient.contacts}>
          Контакты для связи
        </EditableContactsList>
        <EditableContactsList contacts={initialClient.people}>
          Персонал
        </EditableContactsList>
      </form>
    </Flex>
  );
}
