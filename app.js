const express = require("express");
const app = express();

// const request = require("request");
const axios = require('axios');


app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render( "search");
});


  // const query = req.query.search;
  // var url = "http://www.omdbapi.com/?s="+ query +"&apikey=thewdb";

app.get("/results", function(req, res) {
  var query = req.query.search;
  // Make a request for a user with a given ID
  axios.get('http://www.omdbapi.com/?s=' + query +'&apikey=thewdb')
    .then(function (response) {
      // handle success
      var data = response.data["Search"];
      res.render("results", {data: data});
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
});



app.listen(3000,  function(){
  console.log("Server has started");
});