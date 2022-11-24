

import { Dialect } from "Sequelize";
import {ENV} from "../infra/config/env";
import Conection from "./Conection";


const dbConfig = {
  dialect:ENV.DB_DIALECT as Dialect,
  port: ENV.DB_PORT,
  host: ENV.DB_HOST,
};

if (process.env.NODE_ENV === "production") {
  Object.assign(dbConfig, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
}
const mySqlConection = new Conection(
  ENV.DB_NAME,
  ENV.DB_USER,
  ENV.DB_PASS,
  dbConfig
);

export { mySqlConection };
console.log(mySqlConection.hasConection());