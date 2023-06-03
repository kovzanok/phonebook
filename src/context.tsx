import { createContext } from "react";
import { authContextValueType } from "./types";

export const AuthContext = createContext<authContextValueType | null>(null);
export const LoginContext = createContext<string>("");