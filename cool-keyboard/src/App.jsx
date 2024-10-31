import { useState } from "react";
import "./App.css";
import {
  hebrew,
  englishLowerCase,
  englishUpperCase,
  allLang,
} from "./languages";
import Keyboard from "./components/Keyboard";
import ButtonSetting from "./components/ButtonSetting";
import Text from "./components/Text";
import Letter from "./components/Letter";

function App() {
  const [usersText, setUsersText] = useState([
    [<Letter value={"hi!"} Style={{ fontSize: 16 }} />],
  ]);
  const [language, setLanguage] = useState(englishUpperCase);
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState("#000000");
  let size;

  const numbers = [...language].filter((keychar, i) => i < 10);
  const letters = [...language].filter(
    (keychar, i) => i < language.length - 8 && i >= 10
  );
  const special = [...language].filter((keychar, i) => i > language.length - 8);

  function handleClickKey(keyChar) {
    setUsersText((prevText) => [
      ...prevText,
      <Letter
        key={Math.random()}
        style={{ fontSize: fontSize, color: color }}
        value={keyChar}
      />,
    ]);
  }

  function handleDeleteBtn() {
    setUsersText((prevText) => prevText.slice(0, -1));
  }

  function handleClearBtn() {
    setUsersText("");
  }

  function handleCaseChange() {
    return language === englishUpperCase
      ? setLanguage(englishLowerCase)
      : setLanguage(englishUpperCase);
  }

  function handleUndoBtn() {
    alert(`Entered handle undo btn`);
  }

  function handleFontBtn() {
    alert(`Entered handle font type btn`);
  }

  function handleFonsizePlusBtn() {
    setFontSize((prevSize) => prevSize + 1);
  }

  function handleFonsizeMinusBtn() {
    setFontSize((prevSize) => prevSize - 1);
  }

  function handleColorBtn(colorVal) {
    setColor(colorVal);
  }

  function handleLangChangeBtn() {
    console.log("language: ", language);
    if (language === englishUpperCase || language === englishLowerCase) {
      setLanguage(hebrew);
    } else if (language === hebrew) {
      setLanguage(englishUpperCase);
    }
  }

  function handleSettingClick(id) {
    switch (id) {
      case "deleteBtn":
        handleDeleteBtn();
        break;
      case "clearBtn":
        handleClearBtn();
        break;
      case "toLowerOrLowerCase":
        handleCaseChange();
        break;
      case "undoBtn":
        handleUndoBtn();
        break;
      case "fontBtn":
        handleFontBtn();
        break;
      case "fonsizePlusBtn":
        handleFonsizePlusBtn();
        break;
      case "fonsizeMinusBtn":
        handleFonsizeMinusBtn();
        break;
      case "langChangeBtn":
        handleLangChangeBtn();
        break;
    }
  }

  return (
    <>
      <ButtonSetting
        id="deleteBtn"
        value="Delete"
        onClickSetting={handleSettingClick}
      />
      <ButtonSetting
        id="clearBtn"
        value="Clear"
        onClickSetting={handleSettingClick}
      />
      {language !== hebrew && (
        <ButtonSetting
          id="toLowerOrLowerCase"
          value={
            language == englishUpperCase ? "To lower case" : "To upper case"
          }
          onClickSetting={handleSettingClick}
        />
      )}

      <ButtonSetting
        id="undoBtn"
        value="Undo"
        onClickSetting={handleSettingClick}
      />
      <ButtonSetting
        id="fontBtn"
        value="Font"
        onClickSetting={handleSettingClick}
      />
      <ButtonSetting
        id="fonsizePlusBtn"
        value="+"
        onClickSetting={handleSettingClick}
      />
      <p className="settingsItem" style={{ fontSize: fontSize }}>
        {fontSize}
      </p>
      <ButtonSetting
        id="fonsizeMinusBtn"
        value="-"
        onClickSetting={handleSettingClick}
      />
      <ButtonSetting
        id="langChangeBtn"
        value="Change Lang"
        onClickSetting={handleSettingClick}
      />

      <label htmlFor="color">Color:</label>
      <input
        type="color"
        id="colorBtn"
        name="colorBtn"
        onChange={(e) => handleColorBtn(e.target.value)}
      />

      <Text thiKey={usersText * Math.random()} textString={usersText} />

      <div class="keyboardKey" id="NumbersDiv">
        {numbers.map((keyChar, i) => (
          <Keyboard
            id={i}
            key={`number-${i}`}
            value={keyChar}
            onclickKey={handleClickKey}
            langLength={language.length}
          />
        ))}
      </div>

      <div class="keyboardKey" id="LettersDiv">
        {letters.map((keyChar, i) => (
          <Keyboard
            id={i + 10}
            key={`letter-${i + 10}`}
            value={keyChar}
            onclickKey={handleClickKey}
            langLength={language.length}
          />
        ))}
      </div>

      <div class="keyboardKey" id="SpecialDiv">
        {special.map((keyChar, i) => (
          <Keyboard
            id={language.length - 8 + i}
            key={`special-${language.length - 8 + i}`}
            value={keyChar}
            onclickKey={handleClickKey}
            langLength={language.length}
          />
        ))}
      </div>
    </>
  );
}

export default App;
