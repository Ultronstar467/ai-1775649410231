```javascript
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the Node.js backend
    fetch('http://localhost:5000/api/hello') // Ensure this matches your backend port
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error("Failed to fetch data:", err);
        setError("Failed to fetch message from backend. Is the backend running?");
      });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="App">
      <header className="App-header">
        <h1>Full Stack React & Node.js App</h1>
        <p>
          Frontend message: "Hello from React!"
        </p>
        <p>
          Backend message: {error ? <span className="error">{error}</span> : <strong>{message || "Loading..."}</strong>}
        </p>
        <p>
          If you see "Hello from the Node.js backend!", your full-stack setup is working!
        </p>
      </header>
    </div>
  );
}

export default App;
```