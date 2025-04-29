import { Link } from 'react-router-dom';
import MainLogin from '../components/BattlePage/index.tsx';
import './CSS/home.css'; // Ensure you have the correct path to your CSS file


const Home = () => {
  return (
    <>
      {/* Clustered Players floating on the page */}
  <div className="players-left">
    <img src="/images/mj.png" alt="MJ" className="player sway1" />
    <img src="/images/hakeem.png" alt="Hakeem" className="player sway2" />
    <img src="/images/larry.png" alt="Larry" className="player sway3" />
    <img src="/images/magic.png" alt="Magic" className="player sway4" />
    <img src="/images/shaq.png" alt="Shaq" className="player sway5" />
  </div>

  {/* Main Home Content */}
  <main className="home-page">
    <header className="home-header text-center py-5" style={{ position: 'relative', zIndex: 2 }}>
      <h1 className="display-4 text-light">Welcome to Legacy League</h1>
      <p className="lead text-light">Challenge your friends to determine the GOAT!</p>
      <div>
        <Link to="/about" className="btn btn-info m-2">Learn More</Link>
        <Link to="/contact" className="btn btn-light m-2">Contact Us</Link>
      </div>
    </header>

    <section className="content-section py-5" style={{ position: 'relative', zIndex: 2 }}>
      <h2 className="text-center mb-4 text-light">Get Started</h2>
      <div className="row justify-center">
        <div className="col-12 col-md-8">
          <MainLogin />
        </div>
      </div>
    </section>

    <footer className="text-center py-3 bg-dark text-light" style={{ position: 'relative', zIndex: 2 }}>
      <p>&copy; 2025 Legacy League. All rights reserved.</p>
    </footer>
  </main>
    </>
  );
};

export default Home;
