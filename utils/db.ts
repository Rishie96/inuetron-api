const util = require("util");
let mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "ineutron",
  multipleStatements: true,
  connectionLimit: 100,
  waitForConnections: true,
  queueLimit: 0,
  wait_timeout: 60 * 60 * 60,
  connect_timeout: 10,
});

pool.query = util.promisify(pool.query);
pool.getConnection = util.promisify(pool.getConnection);

export default pool;
