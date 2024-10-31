function ButtonSetting(props) {
  return (
    // hi
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
