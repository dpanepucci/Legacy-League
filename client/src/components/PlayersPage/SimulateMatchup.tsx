import { useState } from 'react';
import axios from 'axios';

type Player = {
  name: string;
  height: string;
  weight: string;
  threePoint: string;
  fieldGoal: string;
  defense: string;
  position: string;
};

const defaultPlayers: Player[] = [
  {
    name: "Michael Jordan",
    height: '6-6',
    weight: '216 lbs',
    threePoint: '42.7%',
    fieldGoal: '49.5%',
    defense: 'NBA All-Defensive First Team, 2 steals per game',
    position: 'Shooting Guard',
  },
  {
    name: "Lebron James",
    height: '6-9',
    weight: '250 lbs',
    threePoint: '40.6%',
    fieldGoal: '56.5%',
    defense: 'NBA All-Defensive First Team, 1.7 steals per game',
    position: 'Small Forward',
  },
  {
    name: "Kobe Bryant",
    height: '6-6',
    weight: '212 lbs',
    threePoint: '38.3%',
    fieldGoal: '45.1%',
    defense: 'NBA All-Defensive First Team, 2.2 steals per game',
    position: 'Shooting Guard',
  },
  {
    name: "Larry Bird",
    height: '6-9',
    weight: '220 lbs',
    threePoint: '42.7%',
    fieldGoal: '52.2%',
    defense: 'NBA All-Defensive Second Team, 1.6 steals per game',
    position: 'Small Forward / Power Forward',
  },
  {
    name: "Magic Johnson",
    height: '6-9',
    weight: '215 lbs',
    threePoint: '20.5%',
    fieldGoal: '52.2%',
    defense: 'NBA All-Defensive Second Team votes, 1.6 steals per game',
    position: 'Point Guard',
  },
  {
    name: "Shaquille O'Neal",
    height: '7-1',
    weight: '325 lbs',
    threePoint: '0.0%', // (literally 1 career 3 made lol)
    fieldGoal: '57.4%',
    defense: 'NBA All-Defensive Second Team, 3 blocks per game',
    position: 'Center',
  },
  {
    name: "Stephen Curry",
    height: '6-2',
    weight: '185 lbs',
    threePoint: '45.4%',
    fieldGoal: '50.4%',
    defense: '1.8 steals per game, solid team defender',
    position: 'Point Guard',
  },
  {
    name: "Kevin Durant",
    height: '6-10',
    weight: '240 lbs',
    threePoint: '37.5%',
    fieldGoal: '53.7%',
    defense: '1.6 blocks per game, strong rim protector for his position',
    position: 'Small Forward / Power Forward',
  },
  {
    name: "Tim Ducan",
    height: '6-11',
    weight: '250 lbs',
    threePoint: '0.0%',
    fieldGoal: '51.3%',
    defense: 'NBA All-Defensive First Team, 2.9 blocks per game',
    position: 'Power Forward / Center',
  },
  {
    name: "Hakeem Olajuwon",
    height: '7-0',
    weight: '255 lbs',
    threePoint: '0.0%',
    fieldGoal: '52.8%',
    defense: 'Defensive Player of the Year, 3.7 blocks per game',
    position: 'Center',
  },
  {
    name: "Dirk Nowitzki",
    height: '7-0',
    weight: '245 lbs',
    threePoint: '39.3%',
    fieldGoal: '51.7%',
    defense: 'Solid team defender, 0.6 blocks per game',
    position: 'Power Forward',
  },
  {
    name: "Giannis Antetokounmpo",
    height: '6-11',
    weight: '242 lbs',
    threePoint: '30.3%',
    fieldGoal: '56.9%',
    defense: 'NBA All-Defensive First Team, 1.2 blocks and 1.2 steals per game',
    position: 'Power Forward',
  },
  {
    name: "Wilt Chamberlain",
    height: '7-1',
    weight: '275 lbs',
    threePoint: 'N/A', // (no 3-point line in his era)
    fieldGoal: '68.3%',
    defense: 'Elite shot blocker and rebounder (unofficial stats)',
    position: 'Center',
  },
  {
    name: "Bill Russell",
    height: '6-10',
    weight: '215 lbs',
    threePoint: 'N/A', // (no 3-point line in his era)
    fieldGoal: '45.7%',
    defense: '11x Champion, greatest defender ever (5 blocks per game estimated)',
    position: 'Center',
  }
];

