import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
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
  reducers: {
    addClient: (state, action: PayloadAction<IClient>) => {
      state.push(action.payload);
    },
    updateClient: (state, action: PayloadAction<IClient>) => {
      return state.map((client) => {
        if (client._id === action.payload._id) return action.payload;
        return client;
      });
    },
    removeClient: (state, action: PayloadAction<string>) =>
      state.filter((client) => client._id !== action.payload),
  },
  extraReducers(builder) {
    builder.addCase(fetchClients.fulfilled, (_, action) => action.payload);
  },
});

export const { addClient, removeClient, updateClient } = clientsSlice.actions;

export const clientsSelector = (state: RootState) => state.clients;

export default clientsSlice.reducer;
