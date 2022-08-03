module.exports= (sequelize, dataTypes)=>{
    let alias = "Sport";
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
    const Sport = sequelize.define(alias, cols, config);
    Sport.associate = function(models){
    Sport.hasMany(models.Product, {
        as: "productos",
        foreignKey: "sportId"
    }) 
}
    return Sport;
}