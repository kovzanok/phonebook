import { substation } from "../../types";
import { Button, TextInput } from "@mantine/core";
import classNames from "./EditableSubstationList.module.css";
import { nanoid } from "nanoid/non-secure";


interface ISubstationListProps {
  substations: substation[];
}

export default function EditableSubstationList({
  substations,
}: ISubstationListProps) {
  return (
    <div className={classNames["wrapper"]}>
      <Button>Добавить ПС</Button>
      <ul className={classNames["substation-list"]}>
        {substations.map((substation) => (
          <li className={classNames["substation-item"]} key={nanoid()}>
            <TextInput
              label='Питающая ПС'
              required
              placeholder='Название подстанции'
              value={substation.name}
            />
            <TextInput
              placeholder='Информация о фидерах'
              value={substation.info}
              fz='20px'
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
