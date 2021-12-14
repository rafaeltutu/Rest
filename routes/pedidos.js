const { Router } = require('express');
const express = require ('express');
const router = express.Router();

// RETORNA TODOS OS PEDIDOS
router.get('/', (res, req, next)=>
{
    res.statusCode(200).send({
        mensagem: 'Usando o GET dentro da rota de pedidos'
    });
}
);
// RETORNA UM PEDIDO
router.post('/', (req, res, next)=>{
    res.status(201).send({
        mensagem : 'Retorna os pedidos'
    });
});

// INSERE UM PEDIDO
router.get('/', (res, req, next)=>{
    res.status(201).send({
        mensagem : 'O pedido foi criado'
    });
}); 

// RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_produto', (req, res, next)=>{

    const id = req.params.id_produto 
  
        res.status(200).send({
        mensagem: 'Detalhes do Pedido',
        id_pedido: id
        });    
    });

// EXCLUI UM PEDIDO
router.delete('/', (req, res, next)=>{
    res.status(201).send({
        mensagem : 'Pedido Excluido'
    });
});

module.exports = router;