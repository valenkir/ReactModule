import FormField from "./FormField";
import Button from "./Button";
import "../css/Login.scss";

function LoginForm() {
  return (
    <form className="d-flex align-items-center LoginForm-form">
      <FormField classValue={"form-field"} placeholder={"Email"} type="email" />
      <FormField
        classValue={"form-field"}
        placeholder={"Password"}
        type="text"
      />
      <Button classValue={"primary-btn"} btnText={"Log In"} />
    </form>
  );
}

export default LoginForm;
