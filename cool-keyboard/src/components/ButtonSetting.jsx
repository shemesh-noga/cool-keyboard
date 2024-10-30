function ButtonSetting(props) {
  return (
    <>
      <button onClick={() => props.onClickSetting()}>{props.value}</button>
    </>
  );
}

export default ButtonSetting;
