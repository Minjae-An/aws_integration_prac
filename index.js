const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello word!');
});

app.post('/api/data', (req, res) => {
    const data = req.body;
    res.json({received: data});
});

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
});
