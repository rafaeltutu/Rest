const express = require ('express');
const app =  express();

const routaProdutos = require('./routes/pedidos');
const routapedidos = require('./routes/produtos');

app.use('/produtos', routaProdutos);
app.use('/pedidos', routapedidos);

module.exports = app;