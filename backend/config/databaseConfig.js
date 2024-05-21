const mongoose = require("mongoose");
const MONGOOSE_URL = process.env.MONGODB_URL;
// mongoDb database connection
const databaseconnect = () => {
  mongoose
    .connect(MONGOOSE_URL)
    .then((conn) => console.log(`connected to DB: ${conn.connection.host}`))
    .catch((err) => console.log(err.message));
};

module.exports = databaseconnect;
