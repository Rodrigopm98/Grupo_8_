module.exports= (sequelize, dataTypes)=>{
    let alias = "sizes";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        size:{
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "sizes",
        timestamps: false
    };
    const Talle = sequelize.define(alias, cols, config);
    return Talle;
}