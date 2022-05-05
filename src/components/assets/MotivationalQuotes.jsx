import React, { useState, useEffect } from 'react';

const MotivationalQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState('');
  const apiUrl = 'https://type.fit/api/quotes';
  //const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  }, []);

  // const oneQuoteGenerator = () => {
  //   let copyQuotesArray = [...quotes];
  //   let random = Math.floor(Math.random()) * 1500;
  //   let singleQuote = copyQuotesArray[random];
  //   setRandomQuote(singleQuote);
  //   console.log(randomQuote);
  // };

  return <h1>Test</h1>;
};

export default MotivationalQuotes;
