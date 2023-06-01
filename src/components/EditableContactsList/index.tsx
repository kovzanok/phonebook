import { ActionIcon, TextInput, Title, CloseButton } from "@mantine/core";
import React from "react";
import { IContact, IPerson } from "../../types";
import classNames from "./EditableContactsList.module.css";
import EditableContactName from "../EditableContactName";
import { nanoid } from "nanoid";
import EditableAdresseeList from "../EditableAdresseeList";
import { IoIosAddCircleOutline } from "react-icons/io";

interface IEditableContactsListProps {
  contacts: IPerson[] | IContact[];
}

export const EditableContactsList = ({
  children,
  contacts,
}: React.PropsWithChildren<IEditableContactsListProps>) => {
  {
    if (contacts.length !== 0) {
      return (
        <div className={classNames["list-wrapper"]}>
          <Title ta='center' size='h3'>
            {children}
          </Title>
          <ul className={classNames["contacts-list"]}>
            {contacts.map((contact, index) => (
              <li key={nanoid()} className={classNames["contacts-item"]}>
                {index === 0 ? (
                  <ActionIcon>
                    <IoIosAddCircleOutline size='28px' />
                  </ActionIcon>
                ) : (
                  <CloseButton size='28px' />
                )}
                <EditableContactName contact={contact} />
                <EditableAdresseeList
                  placeholder='Номер телефона'
                  list={contact.phones}
                />
                <EditableAdresseeList
                  placeholder='email/факс'
                  list={contact.email}
                />
                {"info" in contact && (
                  <TextInput
                    placeholder='Дополнительная информация'
                    value={contact.info}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <></>;
  }
};
