import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      login(data.token);
      navigate('/', { replace: true });
      toast.success('Login successful!');
    } catch (error) {
        console.log(error);
      toast.error('Invalid username or password');

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCont}>
        <h2 className={styles.title}>
          Sign in
        </h2>
        <code styles={{color:'white'}}>username:johnd<br></br>
        password:m38rmF$</code>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            <input id="username"type="text"
            className={`${styles.input} ${styles.usernameInput}`}
              placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required
            />
            <input
              id="password" type="password" className={`${styles.input} ${styles.passwordInput}`}
              placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={styles.button}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;