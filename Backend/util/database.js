const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense-tracker", "root", "abhi9852", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
