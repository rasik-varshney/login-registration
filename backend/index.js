const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('hi');
})
app.post('/login', (req, res) => {
    const token = jwt.sign(req.body.userID, "jwttoken");
    res.json({
        'status': 'Token generated successfully',
        token: token
    })
})
app.listen(3001, () => {console.log('Server is listening')});