const { Router } = require('express');
const express = require ('express');
const router = express.Router();

// RETORNA TODOS OS PRODUTOS
router.get('/', (res, req, next)=>
{
    res.statusCode(200).send({
        mensagem: 'Retorna todos os Produtos'
    });
}
);
// INSERE UM PRODUTO
router.get('/', (res, req, next)=>{
    res.status(201).send({
        mensagem : 'Inseri um Produto'
    });
}); 

// RETORNA UM PRODUTO
router.post('/', (req, res, next)=>{
    res.status(201).send({
        mensagem : 'Retorna um Produto'
    });
});
// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next)=>{

    const id = req.params.id_produto

    if(id === 'especial'){
  
        res.status(200).send({
        mensagem: 'Usando o get de um produto expesifico',
        id: id
        });
    }else{
        res.status(200).send({
            mensagem: 'Você passou um ID'
        });
    }
});
// ALTERA UM PEDIDO
router.patch('/', (req, res, next)=>{
    res.status(201).send({
        mensagem : 'Produto alterados'
    });
});
// EXCLUI UM PRODUTO
router.delete('/', (req, res, next)=>{
    res.status(201).send({
        mensagem : 'Produto Excluido'
    });
});

module.exports = router;