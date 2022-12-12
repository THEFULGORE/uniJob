const Sequel = require("../db");
const { DataTypes } = require("sequelize");

const User = Sequel.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: {type: DataTypes.INTEGER },
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
});

const Vacancy = Sequel.define("vacancy", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
})

User.hasMany(Vacancy);
Vacancy.belongsTo(User);

module.exports = {
    User,
    Vacancy
}