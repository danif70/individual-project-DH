const express = require('express');
const path = require('path')

const app = express();

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.post('/register', (req, res) => {
 console.log(req.body);
 res.send('ok')
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.listen(3000, () => 
console.log('Server up')
);