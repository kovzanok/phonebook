import { ActionIcon, TextInput, Title, CloseButton } from "@mantine/core";
import React from "react";
import classNames from "./EditableContactsList.module.css";
import EditableContactName from "../EditableContactName";
import { randomId } from "@mantine/hooks";
import EditableAdresseeList from "../EditableAdresseeList";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useFormContext } from "../../pages/NewClientPage";

interface IEditableContactsListProps {
  list: "contacts" | "people";
}

export const EditableContactsList = ({
  children,
  list,
}: React.PropsWithChildren<IEditableContactsListProps>) => {
  {
    const form = useFormContext();
    const contactList = form.values[list];

    const addContact = () => {
      if (list === "people") {
        form.insertListItem("people", {
          _id: randomId(),
          position: "Энергетик",
          name: "",
          phones: [{ value: "", _id: randomId() }],
          email: [{ value: "", _id: randomId() }],
          info: "",
        });
      } else {
        form.insertListItem("contacts", {
          name: "",
          phones: [{ value: "", _id: randomId() }],
          email: [{ value: "", _id: randomId() }],
        });
      }
    };

    const removeContact = (index: number) => {
      form.removeListItem(list, index);
    };

    if (contactList.length !== 0) {
      return (
        <div className={classNames["list-wrapper"]}>
          <Title ta='center' size='h3'>
            {children}
          </Title>
          <ul className={classNames["contacts-list"]}>
            {contactList.map((contact, index) => {
              return (
                <li key={contact._id} className={classNames["contacts-item"]}>
                  {index === 0 ? (
                    <ActionIcon onClick={addContact}>
                      <IoIosAddCircleOutline size='28px' />
                    </ActionIcon>
                  ) : (
                    <CloseButton
                      onClick={() => removeContact(index)}
                      size='28px'
                    />
                  )}
                  <EditableContactName listName={list} index={index} />
                  <EditableAdresseeList
                    index={index}
                    listName={list}
                    placeholder='Телефон'
                  />
                  <EditableAdresseeList
                    placeholder='Email/факс'
                    listName={list}
                    index={index}
                  />
                  {"info" in contact && (
                    <TextInput
                      placeholder='Примечание'
                      {...form.getInputProps(`${list}.${index}.info`)}
                    />
                  )}
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
