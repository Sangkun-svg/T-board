import * as sequelize from "sequelize";

export const dbConfig = new sequelize.Sequelize(
  process.env.DB_DATABASE || "user",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "1234",
  {
    // logging: true,
    logging: false,
    port: Number(process.env.DB_PORT) || 3306,
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
    pool: {
      min: 1,
      max: 5,
      acquire: 100000,
      idle: 10000,
    },
    define: {
      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: true,
      // If don't want createdAt
      // createdAt: false,
      // If don't want updatedAt
      // updatedAt: false,
    },
  }
);
