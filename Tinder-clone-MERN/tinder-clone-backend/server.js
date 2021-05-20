import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

// importing dbCards.js
import Cards from './dbCards.js'

// app config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:password-tinder-clone@cluster0.mgy9x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// middleware
app.use(express.json())
app.use(Cors())

// database config
mongoose.connect(connection_url , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// API endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.post("/tinder/card" , (req , res) => {
    const dbCard = req.body;

    Cards.create(dbCard , (err , data) => {
        if( err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data)
        }
    });
});


app.get("/tinder/card", (req , res) => {
    Cards.find((err , data) => {
        if( err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data)
        }
    })
})


// listener
app.listen( port , () => console.log(`listening on localhost: ${port}`));