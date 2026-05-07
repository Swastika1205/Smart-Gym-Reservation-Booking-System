import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "fitslot_db"
});

connection.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
    return;
  }

  console.log("Connected to MySQL database");
});

export default connection;
