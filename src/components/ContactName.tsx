import React from "react";
import { IContact } from "../types";
import { Text, Title } from "@mantine/core";

interface IContactNameProps {
  contact: IContact;
}

export default function ContactName({ contact }: IContactNameProps) {
  return (
    <div>
      {"position" in contact && (
        <Title size='h3'>{contact.position as React.ReactNode}</Title>
      )}
      <Text fz='20px'>{contact.name}</Text>
    </div>
  );
}
