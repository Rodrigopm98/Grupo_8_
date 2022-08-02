module.exports= (sequelize, dataTypes)=>{
    let alias = "users";
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
    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}