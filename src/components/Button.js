function Button({ classValue, btnText, handleMouseClick }) {
  const classes = `fw-bold ${classValue}`;
  return handleMouseClick ? (
    <button className={classes} onClick={handleMouseClick}>
      {btnText}
    </button>
  ) : (
    <button className={classes}>{btnText}</button>
  );
}

export default Button;
