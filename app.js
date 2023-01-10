const express = require('express');
const path = require('path')

const app = express();

const port = process.env.PORT || 3001

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.post('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.post('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
}); 

app.listen(port, () => 
console.log(`Server up ${port}`)
);
