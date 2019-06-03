/******************************************************************************
 *  @Purpose        : for Controling front end login page
 *  @file           : controlLogin.js        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
app.controller('controlLogin', function ($scope, serviceLogin) {
    $scope.login = function () {
        /**
         * @description :Storing email and password in variable
         * @description:The $scope in an AngularJS is a built-in object, which contains application data and methods
         */
        var data = {
            'email': $scope.email,
            'password': $scope.password
        }
        console.log("data", data)

        serviceLogin.login(data, $scope);

    }


});
