import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const luckyBirthday = () => {
    return (
      <>
        <p>Your birthday is lucky! </p>
        <img
          src="https://media.tenor.com/images/19d7e2436ba9f1b629db823d1c2898e6/tenor.gif"
          alt="lucky"
        ></img>
      </>
    );
  };
  const unluckyBirthday = () => {
    return (
      <>
        <p>Oops, your birthday is not lucky, sorry! </p>
        <img
          src="https://media.tenor.com/images/831ac3594a305d8c5bdec656b76eaff2/tenor.gif"
          alt=""
        />
      </>
    );
  };
  const [birthdate, setBirthdate] = useState(undefined);

  const [luckynumber, setLuckynumber] = useState(undefined);
  const [visible, setVisible] = useState(true);
  const [luckymsg, setLuckymsg] = useState(null);
  const checkLucky = (e) => {
    e.preventDefault();
    const birthdatesum = birthdate
      .split("-")
      .join("")
      .split("")
      .map(Number)
      .reduce((a, b) => a + b);

    if (birthdatesum % Number(luckynumber) === 0) {
      setLuckymsg(luckyBirthday);
    } else {
      setLuckymsg(unluckyBirthday);
    }
  };

  return (
    <div className="App">
      <div className="fullpagediv">
        <div className="centercontainer">
          <h1>Is your birthday lucky?</h1>
          <button>
            <a href="#content">Click to find out!</a>
          </button>
        </div>
      </div>

      <div className="fullpagediv" id="content">
        <div className="centercontainer2">
          {visible && (
            <div className="privacynotice">
              <div className="noticeinner">
                <span>
                  Privacy notice! We are not storing your data. You're safe!
                </span>
                <span className="close" onClick={() => setVisible(false)}>
                  x
                </span>
              </div>
            </div>
          )}
          <div className="formcontainer">
            <form className="formcontainerinner" onSubmit={checkLucky}>
              <label htmlFor="date">Your birth-date</label>
              <input
                type="date"
                required
                onChange={(e) => setBirthdate(e.target.value)}
              />
              <label htmlFor="number">Your lucky number</label>
              <input
                type="number"
                required
                onChange={(e) => setLuckynumber(e.target.value)}
              />
              <button type="submit">Check</button>
            </form>
            <div className="output">{luckymsg}</div>
            <footer className="footer">
              <span>
                <a target="_blank" href="https://www.github.com/aryanchopra">
                  Github
                </a>
              </span>
              <span>
                <a target="_blank" href="https://aryanchopra.netlify.app/">
                  Portfolio
                </a>
              </span>
              <span>
                <a target="_blank" href="https://www.twitter.com/_aryanchopra_">
                  Twitter
                </a>
              </span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
