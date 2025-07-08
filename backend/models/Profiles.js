import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Profiles = sequelize.define('Profile', {
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  linkDN: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  skill: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  photo: {
    type: DataTypes.TEXT('long'),
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

export default Profiles;
