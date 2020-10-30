//Budget API
const express = require('express');
//const cors = require('cors');
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const budgetModel = require("./model/budget_schema");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/", express.static("public"));

app.get("/budget", (req, res) => {
  //fetch
  let url = "mongodb://localhost:27017/testing_kritika";
  mongoose.connect(url, { useNewUrlParser: true });
  budgetModel.find().then((data) => {
    console.log(data);
    mongoose.connection.close();
    res.json(data);
  });
});

app.get("/chart", (req, res) => {
  //fetch
  let url = "mongodb://localhost:27017/testing_kritika";
  mongoose.connect(url, { useNewUrlParser: true });
  budgetModel.find().then((data) => {
    console.log(data);
    mongoose.connection.close();
    res.json(data);
  });
});

app.get("/saving", (req, res) => {
  console.log("inside port");
  console.log(req);
  res.json(budget);
});

app.post("/test", (req, res) => { 
    console.log(req.body);  
    res.json(req.body);
});

app.post("/insert", (req, res) => {
  if (!req.is("json")) {
    res.jsonp(400, { error: "Bad request" });
    return;
  }
  if (req.body.color.length < 7) {
    res.jsonp(400, { error: "Invalid color" });
    return;
  }
  if (req.body.color.length > 7) {
    res.jsonp(400, { error: "Invalid color" });
    return;
  }
  if (req.body.title.length < 1) {
    res.jsonp(400, { error: "Invalid title" });
    return;
  }
  if (req.body.budget.length < 1) {
    res.jsonp(400, { error: "Invalid budget" });
    return;
  }

  let url = "mongodb://localhost:27017/testing_kritika";
  mongoose.connect(url, { useNewUrlParser: true });
  let newData = new budgetModel({ id: req.body.id, title: req.body.title, budget: req.body.budget, color: req.body.color });
  budgetModel
    .insertMany(newData)
    .then((data) => {
      mongoose.connection.close();
    })
    .catch((connectionError) => {
      console.log(connectionError);
    });
  res.json("insertion successful");
});

app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});
