import React from "react";

type KeyboardProps = {
  disable?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (key: string) => void;
};

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function Keyboard({
  disable = false,
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div className="keyboardContainer">
      {KEYS.map((key) => {
        const active = activeLetters.includes(key);
        const inactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`keyButton ${active ? "active" : ""} ${
              inactive ? "inactive" : ""
            }`}
            key={key}
            disabled={inactive || active || disable}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
