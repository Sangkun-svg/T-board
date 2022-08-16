import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");
const { STRING } = DataTypes;
export const User = sequelize.define("User", {
  username: STRING,
  email: STRING,
  address: STRING,
  Phone: STRING,
});
