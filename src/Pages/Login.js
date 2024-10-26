import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid2, TextField, Typography } from "@mui/material";
import { AuthData } from "../Auth/AuthWrapper";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassowrd] = useState("");
  const { login } = AuthData();

  const doLogin = async () => {
    try {
      await login(userName, password);
      navigate("/account");
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <Grid2>
      <Typography>Username</Typography>
      <TextField
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Typography>Password</Typography>
      <TextField
        type="password"
        value={password}
        onChange={(e) => setPassowrd(e.target.value)}
      />
      <Button type="outlined" onClick={doLogin}>Log in</Button>
      {errorMessage ? <Typography>{errorMessage}</Typography> : null}
    </Grid2>
  );
};

export {Login};
