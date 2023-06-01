import { substation } from "../../types";
import { Title, Text } from "@mantine/core";
import classNames from "./SubstationList.module.css";


interface ISubstationListProps {
  substations: substation[];
}

export default function SubstationList({ substations }: ISubstationListProps) {
  return (
    <ul className={classNames["substation-list"]}>
      {substations.map((substation,index) => (
        <li className={classNames["substation-item"]} key={index}>
          <Title size='h3'>{substation.name}</Title>
          <Text fz='20px'>{substation.info}</Text>
        </li>
      ))}
    </ul>
  );
}
