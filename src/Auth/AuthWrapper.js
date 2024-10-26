import { createContext, useContext, useState } from "react";
import NestedMenu from "../components/nestedList";
import { RenderRoutes, RenderMenu } from "../Structure/RenderNavigation";

const AuthContext = createContext();
const AuthData = () => useContext(AuthContext);

const AuthWrapper = () => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  const login = (userName, password) => {
    return new Promise((resolve, reject) => {
      if (password === "Asulo") {
        setUser({ name: userName, isAuthenticated: true });
        resolve("Suksek");
      } else {
        reject("Bego Lu");
      }
    });
  };

  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <RenderMenu />
      <RenderRoutes />
    </AuthContext.Provider>
  );
};

export { AuthData, AuthWrapper };
