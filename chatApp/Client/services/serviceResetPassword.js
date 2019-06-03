/******************************************************************************
 *  @Purpose        : for providing service to resetpassword
 *  @file           : serviceResetPassword.js      
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
app.service('serviceResetPassword',function($http,$location){
    this.resetPassword=function(data,$scope){
       console.log("token in service",token)
       /**
        * @description:The AngularJS $http service makes a request to the server, and returns a response.
        */
      
        $http({
            method:'POST',
            url:'http://localhost:3000/resetPassword/:token',
            data:data
        }).then(
            function successCallback(response){
                console.log("reset password successful");
                console.log(response);
                $scope.message="reset password successful";
                $location.path('/Login');
            },
            function errorCallback(response){
                consolde.log("reset password unsuccessful");
                $scope.message=response.data.message.message;
            }
        )
    }
});