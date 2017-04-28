
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});
Parse.Cloud.define("All", function(request, response) {
  var query = new Parse.Query("MyCollection");
 
  query.find({
    success: function(results) {
     
      response.success(JSON.stringify(results));
    },
    error: function() {
      response.error("movie lookup failed");
    }
  });
});

Parse.Cloud.define("Allobjects", function(request, response) {
    var userQuery = new Parse.Query("MyCollection");
   
    userQuery.find().then(function (results) {
        response.success(JSON.stringify(results));
    }, function (error) {
        response.error(error);
    });
});

// Parse.Cloud.define('All', function(request, status)  
// {
//    // res.success('ALL');

//   var query=new Parse.Query("MyCollection");
//    query.find().then(function (res) 
// {
//  console.log("after query is "+res);

// for (var i=0; i< res.length;i++){
// var expirydate=res[i].get('PExpirationDate');
 
// var inputDate = new Date(expirydate);
// var todaysDate = new Date();

// if((inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)))
// {
// console.log("object id is"+res[i].get('_p_PurchasedUserID'));
//  // alert("equal")

// //res.success("object id is"+JSON.stringify(result));
// }
// else
// {

// //alert(" not equal")
// }
// }
//  status.success("final result " + results);
        
      
   
//     }, function queryFailed(reason) {
//       status.error("query unsuccessful, length of result " + result.length + ", error:" + error.code + " " + error.message);
         
//     });
// });
