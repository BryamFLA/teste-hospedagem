const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const users = [
    { email: 'user@teste.com', password: '123456789', isUser: true },
    { email: 'store@teste.com', password: '123456789', isUser: false },
];

// Lista de produtos simulada
const products = [
    {
        storeName: 'Loja A',
        productName: 'Produto A1',
        productValue: '10.00',
        description: 'Descrição do Produto A1',
        img: 'img_a1.jpg',
        un: 'unidade',
        haveDelivery: true,
        id: '1',
        haveEmail: true,
        havePhone: true,
        haveWhats: true,
        phoneNumber: '123456789',
        qnt: 1,
    },
    {
        storeName: 'Loja A',
        productName: 'Produto A2',
        productValue: '15.00',
        description: 'Descrição do Produto A2',
        img: 'img_a2.jpg',
        un: 'unidade',
        haveDelivery: true,
        id: '2',
        haveEmail: true,
        havePhone: true,
        haveWhats: true,
        phoneNumber: '123456789',
        qnt: 1,
    },
    {
        storeName: 'Loja A',
        productName: 'Produto A3',
        productValue: '20.00',
        description: 'Descrição do Produto A3',
        img: 'img_a3.jpg',
        un: 'unidade',
        haveDelivery: false,
        id: '3',
        haveEmail: false,
        havePhone: true,
        haveWhats: false,
        phoneNumber: '123456789',
        qnt: 1,
    },
    {
        storeName: 'Loja B',
        productName: 'Produto B1',
        productValue: '25.00',
        description: 'Descrição do Produto B1',
        img: 'img_b1.jpg',
        un: 'unidade',
        haveDelivery: true,
        id: '4',
        haveEmail: true,
        havePhone: false,
        haveWhats: true,
        phoneNumber: '987654321',
        qnt: 1,
    },
    {
        storeName: 'Loja B',
        productName: 'Produto B2',
        productValue: '30.00',
        description: 'Descrição do Produto B2',
        img: 'img_b2.jpg',
        un: 'unidade',
        haveDelivery: true,
        id: '5',
        haveEmail: false,
        havePhone: true,
        haveWhats: true,
        phoneNumber: '987654321',
        qnt: 1,
    },
    {
        storeName: 'Loja B',
        productName: 'Produto B3',
        productValue: '35.00',
        description: 'Descrição do Produto B3',
        img: 'img_b3.jpg',
        un: 'unidade',
        haveDelivery: false,
        id: '6',
        haveEmail: true,
        havePhone: false,
        haveWhats: false,
        phoneNumber: '987654321',
        qnt: 1,
    },
    {
        storeName: 'Loja C',
        productName: 'Produto C1',
        productValue: '40.00',
        description: 'Descrição do Produto C1',
        img: 'img_c1.jpg',
        un: 'unidade',
        haveDelivery: true,
        id: '7',
        haveEmail: true,
        havePhone: true,
        haveWhats: false,
        phoneNumber: '456789123',
        qnt: 1,
    },
    {
        storeName: 'Loja C',
        productName: 'Produto C2',
        productValue: '45.00',
        description: 'Descrição do Produto C2',
        img: 'img_c2.jpg',
        un: 'unidade',
        haveDelivery: false,
        id: '8',
        haveEmail: false,
        havePhone: true,
        haveWhats: true,
        phoneNumber: '456789123',
        qnt: 1,
    },
    {
        storeName: 'Loja C',
        productName: 'Produto C3',
        productValue: '50.00',
        description: 'Descrição do Produto C3',
        img: 'img_c3.jpg',
        un: 'unidade',
        haveDelivery: true,
        id: '9',
        haveEmail: true,
        havePhone: false,
        haveWhats: false,
        phoneNumber: '456789123',
        qnt: 1,
    },
    {
        storeName: 'Loja D',
        productName: 'Produto D1',
        productValue: '55.00',
        description: 'Descrição do Produto D1',
        img: 'img_d1.jpg',
        un: 'unidade',
        haveDelivery: true,
        id: '10',
        haveEmail: true,
        havePhone: true,
        haveWhats: true,
        phoneNumber: '789123456',
        qnt: 1,
    },
    {
        storeName: 'Loja D',
        productName: 'Produto D2',
        productValue: '60.00',
        description: 'Descrição do Produto D2',
        img: 'img_d2.jpg',
        un: 'unidade',
        haveDelivery: false,
        id: '11',
        haveEmail: true,
        havePhone: false,
        haveWhats: true,
        phoneNumber: '789123456',
        qnt: 1,
    },
    {
        storeName: 'Loja D',
        productName: 'Produto D3',
        productValue: '65.00',
        description: 'Descrição do Produto D3',
        img: 'img_d3.jpg',
        un: 'unidade',
        haveDelivery: true,
        id: '12',
        haveEmail: false,
        havePhone: true,
        haveWhats: false,
        phoneNumber: '789123456',
        qnt: 1,
    },
    {
        storeName: 'Loja E',
        productName: 'Produto E1',
        productValue: '70.00',
        description: 'Descrição do Produto E1',
        img: 'img_e1.jpg',
        un: 'unidade',
        haveDelivery: true,
        id: '13',
        haveEmail: true,
        havePhone: true,
        haveWhats: true,
        phoneNumber: '321654987',
        qnt: 1,
    },
    {
        storeName: 'Loja E',
        productName: 'Produto E2',
        productValue: '75.00',
        description: 'Descrição do Produto E2',
        img: 'img_e2.jpg',
        un: 'unidade',
        haveDelivery: false,
        id: '14',
        haveEmail: false,
        havePhone: true,
        haveWhats: true,
        phoneNumber: '321654987',
        qnt: 1,
    },
    {
        storeName: 'Loja E',
        productName: 'Produto E3',
        productValue: '80.00',
        description: 'Descrição do Produto E3',
        img: 'img_e3.jpg',
        un: 'unidade',
        haveDelivery: true,
        id: '15',
        haveEmail: true,
        havePhone: false,
        haveWhats: false,
        phoneNumber: '321654987',
        qnt: 1,
    },
    {
        storeName: 'Loja F',
        productName: 'Produto F1',
        productValue: '85.00',
        description: 'Descrição do Produto F1',
        img: 'img_f1.jpg',
        un: 'unidade',
        haveDelivery: true,
        id: '16',
        haveEmail: true,
        havePhone: true,
        haveWhats: true,
        phoneNumber: '654987321',
        qnt: 1,
    },
    {
        storeName: 'Loja F',
        productName: 'Produto F2',
        productValue: '90.00',
        description: 'Descrição do Produto F2',
        img: 'img_f2.jpg',
        un: 'unidade',
        haveDelivery: false,
        id: '17',
        haveEmail: false,
        havePhone: true,
        haveWhats: true,
        phoneNumber: '654987321',
        qnt: 1,
    },
    {
        storeName: 'Loja F',
        productName: 'Produto F3',
        productValue: '95.00',
        description: 'Descrição do Produto F3',
        img: 'img_f3.jpg',
        un: 'unidade',
        haveDelivery: true,
        id: '18',
        haveEmail: true,
        havePhone: false,
        haveWhats: false,
        phoneNumber: '654987321',
        qnt: 1,
    },
    {
        storeName: 'Loja G',
        productName: 'Produto G1',
        productValue: '100.00',
        description: 'Descrição do Produto G1',
        img: 'img_g1.jpg',
        un: 'unidade',
        haveDelivery: true,
        id: '19',
        haveEmail: true,
        havePhone: true,
        haveWhats: true,
        phoneNumber: '987321654',
        qnt: 1,
    },
    {
        storeName: 'Loja G',
        productName: 'Produto G2',
        productValue: '105.00',
        description: 'Descrição do Produto G2',
        img: 'img_g2.jpg',
        un: 'unidade',
        haveDelivery: false,
        id: '20',
        haveEmail: false,
        havePhone: true,
        haveWhats: true,
        phoneNumber: '987321654',
        qnt: 1,
    }
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
app.put('/address', async (req, res) => {
    console.log(req.body);
    res.status(201).json({ message: 'successfully' });
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
app.put('/store', async (req, res) => {
    console.log(req.body);
    res.status(201).json({ message: 'successfully' });
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
app.put('/user', async (req, res) => {
    console.log(req.body);
    res.status(201).json({ message: 'successfully' });
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

app.get('/search_product', async (req, res) => {
    const { query, totalPage } = req.body;

    console.log(req.body);

    res.status(200).json({ products: products, totalPage: 13, });
});

module.exports = app;