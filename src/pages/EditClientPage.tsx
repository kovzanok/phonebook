import React from 'react'
import { IClient } from '../types';
import NewClientPage from './NewClientPage';

export default function EditClientPage() {

  //useEffect to get client
  const clientToEdit: IClient = {
    id: 1,
    name: "Дорорс",
    substations: [
      { name: "Заямное", info: "ф.1" },
      { name: "qwe", info: "ф.1" },
    ],
    people: [
      {
        position: "Энергетик",
        name: "Матушонок",
        phones: ["80291654195"],
        email: ["asdsa@asdas.asd"],
        info: "не звонить",
      },
      {
        position: "Энергетик",
        name: "Матушонок",
        phones: ["80291654195"],
        email: ["asdsa@asdas.asd"],
        info: "",
      },
    ],
    contacts: [
      {
        name: "Для согласований",
        phones: ["375-29-1654195", "672-02-12"],
        email: ["123-40-23", "123-40-23"],
      },
      {
        name: "Для согласований",
        phones: ["672-02-12", "672-02-12"],
        email: ["123-40-23", "123-40-23"],
      },
    ],
  };

  return (
    <NewClientPage client={clientToEdit}/>
  )
}
