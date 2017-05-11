
    var time = new Date();
    console.log('This is schedule job log ',time);

function mycoolection(){
	console.log("hai from scheduler");
}
mycoolection();
// function fetchmycollection(){
// {
   // res.success('ALL');

  var query=new Parse.Query("MyCollection");
	query.include('PurchasedUserID');
   query.find().then(function (res) 
{
// console.log("after query is :" + JSON.stringify(res));

for (var i=0; i< res.length;i++){
var expirydate=res[i].get('PExpirationDate');
 
var inputDate = new Date(expirydate);
var todaysDate = new Date();

if((inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)))
{
console.log("object id is"+res[i].get('PurchasedUserID').get('username'));
//  console.log("object id is"+res[i].get('PurchasedUserID').get('username'));

	 Parse.Cloud.run("iosPushforsingleuser", { toEmail:res[i].get('PurchasedUserID').get('username'),toProductTitle:res[i].get('PProductName')}).then(function(result) 
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
//}
Parse.Cloud.define("iosPushforsingleuser", function(request, response) {
	
// 	var query = new Parse.Query(Parse.User);
// //  var message = request.params.message;
//   query.equalTo('username', 'karthik@betabulls.com');
	 	var email=request.params.toEmail;
	 var query = new Parse.Query(Parse.Installation);
  query.exists("deviceToken");
	//query.equalTo('deviceToken','f4ac9341c3598e4c2e5e41ebe1f9f0d631a4fa387873e2c36449743bd2800d8a');
      query.equalTo('userId',email);
	console.log("inner query is",email);
	console.log("product name is"+request.params.toProductTitle);
		//query.equalTo('userId','karthik@betabulls.com');
	//var title="product";
var message="Hello Beautiful! your "+request.params.toProductTitle+"expirs today.Make sure to toss it and order a new one!";

  // here you can add other conditions e.g. to send a push to sepcific users or channel etc.

  var payload = {
	  title:"Well-Kept Beauty",
    alert: message,
	  sound: "default",
	    badge: 1,
            'content-available': 1
      // you can add other stuff here...
  };


  Parse.Push.send({
      data: payload,
      where: query
    }, {
      useMasterKey: true
    })
    .then(function() {
      response.success("Push Sent!");
    }, function(error) {
      response.error("Error while trying to send push " + error.message);
    });


});
    fetchmycollection();

