import { useState } from "react";
import "./App.css";
import {
  hebrew,
  englishLowerCase,
  englishUpperCase,
  numbers,
  specials,
  allLang,
} from "./languages";
import Key from "./components/Key";
import KeyboardKind from "./components/KeyboardKind";
import ButtonSetting from "./components/ButtonSetting";
import Text from "./components/Text";
import Letter from "./components/Letter";
import ourFonts from "./fonts";
import Select from "./components/Select";

function App() {
  const [usersText, setUsersText] = useState([
    [<Letter value={"Write Here:)"} Style={{ fontSize: 32 }} />],
  ]);
  const [language, setLanguage] = useState("hebrew");
  const [fontSize, setFontSize] = useState(32);
  const [color, setColor] = useState("#000000");
  const [font, setFont] = useState("");
  let size;

  let languageArrLettes;
  switch (language) {
    case "hebrew":
      languageArrLettes = hebrew;
      break;
    case "englishLowerCase":
    case "english":
      languageArrLettes = englishLowerCase;
      break;
    case "englishUpperCase":
      languageArrLettes = englishUpperCase;
      break;

    default:
      languageArrLettes = ["a"];
      break;
  }

  function handleClickKey(keyChar) {
    setUsersText((prevText) => [
      ...prevText,
      <Letter
        key={Math.random()}
        style={{ fontSize: fontSize, color: color, fontFamily: font }}
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
      ? setLanguage("englishLowerCase")
      : setLanguage("englishUpperCase");
  }

  function handleUndoBtn() {
    alert(`Entered handle undo btn`);
  }

  function handleFonsizePlusBtn() {
    setFontSize((prevSize) => prevSize + 2);
  }

  function handleFonsizeMinusBtn() {
    setFontSize((prevSize) => prevSize - 2);
  }

  function handleColorBtn(colorVal) {
    setColor(colorVal);
  }

  return (
    <div id="bodyContainer">
      <div id="controlDiv">
        <ButtonSetting
          id="deleteBtn"
          value="Delete"
          onClickSetting={() => handleDeleteBtn()}
        />
        <ButtonSetting
          id="clearBtn"
          value="Clear"
          onClickSetting={() => handleClearBtn()}
        />
        {language !== "hebrew" && (
          <ButtonSetting
            id="toLowerOrLowerCase"
            value={
              language == englishUpperCase ? "To lower case" : "To upper case"
            }
            onClickSetting={() => handleCaseChange()}
          />
        )}

        <ButtonSetting
          id="undoBtn"
          value="Undo"
          onClickSetting={() => handleUndoBtn}
        />

        <Select
          id="selectFont"
          onChange={(e) => setFont(e.target.value)}
          optionsArr={ourFonts}
          type={font}
          label="Font: "
        />

        <ButtonSetting
          id="fonsizePlusBtn"
          value="+"
          onClickSetting={() => handleFonsizePlusBtn()}
        />
        <p className="settingsItem" style={{ fontSize: fontSize }}>
          {fontSize}
        </p>
        <ButtonSetting
          id="fonsizeMinusBtn"
          value="-"
          onClickSetting={() => handleFonsizeMinusBtn()}
        />

        <label htmlFor="selectLanguage">Language: </label>
        <select
          id="selectLanguage"
          onChange={(e) => {
            let langName = e.target.value;
            setLanguage(langName);
          }}
        >
          {allLang.map((langObj) => (
            <option value={Object.keys(langObj)[0]}>
              {Object.keys(langObj)[0]}
            </option>
          ))}
        </select>

        <label htmlFor="color">Color:</label>
        <input
          type="color"
          id="colorBtn"
          name="colorBtn"
          onChange={(e) => handleColorBtn(e.target.value)}
        />
      </div>

      <Text thisKey={usersText * Math.random()} textString={usersText} />

      <div id="Keyboard">
        <div class="keyboardKey" id="NumbersDiv">
          {numbers.map((keyChar, i) => (
            <Key
              id={i}
              key={`number-${i}`}
              value={keyChar}
              onclickKey={handleClickKey}
              langLength={numbers.length}
            />
          ))}
        </div>

        <div class="keyboardKey" id="LettersDiv">
          {languageArrLettes.map((keyChar, i) => (
            <Key
              id={i + 10}
              key={`letter-${i + 10}`}
              value={keyChar}
              onclickKey={handleClickKey}
              langLength={languageArrLettes.length}
            />
          ))}
        </div>

        <div class="keyboardKey" id="SpecialDiv">
          {specials.map((keyChar, i) => (
            <Key
              id={language.length - 8 + i}
              key={`special-${language.length - 8 + i}`}
              value={keyChar}
              onclickKey={handleClickKey}
              langLength={specials.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
