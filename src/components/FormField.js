function FormField({ classValue, placeholder, type, onInputHandler }) {
  return (
    <input
      className={classValue}
      placeholder={placeholder}
      type={type}
      onInput={onInputHandler}
    />
  );
}

export default FormField;
