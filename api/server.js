const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res)=>{
    const { email, password } = req.body;

    if(email === 'user@teste.com' || email === 'store@teste.com'){
        const isUser = (email === 'user@teste.com');
        if(password == '123456789'){
            res.status(201).json({message: 'successfully', isUser: isUser});
        }else{
            res.status(400).json({message: 'passwordError', isUser: null});
        }
    }else{
        res.status(400).json({message: 'emailError', isUser: null});
    }
});

app.get('/teste', async (req, res)=>{
    res.status(200).json({message: 'deu boa'});
});

module.exports = app;