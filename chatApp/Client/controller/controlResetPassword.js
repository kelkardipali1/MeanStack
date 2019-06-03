/******************************************************************************
 *  @Purpose        : for Controling front end Register
 *  @file           : controlResetPassword.js        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
app.controller('controlResetPassword', function ($scope, serviceResetPassword) {
    $scope.reset = function () {
        /**
         * @description :Storing password  in a object variable
         * @description:The $scope in an AngularJS is a built-in object, which contains application data and methods
         */
        var user = {
            'password': $scope.password
        }
        console.log("register calling", user);
        serviceResetPassword.resetPassword(user, $scope);
    }
});