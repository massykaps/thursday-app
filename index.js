const express =  require('express');

const app = express();
app.use(express.json());

app.get('/secret', (request, response) => {

    response.status(200).send('803a9c263b9f98f24b4cec31a3b5ea0ad4fff6caf9e1e75e05ddaa7053676a69ed07bde62d3799e2a1e0bc74cf0ec4758857b1644a927c0afb300c09d4ecb7ea045cdc51f80fe4506d37704c4196c0f4adbac402d369a9d1a1e0ecdf03bced3cd5f71732c49aa638b379437a45f1fa3127feb84204a0a3660532285dde142d82160b2bd94742871062cd6155b1d46156337')
});

app.post('/success', (req, res) =>{
    console.log(req.body)
    res.sendStatus(200)

})

app.listen(3000,()=>{console.log("running on 3000")} );