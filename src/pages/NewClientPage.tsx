import { Button, Flex, TextInput } from "@mantine/core";
import React from "react";
import { NewClient } from "../types";
import EditableSubstationList from "../components/EditableSubstationsList";
import { EditableContactsList } from "../components/EditableContactsList";

const initialClient: NewClient = {
  name: "",
  substations: [{ name: "", info: "" }],
  people: [
    {
      position: "Энергетик",
      name: "",
      phones: [""],
      email: [""],
      info: "",
    },
  ],
  contacts: [
    {
      name: "",
      phones: [""],
      email: [""],
    },
  ],
};

export default function NewClientPage({ client = initialClient }) {
  const isEditMode = client !== initialClient;
  return (
    <Flex gap='20px' direction='column' align='center'>
      <form style={{ width: "100%",display:'flex',flexDirection:'column',rowGap:'10px' }}>
        <TextInput
          ta='center'
          w='65%'
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
          value={client.name}
        />
        <EditableSubstationList substations={client.substations} />
        <EditableContactsList contacts={client.contacts}>
          Контакты для связи
        </EditableContactsList>
        <EditableContactsList contacts={client.people}>
          Персонал
        </EditableContactsList>
        {isEditMode ? (
          <Flex mt='20px' justify='center' gap='20px'>
            <Button fz='20px' type='submit' color='green'>
              Изменить
            </Button>
            <Button fz='20px' color='red'>
              Отменить
            </Button>
          </Flex>
        ) : (
          <Flex mt='20px' justify='center' gap='20px'>
            <Button
              fz='20px'
              type='submit'
              color='green'
            >
              Сохранить
            </Button>
            <Button fz='20px' color='red'>
              Сбросить
            </Button>
          </Flex>
        )}
      </form>
    </Flex>
  );
}
