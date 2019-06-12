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

var linien, steige, haltestellen;

var loadCSV = function(url){
  return new Promise(function(res,rej){
    request.get(url, function(err, response, body){
        if(!err && response.statusCode == 200 ){
          res(body);
        }else{
          rej('load'+url+'');// per catch
        }
    })
  });
}
 var parseCSV = function(data, url){
   return new Promise(function(res,rej){
     csv.parse(data,{delimiter:';'}, function(err, data){
       if(!err){
         res(data);
       }else{
         rej('csv parse');
       }
     })
   });

 }
 var saveJSON = function(){
   var data = {lines:[]};
   var c = {
       U1:'#e20613',
       U2:'#a762a3',
       U3:'#ee7d00',
       U4:'#009540',
       U6:'#9d6930'
     };

  var linien = [];
   // console.log(linien);
   for(i in linien){
     if(linien[i][4] == 'ptMetro'){
       linienId[linien[i][0]] = data.lines.length;
       data.lines.push({
         name:linien[i][1],
         color:c[linien[i][1]],
         stations:[]
       });
     }
   }
   console.log(data);
   console.log(steige);
   for(i in steige ){
     var j = linienId[steige[i][1]];
     if(typeof j == 'number'){
       if(data.lines[j].stations.indexOf(steige[i][2]== -1)){
         data.lines[j].stations.push = steige[i][2];
       }

     }
   }
   console.log(data.lines[0].stations);
 }

app.get('/createjson', function(req,res){
  // 1.caricare dati CSV(linien)
  loadCSV(urlLinienCSV)
    .then(parseCSV)
    .then(function(data){
      linien = data;
      return loadCSV( urlHaltestellenCSV );
    })
    .then(parseCSV)
    .then(function(data){
      haltestellen = data
      console.log('tutto pronto');
    })
    .catch(function(err){
      console.log('CSV errore di lettura' + err);
    })
  // 2. Parse CSV
  // 3.Lade csv datei (steige)
  // 4. parse csv
  // 5. carico scv fermate
  // 6. parse csv
  // 7. salvo JSON

  res.end('linien.json created');
});

app.post('/getstations', function(req,res){
  res.sendFile(__dirname+'/linien.json');
});
