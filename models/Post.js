module.exports = (sequelize, DataTypes) => {

    //define (nomeModel,colunas,config)
    const Post = sequelize.define(
        'Post', {
            texto: DataTypes.STRING,
            img : DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            n_likes : DataTypes.INTEGER
           
            
        }, {
                tableName: "posts",
                timestamps:false
        }
    );

    Post.associate = (models) => {
        // relação N:1 (vários posts de 1 usuario)
        Post.belongsTo(models.Usuario, {
          as: 'usuario',
          foreignKey: 'usuarios_id',
        });
    
        // relação 1:N (um post para varios comentarios)
        Post.hasMany(models.Comentario, {
          as: 'comentarios',
          foreignKey: 'posts_id',
        });

        //relação n:m (post tem varias curtidas de varios usiarios )
        Post.belongsToMany(models.Usuario, {
            as: "curtiu",
            through: "curtidas",
            foreignKey: "posts_id",
            otherKey: "usuarios_id",
            timestamps: false
        })
      }

    return Post;

}