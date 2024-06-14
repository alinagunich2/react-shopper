const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Data Mongodb
mongoose.connect(
  "mongodb+srv://test:test1234@cluster0.fnxrkha.mongodb.net/shopping"
);

app.get("/", (req, res) => {
  res.send("running");
});

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.name}`,
  });
});

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avilable: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.lendth > 0) {
    let last_product_arry = products.slice(-1);
    let last_product = last_product_arry[0];
    id = last_product + 1;
  } else {
    id = 1;
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("save");
  res.json({
    success: true,
    name: req.body.name,
  });
});
app.post("/removeproduct", async (req, res) => {
  await Product.findByIdAndDelete({ id: req.body.id });
  console.log("remove");
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("all prod");
  res.send(products);
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server start");
  } else {
    console.log(error);
  }
});

// {
//     "name":"product 123",
//     "id":22,
//     "old_price":123,
//     "new_price":1,
//     "image": "http://localhost:4000/images/product_34.png",
//     "category": "kid"
