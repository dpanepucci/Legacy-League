import './NewEraSection.css';

const players = [
  { name: 'LeBron James', img: '/images/lebron.png' },
  { name: 'Stephen Curry', img: '/images/stephen.png' },
  { name: 'Kevin Durant', img: '/images/kevin.png' },
  { name: 'Giannis Antetokounmpo', img: '/images/giannis.png' },
  { name: 'Luka Dončić', img: '/images/luka.png' },
];

const NewEraSection = () => {
  return (
    <div className="newera-wrapper">
      <h2 className="newera-title">The New Era</h2>
      <div className="newera-circle">
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

export default NewEraSection;
