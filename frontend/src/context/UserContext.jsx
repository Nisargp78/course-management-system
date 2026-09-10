import React, { createContext, useState } from "react";

export let userContext = createContext();

const UserContext = ({ children }) => {
  let [user, setUser] = useState(null);
  let login = (data) => {
    setUser(data);
  };
  return (
    <userContext.Provider value={{ user, login }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContext;
