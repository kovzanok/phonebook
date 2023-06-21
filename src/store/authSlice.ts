import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios/axios";
import { AxiosError } from "axios";
import { LoginParams } from "../types";

type LoginResponse = { userLogin: string; token: string };

export const fetchRegistration = createAsyncThunk(
  "auth/registration",
  async (params: LoginParams) => {
    const { data } = await axios.post("/auth/registration", params);
    return data;
  }
);

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async (params: LoginParams): Promise<LoginResponse> => {
    const { data }: { data: LoginResponse } = await axios.post(
      "/auth/login",
      params
    );
    return data;
  }
);

export const verifyAuth = createAsyncThunk(
  "auth/verify",
  async (): Promise<{ login: string }> => {
    const { data } = await axios.get("/auth/verify");
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
    builder.addCase(fetchRegistration.pending, (state, action) => {
      state.isLoading = "loading";
      console.log(action.payload);
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isAuth = true;
      state.login = action.payload.userLogin;
      state.isLoading = "finished";
    });
    builder.addCase(fetchLogin.pending, (state) => {
      state.isLoading = "loading";
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.isLoading = "finished";
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

export default authSlice.reducer;
