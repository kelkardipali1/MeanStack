/******************************************************************************
 *  @Purpose        : for providing service to forgotPassword
 *  @file           : serviceForgotPassword.js      
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
app.service('serviceForgotPassword',function($http,$location){
    this.forgotPassword=function(data,$scope){
        /**
        * @description:The AngularJS $http service makes a request to the server, and returns a response.
        */
        $http({
            method:'POST',
            url:'http://localhost:3000/forgotPassword',
            data:data,
        }).then(
            function successCallback(response){
                console.log("Forgot password successful");
            
                var userid=response.data.message[0]._id ;
                var name=response.datamessage[0].firstName;
                var token=response.data.token;
                localStorage.setItem("userid",userid);
                localStorage.setItem("name",name);
                localStorage.setItem("token",token);   
                $scope.loginMessage="login Successful"  ;     
            },
            function errorCallback(response){
                console.log("register unsuccessful");
                console.log(response);
                $scope.loginMessage="EmailId Incorrect";
            }
        );
    }
});