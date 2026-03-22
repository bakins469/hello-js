require('dotenv').config()


const express = require('express');


const app = express();
const port = process.env.port ;


app.use(express.json());

app.use((req, res, next) => {
    console.log('Hello, Oluwaseun');
    next(); //Pass to next handler (required!)
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.send(id);
});

app.post('/echo', (req, res) =>{
    //console.log(req.body);
    res.json({ echoed: req.body}); //req.body now available!
});

app.get('/', (req, res) => {
    res.send('My Week 2 API!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});