module.exports = (sequelize, DataTypes) => {

    //define (nomeModel,colunas,config)
    const Comentario = sequelize.define(
        'Comentario', {
            texto: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            posts_id : DataTypes.INTEGER
           
            
        }, {
                tableName: "comentarios",
                timestamps:false
        }
        
    );

    Comentario.associate = (models) => {
        // relação N:1 (vários comentarios para 1 post)
        Comentario.belongsTo(models.Post, {
          as: 'post',
          foreignKey: 'posts_id',
        });
      };
    

    return Comentario;

}