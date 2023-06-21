import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import myAxios from "../axios/axios";
import { LoginParams } from "../types";
import { RootState } from "./store";
import axios, { AxiosResponse } from "axios";

type LoginResponse = { userLogin: string; token: string };

export const fetchRegistration = createAsyncThunk(
  "auth/registration",
  async (params: LoginParams) => {
    try {
      const { data }: { data: LoginResponse } = await myAxios.post(
        "/auth/registration",
        params
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const response: AxiosResponse<ErrorMessage, any> = error.response;
        throw new Error(response.data.message);
      }
    }
  }
);

type ErrorMessage = {
  message: string;
};

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async (params: LoginParams) => {
    try {
      const { data }: { data: LoginResponse } = await myAxios.post(
        "/auth/login",
        params
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const response: AxiosResponse<ErrorMessage, any> = error.response;
        throw new Error(response.data.message);
      }
    }
  }
);

export const verifyAuth = createAsyncThunk(
  "auth/verify",
  async (): Promise<{ login: string }> => {
    const { data } = await myAxios.get("/auth/verify");
    return data;
  }
);

type AuthState = {
  isAuth: boolean;
  login: string | null;
  isLoading: "idle" | "loading" | "finished";
};

const initialState: AuthState = {
  isAuth: false,
  login: null,
  isLoading: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.login = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchRegistration.fulfilled, (state, action) => {
      state.isAuth = true;
      state.isLoading = "finished";
      console.log(action.payload);
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      if (action.payload) {
        state.isAuth = true;
        state.login = action.payload.userLogin;
      }
    });
    builder.addCase(verifyAuth.fulfilled, (state, action) => {
      state.isAuth = true;
      state.isLoading = "finished";
      state.login = action.payload.login;
    });
    builder.addCase(verifyAuth.pending, (state) => {
      state.isLoading = "loading";
    });
    builder.addCase(verifyAuth.rejected, (state) => {
      state.isLoading = "finished";
    });
  },
});

export const { logout } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
