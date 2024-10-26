import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../Auth/AuthWrapper";
import { nav } from "./navigation";
import { Grid2 } from "@mui/material";

const RenderRoutes = () => {
  const { user } = AuthData();

  return (
    <Routes>
      {nav.map((r, i) => {
        if (r.isPrivate && user.isAuthenticated) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else return false;
      })}
    </Routes>
  );
};

const RenderMenu = () => {
  const { user, logout } = AuthData();

  const MenuItem = ({ r }) => {
    return (
      <>
        <Link to={r.path}>{r.name}</Link>
      </>
    );
  };

  return (
    <>
      {nav.map((r, i) => {
        if (!r.isPrivate && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else if (user.isAuthenticated && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else return false;
      })}

      {user.isAuthenticated ? (
        <>
          <Link to={"#"} onClick={logout}>
            Log out
          </Link>
        </>
      ) : (
        <>
          <Link to={"login"}>Log in</Link>
        </>
      )}
    </>
  );
};

export {RenderMenu, RenderRoutes}