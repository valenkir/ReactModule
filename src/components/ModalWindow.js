import { useContext } from "react";
import Button from "./Button";
import "../css/ModalWindow.scss";
import { ThemeContext } from "../context/ThemeContext.js";

function ModalWindow({ classValue, okBtnHandler }) {
  const theme = useContext(ThemeContext);
  return (
    <div className={classValue}>
      <h2 className={`${theme}-primary-text fs-24`}>
        Welcome, {sessionStorage.getItem("username")}
      </h2>
      <Button
        classValue={`secondary-btn ${theme}-primary-text`}
        btnText={"OK"}
        handleMouseClick={okBtnHandler}
      />
    </div>
  );
}

export default ModalWindow;
