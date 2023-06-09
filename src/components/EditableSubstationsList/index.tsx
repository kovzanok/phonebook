import React from "react";
import { TextInput, ActionIcon, CloseButton, Title } from "@mantine/core";
import classNames from "./EditableSubstationList.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useFormContext } from "../../pages/NewClientPage";

import { randomId } from "@mantine/hooks";

export default function EditableSubstationList() {
  const form = useFormContext();
  const addSubstation = () => {
    form.insertListItem("substations", { _id: randomId(), name: "", info: "" });
  };

  const removeSubstation = (index: number) => {
    form.removeListItem("substations", index);
  };

  return (
    <div className={classNames["wrapper"]}>
      <ul className={classNames["substation-list"]}>
        {form.values.substations.map((substation, index) => (
          <li key={substation._id} className={classNames["substation-item"]}>
            <Title ta='center' size='h4'>
              Питающая ПС
            </Title>
            <div className={classNames["substation-item__wrapper"]}>
              {index === 0 ? (
                <ActionIcon onClick={addSubstation}>
                  <IoIosAddCircleOutline size='28px' />
                </ActionIcon>
              ) : (
                <CloseButton
                  onClick={() => removeSubstation(index)}
                  size='28px'
                />
              )}
              <div className={classNames["inputs-wrapper"]}>
                <TextInput
                  placeholder='Подстанция'
                  {...form.getInputProps(`substations.${index}.name`)}
                />
                <TextInput
                  placeholder='Фидера'
                  {...form.getInputProps(`substations.${index}.info`)}
                  fz='20px'
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
