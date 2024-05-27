import { useContext, useState } from "react";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { ThemeContext } from "../context/Theme";
import "../css/Signup.scss";

function Signup({ setToken, setPage }) {
  const { theme } = useContext(ThemeContext);
  const [username, setUserName] = useState();

  const signup = () => {
    sessionStorage.setItem("authToken", "13429test");
    setPage("landing");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem("username", username);
    setToken(signup());
  };

  const navigateToLogin = (event) => {
    event.preventDefault();
    setPage("login");
  };

  return (
    <form
      className={`d-flex align-items-center ${theme}-bg-secondary-gradient Signup-form`}
      onSubmit={handleSubmit}
    >
      <FormField
        classValue={`form-field username-field ${theme}-primary-text`}
        placeholder={"Username"}
        type="text"
        onInputHandler={(event) => setUserName(event.target.value)}
      />
      <FormField
        classValue={`form-field password-field ${theme}-primary-text`}
        placeholder={"Password"}
        type="password"
      />
      <FormField
        classValue={`form-field password-field ${theme}-primary-text`}
        placeholder={"Confirm password"}
        type="password"
      />
      <FormField
        classValue={`form-field password-field ${theme}-primary-text`}
        placeholder={"Email"}
        type="email"
      />
      <Button
        classValue={`primary-btn primary-btn-animation-${theme} ${theme}-bg-primary-gradient`}
        btnText={"Sign up"}
        type={"submit"}
      />
      <a
        href="#"
        className={`${theme}-primary-text Signup-form-link`}
        onClick={navigateToLogin}
      >
        Already have an account? Sign in!
      </a>
    </form>
  );
}

export default Signup;
