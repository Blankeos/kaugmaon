import * as mysql from "mysql2";
const connection = mysql.createConnection(process.env.DATABASE_URL || "");
console.log("Connected to PlanetScale!");

export default connection;
