import React, { useState, useEffect } from 'react';
import './MotivationalQuotes.css';

const MotivationalQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState('');
  const apiUrl = 'https://type.fit/api/quotes';
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
        setApiLoaded(true);
      });
  }, []);

  const shortQuotes = quotes.filter((el) => el.text.length < 40);

  // export the function and export the single quote
  const handleQuoteClick = () => {
    let random = Math.random() * shortQuotes.length;
    let randomFloor = Math.floor(random);
    let singleQuote = shortQuotes[randomFloor].text;
    //setRandomQuote(singleQuote);
    console.log(singleQuote);
    console.log(singleQuote.length);
    //return singleQuote;
  };

  return (
    <div className="quotes-frame">
      <button className="get-quote" onClick={handleQuoteClick}>
        Get quote
      </button>
    </div>
  );
};

export default MotivationalQuotes;
