module.exports = (sequelize, DataTypes) => {

    //define (nomeModel,colunas,config)
    const Usuario = sequelize.define(
        'Usuario', {
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
                tableName: "usuarios",
                timestamps:false
        }
    );
    Usuario.associate = (models) => {
        // relação 1:N (usuarios tem varios posts)
        Usuario.hasMany(models.Post, {as:"posts", foreignKey:'usuarios_id'});

        //relação N:m (usuario curte varios posts)
        Usuario.belongsToMany(models.Post, {
            as: "curtiu", //alias da relação
            through: "curtidas",//tabela intermediaria
            foreignKey: "usuarios_id",
            otherKey: "posts_id",
            timestamps: false
        })
    }

    return Usuario;
}
