import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "../axios/axios";
import { IClient } from "../types";
import { RootState } from "./store";

export const fetchClients = createAsyncThunk(
  "clients/get",
  async (searchParams: URLSearchParams) => {
    const { data }: { data: IClient[] } = await myAxios.get("/clients/all", {
      params: searchParams,
    });
    return data;
  }
);

type ClientsState = IClient[];

const initialState: ClientsState = [];

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchClients.fulfilled, (_, action) => action.payload);
  },
});

export const {} = clientsSlice.actions;

export const clientsSelector = (state: RootState) => state.clients;

export default clientsSlice.reducer;
