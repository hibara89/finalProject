require("dotenv").config();
const express = require("express");
const connectBD = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectBD();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`the server is running on port ${PORT}`));
