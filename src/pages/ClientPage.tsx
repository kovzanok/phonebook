import React from 'react'

export default function ClientPage() {
  const client: IClient = {
    id: 1,
    name: "Дорорс",
    substations: [
      { id: 1, name: "Заямное", info: "ф.1" },
      { id: 2, name: "qwe", info: "ф.1" },
    ],
    people: [
      {
        position: "Энергетик",
        name: "Матушонок",
        phones: [{ value: "80291654195", id: 1 }],
        destination: [{ value: "asdsa@asdas.asd", id: 1 }],
        info: "не звонить",
        id: 1,
      },
      {
        position: "Энергетик",
        name: "Матушонок",
        phones: [{ value: "80291654195", id: 1 }],
        destination: [{ value: "asdsa@asdas.asd", id: 1 }],
        info: "",
        id: 1,
      },
    ],
    contacts: [
      {
        name: "Для согласований",
        phones: [
          { value: "375-29-1654195", id: 1 },
          { value: "672-02-12", id: 1 },
        ],
        destination: [
          { value: "123-40-23", id: 1 },
          { value: "123-40-23", id: 1 },
        ],
        id: 1,
      },
      {
        name: "Для согласований",
        phones: [
          { value: "672-02-12", id: 1 },
          { value: "672-02-12", id: 1 },
        ],
        destination: [
          { value: "123-40-23", id: 1 },
          { value: "123-40-23", id: 1 },
        ],
        id: 1,
      },
    ],
  };

  return (
    <div>ClientPage</div>
  )
}
