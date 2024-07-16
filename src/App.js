import React, { useState } from 'react';
import './App.css';

function App() {
  
  const quotes = [
    { text: "Приклад діє сильніше за загрози.", author: "П'єр Корнеля" },
    { text: "Не люди потребують правил, а правила в людях.", author: "Дейла Карнегі" },
    { text: "Єдиний метод, що здатний переконати.", author: "Іоганн Вольфганг фон Гете" },
    { text: "Добре зроблене — краще, ніж добре сказане.", author: "Бенджамін Франклін" },
    { text: "Спочатку вчини, потім говори.", author: "Індійська прислів'я" }
  ];

  const [currentQuote, setCurrentQuote] = useState(null);

  // Функція для випадкового вибору цитати
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <h1>Цитата дня</h1>
      <button onClick={getRandomQuote}>Показати цитату</button>
      {currentQuote && (
        <div className="quote">
          <p>"{currentQuote.text}"</p>
          <p>- {currentQuote.author}</p>
        </div>
      )}
    </div>
  );
}

export default App;
