module.exports= (sequelize, dataTypes)=>{
    let alias = "Product";
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
    const Product = sequelize.define(alias, cols, config);
   
    Product.associate = function(models){
        Product.belongsTo(models.Category, {
            as: "categoria",
            foreignKey: "categoryId"
        }),
        Product.belongsTo(models.Brand, {
            as: "marca",
            foreignKey: "brandId"
        }),
        Product.belongsTo(models.Size, {
            as: "talle",
            foreignKey: "sizeId"
        }),
        Product.belongsTo(models.Sport, {
            as: "deporte",
            foreignKey: "sportId"
        }),
        Product.belongsTo(models.User, {
            as: "administrador",
            foreignKey: "userId"
        })
    }; 
    return Product;
}