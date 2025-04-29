import './LegendsSelection.css';

const players = [
  { name: 'Michael Jordan', img: '/images/mj.png' },
  { name: 'Hakeem Olajuwon', img: '/images/hakeem.png' },
  { name: 'Larry Bird', img: '/images/larry.png' },
  { name: 'Magic Johnson', img: '/images/magic.png' },
  { name: 'Shaquille O’Neal', img: '/images/shaq.png' }
];

const LegendsSection = () => {
  return (
    <div className="legends-wrapper">
      <h2 className="legends-title">Legends</h2>
      <div className="legends-circle">
        {players.map((player, i) => (
          <div className={`circle-slot slot${i + 1}`} key={i}>
            <img src={player.img} alt={player.name} />
            <p>{player.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegendsSection;
