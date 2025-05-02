import React, { useState } from 'react';
import './TradingCardStyle.css';

interface Card {
  front: string; // Image URL for the front
  back: string;  // Text or content for the back
  name: string;  // Name of the card
}

const Tradingcard: React.FC = () => {
  const cards: Card[] = [
    { front: '/TradingCardImages/michael-jordan.jpg', name: 'Michael Jordan', back: 'The ultimate competitor and 6× NBA champion, Jordan dominated both ends of the court and redefined greatness in the \'90s. He earned 5 MVPs, 10 scoring titles, and is widely considered the greatest player of all time.' },
    { front: '/TradingCardImages/lebron-james.jpg', name: 'Lebron James', back: 'A generational talent with unmatched longevity, LeBron is a 4× NBA champion, 4× MVP, and the league’s all-time leading scorer. Known for his versatility, basketball IQ, and dominance across two decades.' },
    { front: '/TradingCardImages/kobe-bryant.jpg', name: 'Kobe Bryant', back: 'A relentless scorer and 5× NBA champion, Kobe built a legacy on skill, mentality, and clutch performances. The “Black Mamba” was an 18× All-Star and left a lasting mark on the game through his work ethic and passion.' },
    { front: '/TradingCardImages/larry-bird.jpg', name: 'Larry Bird', back: 'One of the most skilled forwards in history, Bird won 3 MVPs and 3 championships with the Celtics. He was a lethal shooter, fierce competitor, and a cornerstone of the NBA’s rise in the 1980s.' },
    { front: '/TradingCardImages/magic-johnson.jpg', name: 'Magic Johnson', back: 'A 5× NBA champion and 3× MVP, Magic revolutionized the point guard position with his 6\'9" frame and elite vision. He led the Showtime Lakers with flair and unselfishness, changing how the game was played.' },
    { front: '/TradingCardImages/shaquille-oneal.jpg', name: 'Shaquille O\'Neal', back: 'A 4× NBA champion and 3× Finals MVP, Shaq was an unstoppable force in the paint during his prime. His size, power, and personality made him one of the most dominant and iconic big men ever.' },
    { front: '/TradingCardImages/stephen-curry.jpg', name: 'Stephen Curry', back: 'The greatest shooter ever, Curry transformed the NBA with his range, quick release, and off-ball movement. A 4× champion and 2× MVP, he revolutionized modern offense with the Warriors.' },
    { front: '/TradingCardImages/kevin-durant.jpg', name: 'Kevin Durant', back: 'A 2× champion, 2× Finals MVP, and 1× league MVP, Durant blends size and scoring like no one else. Known for his pure jumper and clutch play, he’s one of the most efficient scorers in NBA history.' },
    { front: '/TradingCardImages/tim-duncan.jpg', name: 'Tim Duncan', back: 'Quietly legendary, Duncan won 5 championships and 2 MVPs as the backbone of the Spurs dynasty. Known as “The Big Fundamental,” he led with consistency, defense, and elite post play.' },
    { front: '/TradingCardImages/hakeem-olajuwon.jpg', name: 'Hakeem Olajuwon', back: 'Arguably the most skilled center ever, Hakeem led the Rockets to 2 titles and won MVP and DPOY in the same season. Famous for the “Dream Shake,” he was a two-way force with elegance and precision.' },
    { front: '/TradingCardImages/dirk-nowitzki.jpg', name: 'Dirk Nowitzki', back: 'A 7-foot sharpshooter who changed the power forward role, Dirk won MVP in 2007 and led the Mavericks to a 2011 title. His fadeaway jumper and loyalty to Dallas made him an all-time great.' },
    { front: '/TradingCardImages/giannis-antetokounmpo.jpg', name: 'Giannis Antetokounmpo', back: 'The “Greek Freak” is a 2× MVP and NBA champion who blends size, athleticism, and drive. He led the Bucks to a title in 2021 and continues to dominate on both ends with relentless energy.' },
    { front: '/TradingCardImages/wilt-chamberlain.jpg', name: 'Wilt Chamberlain', back: 'A statistical marvel, Wilt once averaged 50 points per game and holds countless NBA records. A 2× champion and 4× MVP, his dominance changed rules and reshaped the center position forever.' },
    { front: '/TradingCardImages/luka-doncic.jpg', name: 'Luka Doncic', back: 'A European prodigy turned NBA superstar, Luka is already an MVP-caliber player and triple-double machine. Known for his craft, vision, and clutch scoring, he’s the future face of the league.'},
    { front: '/TradingCardImages/tyrese-haliburton.jpg', name: 'Tyrese Haliburton', back: 'An elite playmaker with a smooth shot and high IQ, Haliburton has become a top-tier point guard. Leading the Pacers’ offense, he\'s known for unselfishness, efficiency, and big-time leadership at a young age.'},
    { front: '/TradingCardImages/bill-russell.jpg', name: 'Bill Russell', back: 'The ultimate winner, Russell captured 11 championships in 13 seasons with the Celtics. A defensive icon and 5× MVP, he anchored one of the greatest dynasties in sports history.'},
    { front: '/TradingCardImages/anthony-edwards.jpg', name: 'Anthony Edwards', back: 'One of the league’s rising stars, Edwards brings explosive scoring, charisma, and improving two-way play. He’s quickly becoming the face of the Timberwolves and a feared playoff performer. '}
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

  const adjustFontSize = (element: HTMLDivElement | null) => {
    if (!element) return;
    const parentHeight = element.offsetHeight;
    const parentWidth = element.offsetWidth;
    let fontSize = 16; // Start with a default font size
    element.style.fontSize = `${fontSize}px`;

    while (
      (element.scrollHeight > parentHeight || element.scrollWidth > parentWidth) &&
      fontSize > 10 // Set a minimum font size
    ) {
      fontSize -= 1;
      element.style.fontSize = `${fontSize}px`;
    }
  };

  return (
    <>
      <h1 className="centered-title">Meet the Legends</h1>
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
              <div
                className="flashcard-back"
                ref={(el) => adjustFontSize(el)} // Dynamically adjust font size
              >
                <h2>{card.name}</h2>
                <p>{card.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tradingcard;