const SimulateMatchup = () => {
  const [players, setPlayers] = useState<Player[]>(defaultPlayers);
  const [player1Name, setPlayer1Name] = useState(players[0].name);
  const [player2Name, setPlayer2Name] = useState(players[1].name);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  // New player form state
  const [newPlayer, setNewPlayer] = useState<Player>({
    name: '',
    height: '',
    weight: '',
    threePoint: '',
    fieldGoal: '',
    defense: '',
    position: ''
  });

  const simulateGame = async () => {
    setLoading(true);
    const player1 = players.find(p => p.name === player1Name);
    const player2 = players.find(p => p.name === player2Name);

    if (!player1 || !player2) {
      setResult('Invalid player selection.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/simulate', {
        player1,
        player2
      });
      setResult(response.data.result);
    } catch (error) {
      console.error('Simulation failed:', error);
      setResult('Something went wrong...');
    } finally {
      setLoading(false);
    }
  };

  const handleNewPlayerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlayer({ ...newPlayer, [e.target.name]: e.target.value });
  };

  const addNewPlayer = () => {
    if (!newPlayer.name) return;
    setPlayers([...players, newPlayer]);
    setNewPlayer({
      name: '',
      height: '',
      weight: '',
      threePoint: '',
      fieldGoal: '',
      defense: '',
      position: ''
    });
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Choose Matchup</h2>
      <div className="flex flex-col gap-4 mb-4">
        <label>
          Player 1:
          <select
            value={player1Name}
            onChange={(e) => setPlayer1Name(e.target.value)}
            className="ml-2 p-2 border rounded"
            required
          >
            {players.map(p => (
              <option key={p.name} value={p.name}>{p.name}</option>
            ))}
          </select>
        </label>

        <label>
          Player 2:
          <select
            value={player2Name}
            onChange={(e) => setPlayer2Name(e.target.value)}
            className="ml-2 p-2 border rounded"
            required
          >
            {players.map(p => (
              <option key={p.name} value={p.name}>{p.name}</option>
            ))}
          </select>
        </label>
      </div>

      <button 
        onClick={simulateGame} 
        className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Simulating..." : `Simulate ${player1Name} vs ${player2Name}`}
      </button>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Add New Player</h3>
        <div className="grid grid-cols-2 gap-2">
          <input name="name" placeholder="Name" value={newPlayer.name} onChange={handleNewPlayerChange} className="p-2 border rounded" />
          <input name="height" placeholder="Height" value={newPlayer.height} onChange={handleNewPlayerChange} className="p-2 border rounded" />
          <input name="weight" placeholder="Weight" value={newPlayer.weight} onChange={handleNewPlayerChange} className="p-2 border rounded" />
          <input name="threePoint" placeholder="Three Point %" value={newPlayer.threePoint} onChange={handleNewPlayerChange} className="p-2 border rounded" />
          <input name="fieldGoal" placeholder="Field Goal %" value={newPlayer.fieldGoal} onChange={handleNewPlayerChange} className="p-2 border rounded" />
          <input name="defense" placeholder="Defense" value={newPlayer.defense} onChange={handleNewPlayerChange} className="p-2 border rounded" />
          <input name="position" placeholder="Position" value={newPlayer.position} onChange={handleNewPlayerChange} className="p-2 border rounded" />
        </div>
        <button
          onClick={addNewPlayer}
          className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Player
        </button>
      </div>

      <div className="mt-4 whitespace-pre-wrap">
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default SimulateMatchup;

