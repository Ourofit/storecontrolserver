"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Categories extends Model {

    Categories.init(
        {
            Category_id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "categories",
            modelName: "Categories",
        }
    );
    return Categories;
};
