import React, { createContext, ReactNode, useState } from "react";

interface User {
  FullName: string;
  UserID: string;
}

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface AllContextProps {
  children: ReactNode;
}

function AllContext({ children }: AllContextProps) {
  const [user, setUser] = useState<User>({ FullName: "", UserID: "" });
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
}

export default AllContext;
