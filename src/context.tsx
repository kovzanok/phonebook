import { createContext } from "react";
import { authContextValueType, loginContextValueType } from "./types";

export const AuthContext = createContext<authContextValueType | null>(null);
export const LoginContext = createContext<loginContextValueType | null>(null);