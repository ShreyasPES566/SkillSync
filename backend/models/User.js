import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
const User = sequelize.define('User',{
    firstName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    username:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
});
export default User;