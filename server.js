const express = require('express');
const path = require('path'); // Import the path module
const app = express();

const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello, World!'); // This route will still respond with "Hello, World!"
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
