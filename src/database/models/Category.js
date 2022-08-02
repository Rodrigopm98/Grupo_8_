module.exports= (sequelize, dataTypes)=>{
    let alias = "categories";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category:{
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "categories",
        timestamps: false
    };
    const Categoria = sequelize.define(alias, cols, config);
    return Categoria;
}