require("dotenv").config();

const productsData = require("./data/products");

const connectBD = require("./config/db");
const Product = require("./models/Product");

connectBD();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productsData);

    console.log("data import success");

    process.exit();
  } catch (error) {
    console.error("Error with data import");
    process.exit(1);
  }
};

importData();
