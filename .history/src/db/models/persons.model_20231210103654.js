const { Model, DataTypes } = require('sequelize');

const PERSON_TABLE = 'persons';

class Person extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Person',
            timestamps: true
        };
    }

    static init(sequelize) {
        super.init(
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: DataTypes.INTEGER
                },
                name: {
                    allowNull: false,
                    type: DataTypes.STRING,
                    field: 'name'
                },
                address: {
                    allowNull: false,
                    type: DataTypes.STRING,
                    field: 'address'
                },
                phone: {
                    allowNull: true,
                    type: DataTypes.STRING,
                    field: 'phone'
                },
                createdAt: {
                    allowNull: false,
                    type: DataTypes.DATE,
                    field: 'createdAt'
                },
                updatedAt: {
                    allowNull: false,
                    type: DataTypes.DATE,
                    field: 'updatedAt'
                }
            },
            {
                ...Person.config(sequelize),
                // Add any additional model options here
            }
        );
    }
}

module.exports = Person;
