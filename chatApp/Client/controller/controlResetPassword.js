app.controller('controlResetPassword',function($scope,serviceResetPassword){
    $scope.reset=function(){
    var user ={
    'password':$scope.password
    }
    console.log("register calling",user);
    serviceResetPassword.resetPassword(user,$scope);
    }
    });