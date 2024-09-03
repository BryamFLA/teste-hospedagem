const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));


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
        img: '',
        un: 'un',
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
        img: '',
        un: 'un',
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
        img: '',
        un: 'un',
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
        img: '',
        un: 'un',
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
        img: '',
        un: 'un',
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
        img: '',
        un: 'un',
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
        img: '',
        un: 'un',
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
        img: '',
        un: 'un',
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
        img: '',
        un: 'un',
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
        img: '',
        un: 'un',
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
        img: '',
        un: 'un',
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
        img: '',
        un: 'un',
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
        img: '',
        un: 'un',
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
        img: '',
        un: 'un',
        haveDelivery: false,
        id: '14',
        haveEmail: false,
        havePhone: true,
        haveWhats: true,
        phoneNumber: '321654987',
        qnt: 1,
    },
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
    const { query, totalPage } = req.query;

    console.log(req.query);

    res.status(200).json({ products: products, totalPage: 13, });
});

app.get('/contacts', (req, res) => {
    const productId = req.query.id;

    console.log(`ID do Produto: ${productId}`);

    const response = {
        location: 'Rua São Paulo, 150 Guanabara - Francisco Beltrão, Paraná, Brasil',
        phone: '46999410401',
        mail: 'nome@example.com',
    };

    res.status(200).json(response);
});

app.get('/store_list', async (req, res) => {
    const { query, totalPage } = req.query;

    console.log(req.query);

    res.status(200).json({ products: products, totalPage: 13, });
});

app.post('/products', (req, res) => {
    const product = req.body;
    product.id = products.length + 1;
    console.log(product);
    res.status(201).send('Produto cadastrado com sucesso');
});

app.put('/products', (req, res) => {
    const updatedProduct = req.body;
    const index = products.findIndex(product => product.id === updatedProduct.id);

    if (index !== -1) {
        console.log(updatedProduct.id);
        res.status(200).send('Produto atualizado com sucesso');
    } else {
        res.status(404).send('Produto não encontrado');
    }
});


app.delete('/products', (req, res) => {
    const { id, store, password } = req.query;

    const index = products.findIndex(product => product.id == id);

    if (index !== -1) {
        console.log(id);
        res.status(200).send('Produto deletado com sucesso');
    } else {
        res.status(404).send('Produto não encontrado');
    }
});

app.get('/cart', (req, res) => {
    // Objeto para armazenar as lojas e seus produtos
    const storeMap = {};

    // Passa por todos os produtos no vetor
    products.forEach(product => {
        const storeName = product.storeName;

        // Se a loja ainda não foi adicionada ao mapa, cria uma nova entrada
        if (!storeMap[storeName]) {
            storeMap[storeName] = {
                storeName: storeName,
                email: product.haveEmail ? 'default_email@example.com' : '',
                phone: product.havePhone ? product.phoneNumber : '',
                whats: product.haveWhats ? product.phoneNumber : '',
                haveDelivery: product.haveDelivery,
                products: [],
            };
        }

        // Adiciona o produto ao vetor de produtos da loja correspondente
        storeMap[storeName].products.push({
            productName: product.productName || '',
            productValue: product.productValue || '',
            description: product.description || '',
            img: product.img || '',
            un: product.un || '',
            id: product.id || '',
            qnt: product.qnt || 1,
        });
    });

    // Transforma o mapa em um array para ser retornado como JSON
    const storesArray = Object.values(storeMap);

    if (storesArray.length > 0) {
        res.status(200).json(storesArray);
    } else {
        res.status(404).json({ message: 'No stores found' });
    }
});

app.put('/cart', (req, res) => {
    const { name, idProduct } = req.body;

    console.log(name, idProduct);

    res.status(200).json({ message: 'Atualização bem sucedida' });

});

app.delete('/cart', (req, res) => {
    const { id, name } = req.query;

    console.log(id, name);

    res.status(200).json({ message: 'Produto deletado comn sucesso' });

});

app.post('/cart', (req, res) => {
    const newProduct = req.body;
    console.log(newProduct);

    res.status(201).json({ message: 'Product added successfully' });
});


module.exports = app;