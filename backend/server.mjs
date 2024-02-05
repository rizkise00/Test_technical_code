import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.post('/segitiga', (req, res) => {
    var input = JSON.parse(req.body.data).toString();
    var triangle = '';

    for (var i = 0; i < input.length; i++) {
        var number = input[i];

        for (let j = 0; j < (i + 1); j++) {
            number += '0';
        }

        triangle += number + '<br>';
    }

    res.send(triangle);
});

app.post('/ganjil', (req, res) => {
    var ganjil = '';
    var input = JSON.parse(req.body.data);

    for (let i = 0; i < input; i++) {
        if (((i + 1) % 2) == 1) {
            ganjil += (i + 1) + '<br>';
        }
    }

    res.send(ganjil);
});

app.post('/prima', (req, res) => {
    var prima = '';
    var input = JSON.parse(req.body.data);

    for (let i = 0; i < input; i++) {
        let angka = i + 1;
        let pembagi = 0;
        
        for (let j = 1; j <= angka; j++) {
            if (angka % j == 0) {
                pembagi++
            }
        }

        if (pembagi == 2) {
            prima += (i + 1) + '<br>';
        }
    }

    res.send(prima);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});