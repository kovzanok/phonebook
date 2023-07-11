import { createFormContext } from "@mantine/form";
import { IClient } from "../types";

const [FormProvider, useFormContext, useForm] = createFormContext<IClient>();

export { FormProvider,useFormContext,useForm };