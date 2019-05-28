app.controller('controlForgotPassword',function($scope,serviceForgotPassword){
    $scope.forgotpassword=function(){
        var user={
            'email':$scope.email
        }
        console.log("forgot password  calling",user);
    serviceForgotPassword.forgotPassword(user,$scope);
    
    
    }
});