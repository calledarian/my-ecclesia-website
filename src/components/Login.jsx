import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://bibleec-backend.onrender.com/auth/login', { username, password });
            localStorage.setItem('jwt', response.data.token);
            window.location.href = '/dashboard';
        } catch (err) {
            setError('Invalid username or password');
        }
    };


    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Admin Login</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Login</button>
                </form>
                {error && <p style={styles.error}>{error}</p>}
            </div>
        </div>
    );
};

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f3f4f6',
        fontFamily: 'Arial, sans-serif',
    },
    card: {
        padding: '30px',
        borderRadius: '12px',
        backgroundColor: '#ffffff',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
        textAlign: 'center',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        padding: '12px',
        marginBottom: '15px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    button: {
        padding: '12px',
        borderRadius: '8px',
        backgroundColor: '#007bff',
        color: '#fff',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
    },
    error: {
        marginTop: '10px',
        color: 'red',
        textAlign: 'center',
    },
};

export default Login;
