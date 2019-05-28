app.service('serviceResetPassword',function($http,$location){
    this.resetPassword=function(data,$scope){
       console.log("data on service register AAAAAAAAAAAAA",$location.$$absUrl);
       var str=$location.$$absUrl;
       var token=str.slice(39,str.length)
       console.log("token in service",token)
      
        $http({
            method:'POST',
            url:'http://localhost:3000/resetPassword/'+token,
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