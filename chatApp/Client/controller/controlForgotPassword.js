/******************************************************************************
 *  @Purpose        : for Controling front end forgot password
 *  @file           : controlForgotPassword.js        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
app.controller('controlForgotPassword', function ($scope, serviceForgotPassword) {
    $scope.forgotpassword = function () {
        /**
        * @description :Storing email in a variable
        * @description:The $scope in an AngularJS is a built-in object, which contains application data and methods
        */
        var user = {
            'email': $scope.email
        }
        console.log("forgot password  calling", user);
        serviceForgotPassword.forgotPassword(user, $scope);


    }
});