const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send({
        error: "Page not found"
    });
});

app.get('/users', (req,res)=>{
    res.send([{
        name:"Piotr",
        age: 33
    },{
        name:"Kamiel",
        age: 43
    },{
        name:"Michał",
        age: 22
    }])
});

app.listen(3000, () => {
    console.log("Starting server on 3000");
});

module.exports.app = app;