function Button({ classValue, btnText }) {
  const classes = `fw-bold ${classValue}`;
  return <button className={classes}>{btnText}</button>;
}

export default Button;
