var express = require('express');
var bp = require('body-parser');
var fs = require('fs');
var request = require('request');
var csv = require('csv');

var app = express();
var server = app.listen(8502, function(){
  console.log('Server corrente Port 8502');
});

var urlLinienCSV = 'https://data.wien.gv.at/csv/wienerlinien-ogd-linien.csv';
var urlSteigeCSV = 'https://data.wien.gv.at/csv/wienerlinien-ogd-steige.csv';
var urlHaltestellenCSV = 'https://data.wien.gv.at/csv/wienerlinien-ogd-haltestellen.csv';

app.get('/createjson', function(req,res){

  res.end('linien.json created');
});

app.post('/getstations', function(req,res){
  res.sendFile(__dirname+'/linien.json');
});
