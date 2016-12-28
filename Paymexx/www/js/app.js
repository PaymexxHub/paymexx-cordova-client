
window.app = window.app || {} ;

app.onLoad = function() {
	document.addEventListener("app.Ready", app.onAppReady, false) ;
	document.addEventListener('deviceready', app.onDeviceReady, false);
	document.addEventListener("deviceready", app.initEvents, false) ;
},
app.MerchantID="", // Merchant ID
app.ApiKey = "", // Your secert key provided by Paymexx. Can be found on the dahsboard
app.ProductName = "", // The Product name. This should already be created in the Paymexx Dashboard.
app.Env = "test", // The environment you wish to run a transaction in ( either Test mode or Live mode)
app.GatewayUrl = 'https://paymexx.com/gateway/mobile',
app.onAppReady = function(){
	if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
		   navigator.splashscreen.hide() ; 
	}	
},
 app.onDeviceReady = function(){
              if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
		    navigator.splashscreen.hide() ; 
               }
  },
 app.getParameters = function(){
           var formdata = {};
            formdata.merchant_key = app.MerchantID;
            formdata.cmd = app.ApiKey;
            formdata.cust_id =  $("#pmx_email").val(); 
            formdata.email = $("#pmx_email").val();  
            formdata.phone =  $("#pmx_phone").val(); 
            formdata.firstname = $("#pmx_firstname").val();
            formdata.lastname = $("#pmx_lastname").val();
            formdata.account = ((app.ProductName === '')? $("#pmx_product").val():app.ProductName);
            formdata.address = $("#pmx_address").val();
            formdata.postcode =  $("#pmx_postcode").val();
            formdata.city = $("#pmx_city").val();
            formdata.country = $("#pmx_country").val();
            formdata.amount = $("#pmx_amount").val();
            formdata.currency = $("#pmx_currency").val(); 
            formdata.response_url = $("#pmx_response_url").val(); 
            formdata.env = app.Env;
          return formdata;
},
app.launchPaymexxGateway =  function() {
    "use strict";
   var frmdata = {};
   frmdata =  app.getParameters();
   var paymentUrl = app.GatewayUrl+'?mid='+ frmdata.merchant_key + '&cmd='+frmdata.cmd + '&env='+
                   frmdata.env +'&cust_id='+ frmdata.cust_id + '&firstname='+ frmdata.firstname + '&lastname='+
                   frmdata.lastname + '&account='+frmdata.account + '&address='+frmdata.address +'&phone='+ frmdata.phone +
                   '&postcode='+ frmdata.postcode + '&city='+ frmdata.city + '&country='+ frmdata + '&win=gWin'+ 
                    '&amount='+ frmdata.amount + '&currency='+ frmdata.currency + '&response_url=' +frmdata.response_url; 
    try {
        var payRef = window.open(paymentUrl, 'gWin', 'location=yes');
               
    } catch (e) {
       alert('Gateway failed to launch. Kindly resolve this issue or contact the Paymexx Administrator!');
    }

};


$(document).ready(function(){
    
    
});

