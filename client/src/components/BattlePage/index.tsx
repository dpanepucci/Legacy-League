import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import SimulateMatchup from '../PlayersPage/SimulateMatchup';

import Tradingcard from '../TradingCard/TradingCard';

const MainLogin = () => {
  
  return (
    <div>
      <h3>MJ vs Lebron? Larry Bird vs Magic? Countless epic battles await! Who you got?</h3>

      {Auth.loggedIn() ? (
        <>
        <SimulateMatchup />
        <Tradingcard />
        </>
      ) : (
        <p>
          Slow down buddy, please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup</Link> before playing.
        </p>
      )}
    </div>
  );
};

export default MainLogin;
