const mongooseDb = require("mongoose");

mongooseDb.connect("mongodb://127.0.0.1:27017/node_db11", {
  serverSelectionTimeoutMS: 5000,
});

mongooseDb.connection.on("connected", () => {
  console.log("Connected to mongodb");
});
mongooseDb.connection.on("error", (err) => {
  console.log(`Thers is an error connecting to mongodb- ${err}`);
});

module.exports = mongooseDb;
