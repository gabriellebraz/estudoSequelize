const { Usuario, Post, Comentario, sequelize } = require('./models');
const {Op} = require('sequelize');


// Usuario.findAll()
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });

//esse busca todos os usuarios com letra A

// Usuario.findAll({
//     where:{
//         nome:{[Op.like]: 'a%'}
//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });

//buscar todos os usuario que não tem a letra A

// Usuario.findAll({
//     where:{
//         nome:{[Op.notLike]: 'a%'}
//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });


//listar todos os posts

// //  Post.findAll()
// //  .then((publicacao)=>{
// //      console.log(publicacao.map(user => user.toJSON()));
// //  });


//mostar todos que tem oi 

// Post.findAll({
//     where: {
//         texto:{[Op.like]:'%oi%'}
//     }
// })
//  .then((publicacao)=>{
//      console.log(publicacao.map(user => user.toJSON()));
//  });



//  Comentario.findAll()
//  .then((texto)=>{
//      console.log(texto.map(user => user.toJSON()));
//  });



//mostrar 2 cometarios por vez
// Comentario.findAll({
//     limit:2,
//     offset:2
// })
//  .then((texto)=>{
//      console.log(texto.map(user => user.toJSON()));
//  });

    //criar usuario

    // Usuario.create({
    //     nome: 'ana',
    //     email: 'ana@gmail.com',
    //     senha: 'ana123'
    // }).then((resultado) => {
    //     console.log(resultado.toJSON());
    // });


//deletar usuario


    // Usuario.destroy({
    //     where:{
    //         id: 8
    //     }
    // }).then((resultado)=> {
    //     console.log(resultado);
    // })

//update de alguma informação

//  Usuario.update({
//      senha: 'novasenha123'
//  }, {
//      where: {
//          id: 7
//     }
//  }).then((resultado) => {
//      console.log(resultado);
//  })


//esse de baixo deu erro

// Post.update ({
//     texto: 'post de gaby'
// },{
//     where:{
//         id:5
//     }
// }).then((publicacao) =>{
//     console.log(publicacao);
// });

// criar um post para meu usuario

// Post.create({
//     texto: 'teste pessoal!',
//     usuarios_id: 7,
//     n_likes: 3,
//   }).then((resultado) => {
//     console.log(resultado.toJSON);
//   })

//mudar email do usuario

//   Usuario.update({
//      email: 'sergio@digitalhouse.com'
//  }, {
//      where: {
//          id: 2
//     }
//  }).then((resultado) => {
//      console.log(resultado);
//  })


//deletar mais um usuario 
//  Usuario.destroy({
//         where:{
//             id: 3
//         }
//     }).then((resultado)=> {
//         console.log(resultado);
//     })

    // Usuario.findAll().then((usuarios) => {
    //     console.log(usuarios.map((usuario) => usuario.toJSON()));
    // })


    // Usuario.findByPk (1,{
    //     include: [
    //         {association: "posts"}
    //     ]
    // })
    // .then((usuario) => {
    //     console.table(usuario.posts.map((post) => post.toJSON()))
    // })

// outro jeito

Usuario.findByPk(1,{include:['posts']}).then(
    usuario => {
        console.log(usuario.toJSON());
        sequelize.close();
    }
)
// Post.findByPk(1, { include: ['comentarios'] }).then((post) => {
//     console.log(post.toJSON());
//     sequelize.close();
//   });

Post.findByPk(1, { include: ["curtiu"] }).then((post) => {
    console.log(post.toJSON());
    sequelize.close();
  });