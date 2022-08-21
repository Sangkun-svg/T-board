import { Sequelize, Model, DataTypes } from "sequelize";
import { dbConfig } from "../db/sequelize";

const { STRING, INTEGER, DATE, NOW, BOOLEAN } = DataTypes;
//TODO: add parent obj for default columns
export const User = dbConfig.define("users", {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  address: {
    type: STRING,
    allowNull: false,
  },
  phone: {
    type: STRING,
    allowNull: false,
  },
  createdAt: {
    type: DATE,
    defaultValue: NOW,
  },
  updatedAt: {
    type: DATE,
    defaultValue: NOW,
  },
  isDeleted: {
    type: BOOLEAN,
    defaultValue: false,
  },
});
