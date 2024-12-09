/* eslint-disable react-refresh/only-export-components */
import React, { createContext, SetStateAction, useContext, useState } from "react";

interface UserProps {
  id: number;
  name: string;
}   
interface UserContextProps {
  children?: React.ReactNode
  user?: UserProps | undefined
  setUser: React.Dispatch<SetStateAction<UserProps | undefined>>
}

const Context = createContext<UserContextProps | undefined>(undefined)


const UserContext: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [user, setUser] = useState<UserProps | undefined>(undefined);

  const values = {
    user,
    setUser
  }

  return(
    <Context.Provider value={values}>
        {children}
    </Context.Provider>
  )
};

const useUserContext = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error("useUserContext deve ser usado dentro de um UserProvider");
    }
    return context;
  };

export {useUserContext, UserContext}
