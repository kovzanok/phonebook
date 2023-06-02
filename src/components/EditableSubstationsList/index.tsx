import { substation } from "../../types";
import {
  TextInput,
  ActionIcon,
  CloseButton,
  Title,
} from "@mantine/core";
import classNames from "./EditableSubstationList.module.css";
import { nanoid } from "nanoid/non-secure";
import { IoIosAddCircleOutline } from "react-icons/io";

interface ISubstationListProps {
  substations: substation[];
}

export default function EditableSubstationList({
  substations,
}: ISubstationListProps) {
  return (
    <div className={classNames["wrapper"]}>
      <ul className={classNames["substation-list"]}>
        {substations.map((substation, index) => (
          <li className={classNames["substation-item"]} key={nanoid()}>
            <Title ta='center' size='h4'>Питающая ПС</Title>
            <div className={classNames["substation-item__wrapper"]}>              
              {index === 0 ? (
                <ActionIcon>
                  <IoIosAddCircleOutline size='28px' />
                </ActionIcon>
              ) : (
                <CloseButton size='28px' />
              )}
              <div className={classNames["inputs-wrapper"]}>
                <TextInput
                  placeholder='Подстанция'
                  value={substation.name}
                />
                <TextInput
                  placeholder='Фидера'
                  value={substation.info}
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
