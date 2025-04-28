import { Link } from 'react-router-dom';
import MainLogin from '../components/BattlePage/index.tsx'; // Import MainLogin component


const Home = () => {
  return (
    <main className="home-page">
      {/* Lightning Bolt in the Center */}
      <div
        className="thunder-flash"
        style={{
          backgroundImage: `<img src={mjImage} alt="Michael Jordan" />
<img src={lebronImage} alt="LeBron James" />)`,
          backgroundPosition: 'left center, right center',
          backgroundSize: 'contain, contain',
          backgroundRepeat: 'no-repeat, no-repeat',
        }}
      ></div>

      <header className="home-header text-center py-5" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="display-4 text-light">Welcome to Legacy League</h1>
        <p className="lead text-light">Challenge your friends to determine the GOAT!</p>
        <div>
          <Link to="/about" className="btn btn-info m-2">Learn More</Link>
          <Link to="/contact" className="btn btn-light m-2">Contact Us</Link>
        </div>
      </header>

      <section className="content-section py-5" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container">
          <h2 className="text-center mb-4 text-light">Get Started</h2>
          <div className="row justify-center">
            <div className="col-12 col-md-8">
              <MainLogin /> {/* Your login component */}
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-3 bg-dark text-light" style={{ position: 'relative', zIndex: 2 }}>
        <p>&copy; 2025 Legacy League. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
