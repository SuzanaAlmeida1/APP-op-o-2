"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
module.exports = {
    development: {
        username: env_1.ENV.DB_USER,
        password: env_1.ENV.DB_PASS,
        database: env_1.ENV.DB_NAME,
        host: env_1.ENV.DB_HOST,
        dialect: env_1.ENV.DB_DIALECT,
        dialectOptions: {
            bigNumberStrings: true
        }
    },
};
// //if (process.env.NODE_ENV === "production"){
//   Object.assign(db, {
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//   });
// };
//module.exports = db;
