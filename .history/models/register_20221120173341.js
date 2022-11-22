"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Register extends Model {
        static associate({ Deposito }) {
           
            this.belongsTo(Deposito, {
                foreignKey: "Deposito_id",
                as: "deposito",
            });
        }
    }
    Register.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            number: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            Cuntry: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            Province: {
                type: DataTypes.TEXT("long"),
                allowNull: false,
            },
          

            //-----------CATEGORY ID ASSOCIATIONS---------------------------
            // Category_id: {
            //     type: DataTypes.DATE,
            //     allowNull: false,
            // },

            //----------------------------------------------------------------
        },
        {
            sequelize,
            tableName: "register",
            modelName: "Register",
        }
    );
    return Register;
};
