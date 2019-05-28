app.service('serviceLogin',function($http,$location){
    this.login=function(data,$scope){
        console.log("data on service register---",data);
        $http({
            method:'POST',
            url:'http://localhost:3000/login',
            data:data,
        }).then(
            function successCallback(response){
                console.log("login successful at servicelogin in client side");
                var userid=response.data.message[0]._id ;
                var name=response.datamessage[0].firstName;
                var token=response.data.token;
                localStorage.setItem("userid",userid);
                localStorage.setItem("name",name);
                localStorage.setItem("token",token);          
            },
            function errorCallback(response){
                console.log("Login unsuccessful please check your username and password");
                console.log(response);
                $scope.loginMessage="EmailId or Password Incorrect";
            }
        );
    }
});
