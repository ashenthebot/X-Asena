/* Copyright (C) 2022 X-Electra.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

X-asena X-Electra
*/

const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";
module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || true,
  LOGS: toBool(process.env.LOGS) || false,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  SESSION_ID:process.env.SESSION_ID || "QThnZER_XASENA_makg=",
  LANG: process.env.LANG || "EN",
  HANDLERS:
    process.env.HANDLER === "false" || process.env.HANDLER === "null"
      ? "^"
      : "^[,]",
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: "master",
  PACKNAME: process.env.PACKNAME || "🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀 ",
  WELCOME_MSG:
    process.env.WELCOME_MSG ||
    "Hi @user Welcome to @gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
  AUTHOR: process.env.AUTHOR || "🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀 ",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  SUDO: process.env.SUDO || "94784749430",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "reemmg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "c7417443-faed-4187-9987-c894159c75b8",
  OWNER_NAME: process.env.OWNER_NAME || "💗 A̳s̳h̳e̳n̳ ̳R̳i̳d̳e̳r̳ 🇱🇰",
  BOT_NAME: process.env.BOT_NAME || "🎀 𝒬𝓊𝑒𝑒𝓃 𝑅𝑒𝑒𝓂𝒶𝒽 🎀 ",
  WORK_TYPE: process.env.WORK_TYPE || "public",
};
