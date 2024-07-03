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
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
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
  if (products.length > 0) {
    let last_product_arry = products.slice(-1);
    let last_product = last_product_arry[0];
    id = last_product.id + 1;
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

const Cart = mongoose.model("Cart", {
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
  size: {
    type: String,
    required: true,
  },
  count: {
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

app.get("/cart", async (req, res) => {
  let products = await Cart.find({});
  console.log("all prod");
  res.send(products);
});

app.post("/addcart", async (req, res) => {
  let products = await Cart.find({});
  console.log(products);
  let id;
  if (products.length > 0) {
    let last_product_arry = products.slice(-1);
    let last_product = last_product_arry[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }

  const product = new Cart({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
    size: req.body.size,
    count: req.body.count,
  });
  console.log(product);
  await product.save();
  console.log("save");
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.post("/updatecart", async (req, res) => {
  const updatedProducts = req.body;
  await Cart.deleteMany({});
  for (const updatedProduct of updatedProducts) {
    const product = new Cart({
      id: updatedProduct.id,
      name: updatedProduct.name,
      image: updatedProduct.image,
      category: updatedProduct.category,
      new_price: updatedProduct.new_price,
      old_price: updatedProduct.old_price,
      size: updatedProduct.size,
      count: updatedProduct.count,
    });
    await product.save();
  }

  console.log("Cart updated");
  res.json({
    success: true,
    message: "Cart updated successfully",
  });
});

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
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

const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({ success: false, errors: "exist user" });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: req.body.cartData,
  });
  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token, name: user.name });
});

app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password == user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token, name: user.name });
    } else {
      res.json({ success: false, errors: "wrong password" });
    }
  } else {
    res.json({ success: false, errors: "wrong email" });
  }
});

app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("new collection");
  res.send(newcollection);
});

app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let product_in_women = products.slice(0, 4);
  console.log("Popular women");
  res.send(product_in_women);
});

app.post("/addcart", async (req, res) => {});

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
