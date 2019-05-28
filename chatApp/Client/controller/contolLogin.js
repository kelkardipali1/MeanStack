app.controller('controlLogin',function($scope,serviceLogin){
    $scope.login=function(){
        var data={
            'email':$scope.email,
            'password':$scope.password
        }
        console.log("data",data)
       
        serviceLogin.login(data,$scope);
       
    }
    
   
});
