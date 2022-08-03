module.exports= (sequelize, dataTypes)=>{
    let alias = "User";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName:{
            type: dataTypes.STRING
        },
        lastName:{
            type: dataTypes.STRING
        },
        userName:{
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        birthdate:{
            type: dataTypes.DATE
        },
        province:{
            type: dataTypes.STRING,
        },
        city:{
            type: dataTypes.STRING
        },
        address:{
            type: dataTypes.STRING
        },
        profileImage:{
            type: dataTypes.STRING
        },
        password:{
            type: dataTypes.STRING
        },
        role:{
            type: dataTypes.STRING
        },
        deleted:{
            type:dataTypes.INTEGER
        }
    };
    let config = {
        tableName: "users",
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);
    User.associate = function(models){
    User.hasMany(models.Product, {
        as: "administrador",
        foreignKey: "userId"
    }) };
    return User;
}