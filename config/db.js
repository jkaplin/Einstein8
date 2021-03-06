const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const mongoDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log("MongoDB Connectd");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = mongoDB;
