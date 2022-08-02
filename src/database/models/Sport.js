module.exports= (sequelize, dataTypes)=>{
    let alias = "sports";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sport:{
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "sports",
        timestamps: false
    };
    const Deporte = sequelize.define(alias, cols, config);
    return Deporte;
}