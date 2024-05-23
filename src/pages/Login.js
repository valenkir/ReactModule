import FormField from "../components/FormField";
import Button from "../components/Button";
import "../css/Login.scss";
import { useState } from "react";

function createRandomString(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length - 1));
  }
  return result;
}

function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const login = (username, password) => {
    let token;
    const userData = [
      {
        username: "admin",
        password: "12345",
      },
      {
        username: "Valentyna",
        password: "12345",
      },
    ];
    userData.forEach((data) => {
      if (data.username === username && data.password === password) {
        sessionStorage.setItem("username", username);
        token = createRandomString(50);
        sessionStorage.setItem("authToken", token);
      }
    });

    return token;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setToken(login(username, password));
  };

  return (
    <form
      className="d-flex align-items-center LoginForm-form"
      onSubmit={handleSubmit}
    >
      <FormField
        classValue={"form-field username-field"}
        placeholder={"Username"}
        type="text"
        onInputHandler={(event) => setUserName(event.target.value)}
      />
      <FormField
        classValue={"form-field password-field"}
        placeholder={"Password"}
        type="password"
        onInputHandler={(event) => setPassword(event.target.value)}
      />
      <Button classValue={"primary-btn"} btnText={"Log In"} type={"submit"} />
    </form>
  );
}

export default Login;
