const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle requests for the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/mark', (req, res) => {
  const { spawn } = require('child_process');
  const pyProg = spawn('python', ['main.py']);
  pyProg.stdout.on('data', function (data) {
    console.log(data.toString());
    res.write(data);
    res.end('end');
  });
});

app.listen(4000, () => console.log('Application listening on port 4000!'));
