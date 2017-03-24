'use strict'

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");


const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: false}));

// routes
app.get("/", function(req, res) {
   res.send("Hi i am baymax");
});

// Facebook
app.get("webhook", function(req, res) {
   if (req.query['hub.verify'] === "messenger") {
      res.send(req.query['hub.challenge']);
   }
   res.send("Wrong token");
});

app.listen(app.get('port'), function() {
   console.log("running port")
});