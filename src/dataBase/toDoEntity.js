const { DataTypes } = require('sequelize');
const sequelize = require('./connect');

const ToDoEntity = sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    
  },
  cardText: {
    type: DataTypes.STRING,
    allowNull: false
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});



module.exports = ToDoEntity;