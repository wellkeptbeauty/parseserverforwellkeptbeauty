
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("coolection", function(request, response) {
	
	console.log("we are in define cloud");
//	console.log("define request :",request);
//	console.log("response :",response.success,response.error);
	
// 	var query = new Parse.Query("MyCollection");
	
// //	query.equalTo("PCompanyName");

// 	console.log("query  :",query);
// 	query.find({
// 		success: function(results) {
// 	    		console.log("In Query Success :",results);
//       		      response.success(results);
// 	    		console.log("companyname:",results);
//     		},
//     		error: function(error) {
// 	    	    console.log("companyname fail:",error);
// 		      response.error("movie lookup failed");
//     		}
//   	});

	    var query = new Parse.Query("MyCollection");

    query.find({
        success: function(results) {
            response.success(results);
                        console.log("success ",results);

        }, error: function(error) {
            response.error("failed: %@", error);
            console.log(theerror);
        }
    }); 
});


Parse.Cloud.define("articles", function(request, response) {
  var query = new Parse.Query("BeautyExperts");
  query.equalTo("EName", "K. AJ Crimson");
  query.find({
    success: function(results) {
      console.log("sucess experts is",results);
      response.success(results);
    },
    error: function(error) {
	    console.log("error at expert",error);
      response.error("expert failed");
    }
  });
});

// Parse.Cloud.define("getUserId", function(request, response) 
// {
//     //Example where an objectId is passed to a cloud function.
//   //  var id = request.params.objectId;
// 	    var id = "BnwdN3U0iI";


//     //When getUser(id) is called a promise is returned. Notice the .then this means that once the promise is fulfilled it will continue. See getUser() function below.
//     getUser(id).then
//     (   
//         //When the promise is fulfilled function(user) fires, and now we have our USER!
//         function(user)
//         {
//             response.success(user);
// 		console.log("user success"+user);
//         }
//         ,
//         function(error)
//         {
//             response.error(error);
// 				console.log("user error"+error);

//         }
//     );

// });

// function getUser(userId)
// {
//     Parse.Cloud.useMasterKey();
//     var userQuery = new Parse.Query(Parse.User);
//     userQuery.equalTo("objectId", userId);

//     //Here you aren't directly returning a user, but you are returning a function that will sometime in the future return a user. This is considered a promise.
//     return userQuery.first
//     ({
//         success: function(userRetrieved)
//         {
//             //When the success method fires and you return userRetrieved you fulfill the above promise, and the userRetrieved continues up the chain.
//             return userRetrieved;
//         },
//         error: function(error)
//         {
//             return error;
//         }
//     });
// };
Parse.Cloud.define("test", function(request, response) {
    var query = new Parse.Query("MyCollection");

    query.find({
        success: function(results) {
            response.success(results);
                        console.log(results);

        }, error: function(error) {
            response.error("user lookup failed: %@", error);
            console.log(theerror);
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
     console.log("after query is ",res);
      
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

Parse.Cloud.define('collection', function(request, status)  
{
    var GameScore = Parse.Object.extend("MyCollection");
var query = new Parse.Query(GameScore);
query.find({
  success: function(results) {
	       console.log("after query result is "+res);

    status.success("final result " + res);

    console.log("Successfully retrieved " + results.length);
   
  },
  error: function(error) {
    console.log("Error: " + error.code + " " + error.message);
          status.error(error);

  }
});
 });

Parse.Cloud.define("All", function(request, response) {
  var query = new Parse.Query("MyCollection");
	
	query.equalTo("PCompanyName","Beauty Encounter");
 
 query.find().then(function (res) 
     {
	      console.log("after query is "+res);

	    console.log("results after query"+res);
     
      response.success(res);
    },
   function(error) {
	    	    console.log("results after error"+error);

      response.error("movie lookup failed");
   
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

// Parse.Cloud.define('Allobjetcs', function(request, status)  
// {
//    // res.success('ALL');

//   var query=new Parse.Query("MyCollection");
// Parse.Cloud.useMasterKey();
// 	query.include('PurchasedUserID');
//    query.find().then(function (res) 
// {
//  console.log("after query is :" + JSON.stringify(res));

// for (var i=0; i< res.length;i++){
// var expirydate=res[i].get('PExpirationDate');
 
// var inputDate = new Date(expirydate);
// var todaysDate = new Date();

// if((inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)))
// {
// console.log("object id is"+res[i].get('PurchasedUserID').get('objectId'));
	
// 	//res[i].get('userName').get('userObjectId')
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


Parse.Cloud.define('Allobjetcs', function(request, status)  
{
   // res.success('ALL');

  var query=new Parse.Query("MyCollection");
Parse.Cloud.useMasterKey();
	query.include('PurchasedUserID');
   query.find().then(function (res) 
{
 console.log("after query is :" + JSON.stringify(res));

for (var i=0; i< res.length;i++){
var expirydate=res[i].get('PExpirationDate');
 
var inputDate = new Date(expirydate);
var todaysDate = new Date();

if((inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)))
{
console.log("object id is"+res[i].get('PurchasedUserID').get('email'));
	Parse.Cloud.run("push", { toEmail:res[i].get('email'),callActive:res[i].get('PProductName')}).then(function(result) 
											   {
    // make sure the set the enail sent flag on the object
    console.log("result :" + JSON.stringify(result))
       }, function(error) {
        
     });
	
	//res[i].get('userName').get('userObjectId')
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


Parse.Cloud.define('push', function(request, status)  
{
    
    

var email=request.params.toEmail;
	
	// var username = request.object.get("username");

                  //Set push query
                  var query = new Parse.Query(Parse.User);
  //var message = request.params.message;
  query.equalTo('email', email);

  Parse.Push.send({
    where: query,
    data : { 
      alert: "hai",
      badge: "Increment",
      sound: "",
    }
    }, {
    success: function() {
    //Success
    },
    error: function(error) {
    //Oops
    }
  });
});
