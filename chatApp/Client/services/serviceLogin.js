/******************************************************************************
 *  @Purpose        : for providing service to login
 *  @file           : serviceLogin.js      
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
app.service('serviceLogin',function($http,$location){
    this.login=function(data,$scope){
        console.log("data on service register---",data);
        /**
        * @description:The AngularJS $http service makes a request to the server, and returns a response.
        */
        $http({
            method:'POST',
            url:'http://localhost:3000/login',
            data:data,
        }).then(
            function successCallback(response){
                console.log("login successful at servicelogin in client side");
                console.log("response",response)
               
                var userid=response.data.message._id ;
                var name=response.data.message.firstName;
                var token=response.data.token;
                console.log("response")
                console.log("resopnse data",response.data.token)
               // var rusername=response.data.message[0].firstName
                //var ruserId=response.data.message[0]._id;
                localStorage.setItem("userid",userid);
                localStorage.setItem("name",name);
                localStorage.setItem("token",token);  
               // localStorage.setItem("rusername",rusername);
                //localStorage.setItem("ruserId",ruserId);
                $location.path('/dashBoard');
                        
            },
            function errorCallback(response){
                console.log("Login unsuccessful please check your username and password");
                console.log(response);
                $scope.loginMessage="EmailId or Password Incorrect";
            }
        );
    }
});
