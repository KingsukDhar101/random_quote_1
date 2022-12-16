import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { quotes, bgColors } from "./data";
import { getColor } from "./helper";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

function App() {
  // const new_quote = useRef(null);

  const [quote, setQuote] = useState({});
  const [bgColor, setBgColor] = useState(getColor());

  const newQuote = async () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    setBgColor(getColor());
  };

  useEffect(() => {
    (async () => {
      // console.log("Data: ", quotes);
      const body = document.querySelector("body");

      body.style.backgroundColor = bgColor;

    })();
  }, [quote]);

  useEffect(() => {
    (async () => {
      
      let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    })();
  }, []);

  return (
    <div className="App">
      <div id="quote-box" style={{ color: bgColor }}>
        <div id="text">
          <RiDoubleQuotesL />
          {quote.quote}
          <RiDoubleQuotesR />
        </div>
        <div id="author">- {quote.author}</div>
        <div className="buttons">
          <a
            href="https://twitter.com/intent/tweet"
            rel="noreferrer"
            id="tweet-quote"
            target="_blank"
            className="button"
            style={{ backgroundColor: bgColor }}
          >
            <FaTwitter />
          </a>
          <button
            id="new-quote"
            className="button"
            onClick={newQuote}
            style={{ backgroundColor: bgColor }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
