const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json()); 
app.use(express.urlencoded({extended:false}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://admin:admin123@cluster0.i7cba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`)))
.catch((err) => console.log(err));

//admin routes

app.post('/admin/open', (req, res) => {
    console.log(req.body.data);
    res.send('req');
    // {
    //     "data": {
    //         "open": true
    //     }
    // }

})


app.post('/admin/close', (req, res) => {
    console.log(req.body.data);
    res.send('close');
    // {
    //     "data": {
    //         "open": false
    //     }
    // }
})


app.post('/admin/execute', (req, res) => {
    res.send('execute');
    console.log(req.body.data);
    // {
    //     "data": {
    //         "stock": "dbs",
    //         "qty": 30,
    //         "price": 150
    //     }
    // }

})


app.get('/admin/show', (req, res) => {
    res.send('show');
    console.log(req.body.data);
    // {
    //     "data": {
    //         "stock": "dbs",
    //         "from_date": "2/2/21",
    //         "to_date": "15/2/21"
    //     }
    // }
})

app.get('/admin', (req, res) => {
    res.send('admin');
    //admin page
})



//customer routes


app.get('/customer', (req, res) => {
    res.send('customer');
    //customer page
});


app.post('/customer/order', (req, res) => {
    res.send('order placed');
    console.log(req.body.data);
    // {
    //     "data": {
    //         "stock": "dbs",
    //         "qty": 30,
    //         "price": 150
    //     }
    // }
})

// index route

app.use('/', (req, res) => {
    res.send('hello main');
    //main page
});

