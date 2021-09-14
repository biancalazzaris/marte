const express = require('express');
const app = express()
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const DB = {
    games: [
        {
            id: 100, 
            name: 'Diablo',
            year: 1994, 
            price: 120
        },
        {
            id: 110, 
            name: 'Angel',
            year: 1999, 
            price: 100,
        },
        {
            id: 90, 
            name: 'Country Strike',
            year: 1994, 
            price: 200
        },
        {
            id: 120, 
            name: 'The Sims',
            year: 1995, 
            price: 180
        },
    ]
}


// app.get('/api/games', (request, response) => {
//     response.send('API RUN');
// });

app.get('/api/games', (request, response) => {
    response.json(DB.games);
});

app.get('/api/games/:id', (request, response) => {
    const idUser = request.params.id;
    if(isNaN(idUser)) {
        response.sendStatus(400)
        response.send('Opsss, id informado não é number');
    } else {
        const idGame = parseInt(idUser);
        const game = DB.games.find(index => index.id === idGame);
        if(game !== undefined) {
            response.statusCode = 200;
            response.json(game);
        } else{
            response.sendStatus(404);
        }
    }
});


app.delete('/api/game/:id', (require, response) => {
    const idUser = request.params.id;
    if(isNaN(idUser)) {
        response.sendStatus(400)
        response.send('Opsss, id informado não é number');
    } else {
        const idGame = parseInt(idUser);
        const game = DB.games.findIndex(index => index.id === idGame);
        if(game !== -1) {
            response.sendStatus = 404;
        } else {
            DB.games.splice(game, 1);
            response.sendStatus(200);
            response.json({message: 'Jogo removido com sucesso!'});
        }
    }
});


app.post('/api/game', (request, response) => {
    const {name, year, price} = request.body;
    DB.games.push({
        id: Math.floor(Math.random() * 10 + 1), 
        name, 
        year, 
        price,
    });
    response.send({message: 'Uhhhuu, novo criado com sucesso!'})
});

app.listen(3000, () => {
    console.log('API RUNNING BABY, http://localhost:3000');

});
