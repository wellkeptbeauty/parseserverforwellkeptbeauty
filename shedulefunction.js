var time = new Date();
console.log('This is new schedule job log ', time);

function mycoolection() {
    console.log("hai from scheduler");
}
mycoolection();
var Parse = require('parse/node');
Parse.initialize('8PsWDzjb8gZN8I2ytJCKQiA4wP8hiL5jRt4hecwI', 'XlEdqca7cbDXkjU47QUJsjzFWY2K50jWfpDWTSkh', '41tclTmcekJEnOzBcHTULQptqfndEMiAtN6VeGin');
Parse.serverURL = 'https://wellkeptbeauty.herokuapp.com/parse/';

 var query = new Parse.Query("MyCollection");
        query.include('PurchasedUserID');
        query.find().then(function(res) {
            console.log("after query is :" + JSON.stringify(res));
            for (var i = 0; i < res.length; i++) {
                var expirydate = res[i].get('PExpirationDate');
                var inputDate = new Date(expirydate);
                var todaysDate = new Date();
                if ((inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0))) {
                    console.log("object id is" + res[i].get('PurchasedUserID').get('username'));

                       console.log("equal");
                    //res.success("object id is"+JSON.stringify(result));
                } else {
                        console.log("iosPushforsingleuser not equal :")
                }
            }
                        console.log("final result :",results)
            status.success("final result " + results);
            
        }, function queryFailed(reason) {
                        console.log("queryFailed  :",reason)
            status.error("query unsuccessful, length of result " + result.length + ", error:" + error.code + " " + error.message);
        });
