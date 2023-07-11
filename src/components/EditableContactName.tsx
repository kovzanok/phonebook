import { TextInput } from "@mantine/core";

import { useFormContext } from "../formContext/index";

interface IContactNameProps {
  listName: "contacts" | "people";
  index: number;
}

export default function EditableContactName({
  listName,
  index,
}: IContactNameProps) {
  const form = useFormContext();
  const contact = form.values[listName][index];
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "5px" }}>
      {"position" in contact ? (
        <>
          <TextInput
            size='lg'
            fw='bold'
            placeholder='Должность'
            {...form.getInputProps(`${listName}.${index}.position`)}
          ></TextInput>
          <TextInput
            size='lg'
            placeholder='ФИО'
            fz='20px'
            {...form.getInputProps(`${listName}.${index}.name`)}
          ></TextInput>
        </>
      ) : (
        <TextInput
          size='lg'
          placeholder='Контакт'
          fz='20px'
          {...form.getInputProps(`${listName}.${index}.name`)}
        ></TextInput>
      )}
    </div>
  );
}
