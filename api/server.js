const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const users = [
    { email: 'user@teste.com', password: '123456789', isUser: true },
    { email: 'store@teste.com', password: '123456789', isUser: false },
];

app.post('/login', async (req, res) => {
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

    res.status(201).json({ message: 'successfully', id: id });
});
app.put('/address', async (req,res) => {
    console.log(req.body);
    res.status(201).json({message: 'successfully'});
});
app.get('/address', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    res.status(200).json({
        cep: '85603750',
        city: 'Francisco Beltrão',
        neighborhood: 'Floresta',
        street: 'Gramado',
        number: '541',
        complement: 'Portão Marrom',
        id: '1',
    });
});

app.post('/store', async (req, res) => {
    const { email, password } = req.body;

    console.log(req.body);

    users.push({ email: email, password: password, isUser: false });

    res.status(201).json({ message: 'successfully' });
});
app.put('/store', async (req,res) => {
    console.log(req.body);
    res.status(201).json({message: 'successfully'});
});
app.get('/store', async (req, res) => {
    const { email, password } = req.body;

    console.log(email, password);

    res.status(200).json({
        corporateReason: 'Nome Oficial',
        fantasiName: 'Nome Bonito',
        phoneNumber: '4635245322',
        whatsapp: '46984004056',
        email: 'store@teste.com',
        cnpj: '25452365000125',
        password: '123456789',
        addressID: '1',
    });
});

app.post('/user', async (req, res) => {
    const { email, password } = req.body;

    console.log(req.body);

    users.push({ email: email, password: password, isUser: true });

    res.status(201).json({ message: 'successfully' });
});
app.put('/user', async (req,res) => {
    console.log(req.body);
    res.status(201).json({message: 'successfully'});
});
app.get('/user', async (req, res) => {
    const { email, password } = req.body;

    console.log(email, password);

    res.status(200).json({
        name: 'Nome User',
        phoneNumber: '46984004056',
        email: 'user@teste.com',
        cpf: '10249267969',
        password: '123456789',
        addressID: '1',
    });
});

app.get('/teste', async (req, res) => {
    res.status(200).json({ message: 'deu boa' });
});

module.exports = app;