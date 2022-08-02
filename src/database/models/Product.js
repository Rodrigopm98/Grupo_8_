module.exports= (sequelize, dataTypes)=>{
    let alias = "products";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        description:{
            type: dataTypes.STRING
        },
        image:{
            type: dataTypes.STRING
        },
        discount:{
            type: dataTypes.INTEGER
        },
        price:{
            type: dataTypes.INTEGER
        },
        sportId:{
            type: dataTypes.INTEGER,
            forenKey: true
        },
        userId:{
            type: dataTypes.INTEGER,
            forenKey: true
        },
        brandId:{
            type: dataTypes.INTEGER,
            forenKey: true
        },
        sizeId:{
            type: dataTypes.INTEGER,
            forenKey: true
        },
        genre:{
            type: dataTypes.STRING
        },
        categoryId:{
            type: dataTypes.INTEGER,
            forenKey: true
        },
        deleted:{
            type:dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
    };
    const Producto = sequelize.define(alias, cols, config);
    return Producto;
}