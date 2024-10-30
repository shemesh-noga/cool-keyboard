function ButtonSetting(props) {
  return (
    <>
      <button onClick={() => props.onClickSetting(props.id)}>
        {props.value}
      </button>
    </>
  );
}

export default ButtonSetting;
