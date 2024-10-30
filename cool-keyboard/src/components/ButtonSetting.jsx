function ButtonSetting(props) {
  return (
    <>
      <button
        onClick={() => props.onClickSetting(props.id)}
        className="settingsItem"
      >
        {props.value}
      </button>
    </>
  );
}

export default ButtonSetting;
