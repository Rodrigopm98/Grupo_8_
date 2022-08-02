module.exports= (sequelize, dataTypes)=>{
    let alias = "brands";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brand:{
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "brands",
        timestamps: false
    };
    const Marca = sequelize.define(alias, cols, config);
    return Marca;
}