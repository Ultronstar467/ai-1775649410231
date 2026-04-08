```javascript
const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Enable JSON body parsing

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js backend!');
});

// API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Node.js backend!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

---

**Frontend (my-react-app)**