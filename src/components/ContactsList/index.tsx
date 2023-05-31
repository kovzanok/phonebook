import { Title, Grid, Text } from "@mantine/core";
import React from "react";
import { IContact, IPerson } from "../../types";
import AdresseeList from "../AdresseeList";
import classNames from "./ContactsList.module.css";

interface IContactsListProps {
  contacts: IPerson[] | IContact[] | undefined;
}

export const ContactsList = ({
  children,
  contacts,
}: React.PropsWithChildren<IContactsListProps>) => {
  {
    if (contacts) {
      return (
        <div className={classNames["list-wrapper"]}>
          <Title ta='center' size='h3'>{children}</Title>
          <ul className={classNames["contacts-list"]}>
            {contacts.map((contact) => {
              return (
                <li className={classNames["contacts-item"]}>
                  <Grid ta='center' justify='space-between' align='center'>
                    <Grid.Col span={3}>
                      {"position" in contact && (
                        <Title size='h3'>{contact.position}</Title>
                      )}
                      <Text fz='20px'>{contact.name}</Text>
                    </Grid.Col>
                    <Grid.Col span={3}>
                      <AdresseeList list={contact.phones} />
                    </Grid.Col>
                    <Grid.Col span={3}>
                      <AdresseeList list={contact.destination} />
                    </Grid.Col>
                    {"info" in contact && (
                      <Grid.Col span={3}>
                        <Text fz='20px'>{contact.info}</Text>
                      </Grid.Col>
                    )}
                  </Grid>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    return <></>;
  }
};
