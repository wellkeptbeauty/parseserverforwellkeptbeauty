var time = new Date();
console.log('This is new schedule job log ', time);

function mycoolection() {
    console.log("hai from scheduler");
}
mycoolection();
var Parse = require('parse/node');
Parse.initialize('8PsWDzjb8gZN8I2ytJCKQiA4wP8hiL5jRt4hecwI', 'XlEdqca7cbDXkjU47QUJsjzFWY2K50jWfpDWTSkh', '41tclTmcekJEnOzBcHTULQptqfndEMiAtN6VeGin');
Parse.serverURL = 'https://wellkeptbeauty.herokuapp.com/parse/';

// var Parse = require(‘parse/node’);
// Parse.initialize(process.env.8PsWDzjb8gZN8I2ytJCKQiA4wP8hiL5jRt4hecwI, process.env.XlEdqca7cbDXkjU47QUJsjzFWY2K50jWfpDWTSkh, process.env.41tclTmcekJEnOzBcHTULQptqfndEMiAtN6VeGin);
// Parse.serverURL = process.env.https://wellkeptbeauty.herokuapp.com/parse/;
Parse.Cloud.run(“Allobjects”);
