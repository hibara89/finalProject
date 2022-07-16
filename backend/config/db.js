require("dotenv").config();

const mongoose = require("mongoose");

const connectBD = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo connection success");
  } catch (error) {
    console.error("mongo connection fail");
    process.exit(1);
  }
};

module.exports = connectBD;
