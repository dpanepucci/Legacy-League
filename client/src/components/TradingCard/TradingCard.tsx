import React, { useState } from 'react';
import './TradingCardStyle.css';

interface Card {
  front: string; // Image URL for the front
  back: string;  // Text or content for the back
}

const Tradingcard: React.FC = () => {
  const cards: Card[] = [
    { front: '/TradingCardImages/michael-jordan.jpg', back: 'Michael Jordan' },
    { front: '/TradingCardImages/lebron-james.jpg', back: 'Lebron James' },
    { front: '/TradingCardImages/kobe-bryant.jpg', back: 'Kobe Bryant' },
    { front: '/TradingCardImages/larry-bird.jpg', back: 'Larry Bird' },
    { front: '/TradingCardImages/magic-johnson.jpg', back: 'Magic Johnson' },
    { front: '/TradingCardImages/shaquille-oneal.jpg', back: 'Shaquille O\'Neal' },
    { front: '/TradingCardImages/stephen-curry.jpg', back: 'Stephen Curry' },
    { front: '/TradingCardImages/kevin-durant.jpg', back: 'Kevin Durant' },
    { front: '/TradingCardImages/tim-duncan.jpg', back: 'Tim Duncan' },
    { front: '/TradingCardImages/hakeem-olajuwon.jpg', back: 'Hakeem Olajuwon' },
    { front: '/TradingCardImages/dirk-nowitzki.jpg', back: 'Dirk Nowitzki' },
    { front: '/TradingCardImages/giannis-antetokounmpo.jpg', back: 'Giannis Antetokounmpo' },
    { front: '/TradingCardImages/wilt-chamberlain.jpg', back: 'Wilt Chamberlain' },
    { front: '/TradingCardImages/luka-doncic.jpg', back: 'Luka Doncic'},
    { front: '/TradingCardImages/tyrese-haliburton.jpg', back: 'Tyrese Haliburton'},
  ];

  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    Array(cards.length).fill(false) // Initialize all cards as unflipped
  );

  const handleClick = (index: number) => {
    const updatedFlippedStates = flippedStates.map((isFlipped, i) =>
      i === index ? !isFlipped : isFlipped // Flip only the clicked card
    );
    setFlippedStates(updatedFlippedStates);
  };

  return (
    <>
      <h1>Meet the Legends</h1>
      <div className="flashcard-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flashcard-container ${flippedStates[index] ? 'flipped' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className="flashcard-inner">
              <div className="flashcard-front">
                <img src={card.front} alt={`Card ${index + 1}`} className="card-image" />
              </div>
              <div className="flashcard-back">{card.back}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tradingcard;