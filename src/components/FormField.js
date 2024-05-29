function FormField({
  classValue,
  placeholder,
  type,
  value,
  name,
  onInputHandler,
  onBlurHandler,
}) {
  return (
    <input
      className={classValue}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onInput={onInputHandler}
      onBlur={onBlurHandler}
    />
  );
}

export default FormField;
