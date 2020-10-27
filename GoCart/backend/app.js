/*
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const path = require("path");
const app = express();

console.log("connecting");
let connect = false;
let connectedIn = 0;

setTimeout(connected, 500);
function connected() {
  if (connect) {
    return;
  } else {
    connectedIn += 500;
    console.log(".");
    setTimeout(connected, 500);
  }
}

mongoose
  .connect(
    "mongodb+srv://Shahraj:" +
      "az12sx34" +
      "@cluster0.9kpzp.gcp.mongodb.net/GoCart?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    connect = true;
    console.log("Connection Successful.(Connected in:-", connectedIn, "ms)");
  })
  .catch((error) => {
    console.log("error while establishing connection", error);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/products", productRoute);
app.use("api/user", userRoute);
module.exports = app;
*/
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");

const app = express();

console.log("connecting");
let connect = false;
let connectedIn = 0;

setTimeout(connected, 500);
function connected() {
  if (connect) {
    return;
  } else {
    connectedIn += 500;
    console.log(".");
    setTimeout(connected, 500);
  }
}

mongoose
  .connect(
    "mongodb+srv://Shahraj:" +
      process.env.MONGO_ATLAS_PW +
      "@cluster0.9kpzp.gcp.mongodb.net/GoCart?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    connect = true;
    console.log("Connection Successful.(Connected in:-", connectedIn, "ms)");
  })
  .catch((error) => {
    connect = true;
    console.log("error while establishing connection", error);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", productRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
