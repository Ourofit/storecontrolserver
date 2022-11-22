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
            city: {
                type: DataTypes.STRING(1000),
                allowNull: false,
            },
            I: {
                type: DataTypes.TEXT("long"),
                allowNull: false,
            },
            Color: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Size: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Stock: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            precioVenta: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            costoCompra: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            costoMenor: {
                type: DataTypes.STRING,
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
            tableName: "products_data",
            modelName: "Products_data",
        }
    );
    return Products_data;
};