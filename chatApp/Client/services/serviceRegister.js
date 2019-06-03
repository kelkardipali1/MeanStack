/******************************************************************************
 *  @Purpose        : for providing service to login
 *  @file           : serviceRegister.js      
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
app.service('serviceRegister',function($http,$location){
    this.registerUser=function(data,$scope){
        console.log("data on service register---",data);
        /**
        * @description:The AngularJS $http service makes a request to the server, and returns a response.
        */
        $http({
            method:'POST',
            url:'http://localhost:3000/register',
            data:data

        }).then(
            function successCallback(response){
                console.log("register successful");
                console.log(response);
                $scope.message="register successful";
                $location.path('/Login');
            },
            function errorCallback(response){
                console.log("register unsuccessful");
                $scope.message=response.data.message.message;
            }
        );
        }
});