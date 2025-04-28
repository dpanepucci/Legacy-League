import { Link } from 'react-router-dom';
import { useState, type MouseEvent } from 'react';
import Auth from '../../utils/auth';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    Auth.logout();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Legacy League</h1>
          </Link>
          <p className="m-0">
            Who's the real GOAT? Challenge your friends, family, and coworkers
            to simulate the greatest NBA matchups!
          </p>
        </div>

        <div className="header-buttons">
          {/* Hamburger when NOT logged in */}
          {!Auth.loggedIn() && (
            <>
              <button
                className={`hamburger ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>

              <div className={`dropdown-wrapper ${menuOpen ? 'show' : ''}`}>
                <div className="dropdown-menu">
                  <Link
                    className="btn btn-info m-2"
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    className="btn btn-light m-2"
                    to="/signup"
                    onClick={() => setMenuOpen(false)}
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </>
          )}

          {/* Profile and Logout when logged in */}
          {Auth.loggedIn() && (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
