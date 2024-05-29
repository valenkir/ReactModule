import { useContext, useState } from "react";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { ThemeContext } from "../context/Theme";
import "../css/Signup.scss";

const isEmailValid = (email) => {
  return (
    email.length === 0 ||
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );
};

function Signup({ setToken, setPage }) {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const signup = () => {
    sessionStorage.setItem("authToken", "13429test");
    setPage("landing");
  };

  const onBlurHandler = (event) => {
    let { name, value } = event.target;
    value = value.trim();
    console.log(value);
    switch (name) {
      case "username":
        if (value.length < 2) {
          setUsernameError("Username must be at least 2 characters long");
        } else if (value.length > 22) {
          setUsernameError("Username must be no more than 22 characters long");
        } else {
          setUsernameError("");
        }
        break;
      case "password":
        if (value.length < 5) {
          setPasswordError("Password must be at least 5 characters long");
        } else {
          setPasswordError("");
        }
        break;
      case "confirmPassword":
        if (!value.length) {
          setConfirmPasswordError("Please, repeat your password");
        } else if (value !== formData.password) {
          setConfirmPasswordError("The passwords don't match");
        } else {
          setConfirmPasswordError("");
        }
        break;
      case "email":
        console.log(isEmailValid(value));
        if (!isEmailValid(value)) {
          setEmailError("Email format must be: example@example.com");
        } else {
          setEmailError("");
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const errors = [
      usernameError,
      confirmPasswordError,
      passwordError,
      emailError,
    ];
    const presentErrors = errors.filter((error) => error.length !== 0);
    if (
      !presentErrors.length &&
      formData.username.trim() &&
      formData.password.trim() &&
      formData.confirmPassword.trim()
    ) {
      sessionStorage.setItem("username", formData.username);
      setFormError(false);
      setToken(signup());
    } else {
      setFormError(true);
    }
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
        classValue={`form-field username-field ${theme}-primary-text form-field-${theme} ${
          usernameError && "form-field-invalid"
        }`}
        placeholder={"Username"}
        type="text"
        name="username"
        value={formData.username}
        onInputHandler={handleInput}
        onBlurHandler={onBlurHandler}
      />
      {usernameError && <label className="error-text">{usernameError}</label>}
      <FormField
        classValue={`form-field password-field ${theme}-primary-text form-field-${theme} ${
          passwordError && "form-field-invalid"
        }`}
        placeholder={"Password"}
        type="password"
        name="password"
        value={formData.password}
        onInputHandler={handleInput}
        onBlurHandler={onBlurHandler}
      />
      {passwordError && <label className="error-text">{passwordError}</label>}
      <FormField
        classValue={`form-field password-field ${theme}-primary-text form-field-${theme} ${
          confirmPasswordError && "form-field-invalid"
        }`}
        placeholder={"Confirm password"}
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onInputHandler={handleInput}
        onBlurHandler={onBlurHandler}
      />
      {confirmPasswordError && (
        <label className="error-text">{confirmPasswordError}</label>
      )}
      <FormField
        classValue={`form-field password-field ${theme}-primary-text form-field-${theme} ${
          emailError && "form-field-invalid"
        }`}
        placeholder={"Email"}
        type="email"
        name="email"
        value={formData.email}
        onInputHandler={handleInput}
        onBlurHandler={onBlurHandler}
      />
      {emailError && <label className="error-text">{emailError}</label>}
      {formError && (
        <label className="error-text">
          Please, fill the form with valid values.
        </label>
      )}
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
