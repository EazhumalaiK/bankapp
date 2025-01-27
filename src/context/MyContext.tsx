import { createContext } from "react";

interface MyContextType {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);
