const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());


const DB = {
    games: [
        {id: 123, name: 'Halo 4', year: 2012, price: 120},
        {id: 92, name: 'Dino', year: 2009, price: 20},
        {id: 88, name: 'Metal Gear Solid', year: 1999, price: 60}
    ]
}

app.get('/', (req, res) => {
    res.json({ message: 'ops, não existe dados nessa rota'})
});


app.get('/games', (req, res) => {
    res.statusCode = 200;
    res.json(DB.games)
});

app.get('/games/:id', (req, res) => {
    const id = req.params.id;
    if(isNaN(id)) {
        res.send('Opsss, id informado não é number');
    } else {
        const idGame = parseInt(req.params.id);
        const game = DB.games.find(index => index.id === idGame);
        if(game !== undefined) {
            res.statusCode = 200;
            res.json(game);
        } else{
            res.sendStatus(404);
        }
    }
});


app.post('/game', (req, res) => {
  const {name, year, price } = req.body;
  DB.games.push({
    id: Math.floor(Math.random() * 10 + 1),
    name,
    price, 
    year
  })
  res.send('Uhuul, deu boa criar um novo game.');
});

app.delete('/game/:id', (req, res) => {
    const id = req.params.id;
    if(isNaN(id)) {
      res.sendStatus(400)
      res.json('Ops, não foi informado um número válido');
    } else {
      const game = DB.games.findIndex(index => index.id === parseInt(id));
      if(game === -1) {
        res.sendStatus(404);
      } else {
        DB.games.splice(game, 1);
        res.sendStatus(200);
        res.json({ message: 'Uhuull, removeu o game com sucesso!'})
      }
    }
  });


app.listen(5000, ()=> {
    console.log('app running in http://localhost:5000');
});