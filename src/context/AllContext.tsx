import React, { createContext, ReactNode, useState } from "react";

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserContextType {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

interface AllContextProps {
  children: ReactNode;
}

function AllContext({ children }: AllContextProps) {
  const [user, setUser] = useState("");
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
}

export default AllContext;
