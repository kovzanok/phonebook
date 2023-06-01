import { Title, Text } from "@mantine/core";
import React from "react";
import { IContact, IPerson } from "../../types";
import AdresseeList from "../AdresseeList";
import classNames from "./ContactsList.module.css";
import ContactName from "../ContactName";

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
          <Title ta='center' size='h3'>
            {children}
          </Title>
          <ul className={classNames["contacts-list"]}>
            {contacts.map((contact) => (
              <li className={classNames["contacts-item"]}>
                <ContactName contact={contact}/>
                <AdresseeList list={contact.phones} />
                <AdresseeList list={contact.destination} />
                {"info" in contact && <Text fz='20px'>{contact.info}</Text>}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <></>;
  }
};
