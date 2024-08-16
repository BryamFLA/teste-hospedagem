const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const users = [
    { email: 'user@teste.com', password: '123456789', isUser: true },
    { email: 'store@teste.com', password: '123456789', isUser: false },
];

app.post('/login', async (req, res)=>{
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);

    if (user) {
        if (user.password === password) {
            res.status(201).json({ message: 'successfully', isUser: user.isUser });
        } else {
            res.status(400).json({ message: 'passwordError', isUser: null });
        }
    } else {
        res.status(400).json({ message: 'emailError', isUser: null });
    }
});

app.post('/address', async (req, res) => {
    const addressInfos = req.body;
    console.log(addressInfos);

    const id = 1;

    res.status(201).json({message: 'successfully', id: id});
});

app.post('/store', async (req, res) => {
    const { email, password } = req.body;

    users.push({email: email, password: password, isUser: false});

    res.status(201).json({message: 'successfully'});
});

app.post('/user', async (req, res) => {
    const { email, password } = req.body;

    users.push({email: email, password: password, isUser: true});

    res.status(201).json({message: 'successfully'});
});

app.get('/teste', async (req, res)=>{
    res.status(200).json({message: 'deu boa'});
});

module.exports = app;