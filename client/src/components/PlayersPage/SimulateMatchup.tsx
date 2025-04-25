import { useState } from 'react';
import axios from 'axios';

type Player = {
  name: string;
  height: string;
  weight: string;
  position: string;
  primeYear: string;
  stats: string;
};

const defaultPlayers: Player[] = [
  {
    name: "Michael Jordan",
    height: "6'6\"",
    weight: "216 lbs",
    position: "SG",
    primeYear: "1996",
    stats: "30.4 PPG, 6.6 RPG, 4.3 APG, 2.2 SPG"
  },
  {
    name: "LeBron James",
    height: "6'9\"",
    weight: "250 lbs",
    position: "SF",
    primeYear: "2013",
    stats: "27.1 PPG, 7.3 RPG, 6.9 APG, 1.7 SPG"
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
    position: '',
    primeYear: '',
    stats: ''
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
      position: '',
      primeYear: '',
      stats: ''
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
          >
            {players.map(p => (
              <option key={p.name} value={p.name}>{p.name}</option>
            ))}
          </select>
        </label>
      </div>

      <button 
        onClick={simulateGame} 
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
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
          <input name="position" placeholder="Position" value={newPlayer.position} onChange={handleNewPlayerChange} className="p-2 border rounded" />
          <input name="primeYear" placeholder="Prime Year" value={newPlayer.primeYear} onChange={handleNewPlayerChange} className="p-2 border rounded" />
          <input name="stats" placeholder="Stats" value={newPlayer.stats} onChange={handleNewPlayerChange} className="p-2 border rounded col-span-2" />
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

