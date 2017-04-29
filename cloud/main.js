
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});
Parse.Cloud.define("All", function(request, response) {
  var query = new Parse.Query("MyCollection");
 
  query.find({
    success: function(results) {
     
      response.success(JSON.parse(results));
    },
    error: function() {
      response.error("movie lookup failed");
    }
  });
});

Parse.Cloud.define("Allobjects", function(request, response) {
    var userQuery = new Parse.Query("MyCollection");
   
    userQuery.find({
					  success: function(results) {
              console.log("karthik sucess"+results);
              //response.success(results.toJSON());
              
              },
		
					  error: function(error) {
              console.log("karthik error"+error);
              response.error("movie lookup failed");
						// error is an instance of Parse.Error.
					  }
});
});


Parse.Cloud.define('people', function(request, status)  
{
    console.log('Parse.serverURL: ' + Parse.serverURL);

var GameScore = Parse.Object.extend("MyCollection");
var query = new Parse.Query(GameScore);

 query.find().then(function (res) 
    {
     console.log("after query is "+res);
      
    for(var i=0;i<res.length;i++)
    {
    var id=res[i].get('PExpirationDate');
    console.log("inner query is "+res[i].get('PExpirationDate'));
   
    }

  status.success("final result " + res);
  
    }, function (error) {
      status.error(error);
        
    });
 });

// Parse.Cloud.define('people', function(request, status)  
// {
//     console.log('Parse.serverURL: ' + Parse.serverURL);

// var query = PFQuery(className:"MyCollection")
  
//  query.find().then(function (res) 
//     {
//      console.log("after query is "+res);
      
//     for(var i=0;i<res.length;i++)
//     {
//     var id=res[i].get('PExpirationDate');
//     console.log("inner query is "+res[i].get('PExpirationDate'));
   
//     }

//   status.success("final result " + res);
  
//     }, function (error) {
//       status.error(error);
        
//     });
//  });

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
