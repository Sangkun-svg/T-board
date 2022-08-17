import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");
const { STRING, INTEGER } = DataTypes;
export const User = sequelize.define("users", {
  name: STRING,
  email: STRING,
  address: STRING,
  phone: STRING,
});
