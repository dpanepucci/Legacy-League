import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './CSS/login.css'; // <-- make sure you import this!

<div className="login-page">
  {/* your login JSX here */}
</div>


const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [menuOpen, setMenuOpen] = useState(false); // <-- controls showing/hiding the form

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      setFormState({
        email: '',
        password: '',
      });
    } catch (e) {
      console.error(e);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className="login-page">
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Only show the header when menuOpen is true */}
      {menuOpen && (
        <div className="home-header">
          <h1>Welcome to the Basketball Login</h1>
          {/* You can add additional navigation or content here */}
        </div>
      )}

      {/* Only show the login form if menuOpen === true */}
      {menuOpen && (
        <div className="card fade-in">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default Login;
