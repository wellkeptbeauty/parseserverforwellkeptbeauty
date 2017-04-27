
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define("averageStars", function(request, response) {
  
  var GameScore = Parse.Object.extend("MyCollection");
var query = new Parse.Query(GameScore);
//query.equalTo("playerName", "Dan Stemkoski");
query.find({
  success: function(results) {
   // alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
   for (var i = 0; i < results.length; i++) { 
     var object = results[i];
     console.log(object.id + ' - ' + object.get('PExpirationDate'));
   }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
});

Parse.Cloud.define('All', function(request, status)  
{
   // res.success('ALL');

  var query=new Parse.Query("MyCollection");
   query.find().then(function (res) 
{
 console.log("after query is "+res);

for (var i=0; i< res.length;i++){
var expirydate=res[i].get('PExpirationDate');
 
var inputDate = new Date(expirydate);
var todaysDate = new Date();

if((inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)))
{
console.log("object id is"+res[i].get('_p_PurchasedUserID'));
 // alert("equal")

//res.success("object id is"+JSON.stringify(result));
}
else
{

//alert(" not equal")
}
}
 status.success("final result " + results);
        
      
   
    }, function queryFailed(reason) {
      status.error("query unsuccessful, length of result " + result.length + ", error:" + error.code + " " + error.message);
         
    });
});
