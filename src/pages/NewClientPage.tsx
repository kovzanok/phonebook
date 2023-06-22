import { Button, Flex, TextInput } from "@mantine/core";
import axios from "../axios/axios";
import { IClient, adressee } from "../types";
import EditableSubstationList from "../components/EditableSubstationsList";
import { EditableContactsList } from "../components/EditableContactsList";
import { createFormContext, isNotEmpty } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { useNavigate } from "react-router";
import { addClient, updateClient } from "../store/clientsSlice";
import { useAppDispatch } from "../store/store";


const initialClient: IClient = {
  _id: randomId(),
  name: "",
  substations: [{ _id: randomId(), name: "", info: "" }],
  people: [
    {
      _id: randomId(),
      position: "Энергетик",
      name: "",
      phones: [{ value: "", _id: randomId() }],
      email: [{ value: "", _id: randomId() }],
      info: "",
    },
  ],
  contacts: [
    {
      _id: randomId(),
      name: "",
      phones: [{ value: "", _id: randomId() }],
      email: [{ value: "", _id: randomId() }],
    },
  ],
};

const [FormProvider, useFormContext, useForm] = createFormContext<IClient>();

export { useFormContext };

const validatePhoneAndEmailField = (
  value: string,
  values: adressee,
  path: string
) => {
  const listType = path.split(".")[0];
  const subListType = path.split(".")[2];
  const contactIndex = Number(path.split(".")[1]);
  const index = Number(path.split(".")[3]);
  try {
    const compareValue =
      values[listType][contactIndex][
        subListType === "email" ? "phones" : "email"
      ][index].value;
    if (compareValue.trim() === "" && value.trim() === "") {
      return `Введите ${
        subListType === "phones" ? "номер телефона" : "факс или email"
      }`;
    }
  } catch (err) {
    return null;
  }
};

export default function NewClientPage({ client = initialClient }) {
  const dispatch = useAppDispatch();
  const isEditMode = client !== initialClient;
  const navigate = useNavigate();
  const form = useForm({
    initialValues: client,
    validate: {
      name: isNotEmpty("Введите название организации"),
      substations: {
        name: isNotEmpty("Введите название подстанции"),
      },
      people: {
        position: isNotEmpty("Введите должность сотрудника"),
        name: isNotEmpty("Введите ФИО сотрудника"),
        phones: {
          value: validatePhoneAndEmailField,
        },
        email: {
          value: validatePhoneAndEmailField,
        },
      },
      contacts: {
        name: isNotEmpty("Введите название контакта"),
        phones: {
          value: validatePhoneAndEmailField,
        },
        email: {
          value: validatePhoneAndEmailField,
        },
      },
    },
  });

  const handleSubmit = async () => {
    let data: IClient;
    if (isEditMode) {
      ({ data } = await axios.put(`clients/${form.values._id}`, form.values));
      dispatch(updateClient(data));
    } else {
      ({ data } = await axios.post("clients/new", form.values));
      dispatch(addClient(data));
    }
    navigate(`/${data._id}`, { replace: true });
  };

  return (
    <Flex gap='20px' direction='column' align='center'>
      <FormProvider form={form}>
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          <TextInput
            ta='center'
            w='65%'
            m='0 auto'
            style={{ fontSize: "20px" }}
            placeholder='Название организации'
            label={
              <span
                style={{
                  fontSize: "30px",
                }}
              >
                Потребитель
              </span>
            }
            {...form.getInputProps("name")}
          />
          <EditableSubstationList />
          <EditableContactsList list={"contacts"}>
            Контакты для связи
          </EditableContactsList>
          <EditableContactsList list={"people"}>Персонал</EditableContactsList>
          {isEditMode ? (
            <Flex mt='20px' justify='center' gap='20px'>
              <Button fz='20px' type='submit' color='green'>
                Изменить
              </Button>
              <Button
                onClick={() => navigate(`/${client._id}`, { replace: true })}
                fz='20px'
                color='red'
              >
                Назад
              </Button>
            </Flex>
          ) : (
            <Flex mt='20px' justify='center' gap='20px'>
              <Button fz='20px' type='submit' color='green'>
                Сохранить
              </Button>
              <Button onClick={() => form.reset()} fz='20px' color='red'>
                Сбросить
              </Button>
            </Flex>
          )}
        </form>
      </FormProvider>
    </Flex>
  );
}
