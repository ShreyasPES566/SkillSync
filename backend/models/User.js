import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Profiles from "./Profiles.js";
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
User.hasOne(Profiles, {foreignKey: 'userId', onDelete: 'CASCADE'});
Profiles.belongsTo(User,{foreignKey: 'userId'});
export default User;