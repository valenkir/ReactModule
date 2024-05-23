import Button from "./Button";
import "../css/ModalWindow.scss";

function ModalWindow({ classValue, okBtnHandler }) {
  return (
    <div className={classValue}>
      <h2 className="fs-24">Welcome, {sessionStorage.getItem("username")}</h2>
      <Button
        classValue={"secondary-btn"}
        btnText={"OK"}
        handleMouseClick={okBtnHandler}
      />
    </div>
  );
}

export default ModalWindow;
