import { useContext, useState } from "react";
import axios from "axios";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { ThemeContext } from "../context/Theme";
import "../css/Login.scss";

function createRandomString(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length - 1));
  }
  return result;
}

function Login({ setToken, setPage }) {
  const { theme } = useContext(ThemeContext);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [formError, setFormError] = useState(false);

  const login = (username, password) => {
    let token;
    axios
      .get("./users.json")
      .then(function (response) {
        response.data.forEach((data) => {
          if (data.username === username && data.password === password) {
            sessionStorage.setItem("username", username);
            token = createRandomString(50);
            sessionStorage.setItem("authToken", token);
            setPage("landing");
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    return token;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = login(username, password);
    if (token) {
      setToken(token);
      setFormError(false);
    } else {
      setFormError(true);
    }
  };

  const navigateToSignup = (event) => {
    event.preventDefault();
    setPage("signup");
  };

  return (
    <form
      className={`d-flex align-items-center Login-form ${theme}-bg-secondary-gradient`}
      onSubmit={handleSubmit}
    >
      <FormField
        classValue={`form-field username-field ${theme}-primary-text form-field-${theme}`}
        placeholder={"Username"}
        type="text"
        onInputHandler={(event) => setUserName(event.target.value)}
      />
      <FormField
        classValue={`form-field password-field ${theme}-primary-text form-field-${theme}`}
        placeholder={"Password"}
        type="password"
        onInputHandler={(event) => setPassword(event.target.value)}
      />
      {formError && (
        <label className="error-text">
          The username or password is invalid
        </label>
      )}
      <Button
        classValue={`primary-btn primary-btn-animation-${theme} ${theme}-bg-primary-gradient`}
        btnText={"Log In"}
        type={"submit"}
      />
      <a
        href="#"
        className={`${theme}-primary-text Login-form-link`}
        onClick={navigateToSignup}
      >
        Don't have an account yet? Sign up!
      </a>
    </form>
  );
}

export default Login;
