import React, { useMemo, useState } from "react";

export const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = useMemo(() => {
    return { user, setUser };
  }, [user, setUser]);

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
}

export default UserProvider;
