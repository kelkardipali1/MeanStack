/******************************************************************************
 *  @Purpose        : for Controling front end Register
 *  @file           : controlRegister.js        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
app.controller('controlRegister', function ($scope, serviceRegister) {
    console.log("rtfrey", serviceRegister)
    console.log("register calling")
    $scope.register = function () {
        /**
         * @description :Storing firstname,lastname,email and password  in a object variable
         * @description:The $scope in an AngularJS is a built-in object, which contains application data and methods
         */
        var user = {
            'firstName': $scope.firstName,
            'lastName': $scope.lastName,
            'email': $scope.email,
            'password': $scope.password
        }
        console.log("register calling", user);

        serviceRegister.registerUser(user, $scope);
    }
});
