var fs = require('fs');
var prettyjson = require('prettyjson');
var data = require('./data.json');
var doc = require('./doc.json');

var concatStr = JSON.stringify(data) + JSON.stringify(doc)
var concatJson = concatStr.replace('}{',',')
// var pretty = prettyjson.render(concatJson)
fs.writeFile('concat.json', concatJson, 'utf-8')
