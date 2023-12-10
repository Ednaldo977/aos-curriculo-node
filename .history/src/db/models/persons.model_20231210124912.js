const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'persons';

class Person extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Person',
            timestamps: false
        }
    }
} 

const PersonSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nome: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'nome'
    },
    experiencia:{ 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'address'
    },
    phone:{
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'phone'
    } 
}
  
module.exports = { Person, PersonSchema };