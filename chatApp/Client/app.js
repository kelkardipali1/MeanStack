/******************************************************************************
 *  @Purpose        : for providing state and route 
 *  @file           : app.js      
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
/**
 * The UI-Router is a routing framework for AngularJS built by the AngularUI team. 
 * It provides a different approach than ngRoute in that it changes 
 * your application views based on state of the application and not just the route URL.
*/
var app = angular.module('chatApp', ['ui.router','btford.socket-io']);
console.log("get item",localStorage.getItem('name'))
app.config(function($stateProvider,$urlRouterProvider){
    /**
     * State for registration
     */
    $stateProvider.state('Register',{
        url:'/register',
        templateUrl:'Templates/Register.html',
        controller:'controlRegister'
    })
    /**
     * State for login
     */
    $stateProvider.state('login',{
        url:'/login',
        templateUrl:'Templates/Login.html',
        controller:'controlLogin'
    })
    /**
     * State for forgotPassword
     */
    $stateProvider.state('forgotPassword',{
        url:'/forgotPassword',
        templateUrl:'Templates/forgotPassword.html',
        controller:'controlForgotPassword'
    })
    /**
     * State for resetPassword
     */
    $stateProvider.state('resetPassword',{
        url:'/resetPassword/:token',
        templateUrl:'Templates/ResetPassword.html',
        controller:'controlResetPassword'
    })
    /**
     * State for dashBoard
     */
    $stateProvider.state('dashBoard',{
        url:'/dashBoard',
        templateUrl:'Templates/dashBoard.html',
        controller:'chatController'

    })
$urlRouterProvider.otherwise('/login');

});
app.service('SocketService', ['socketFactory', function SocketService(socketFactory) {
    return socketFactory({
        ioSocket: io.connect('http://localhost:3000') 
    });
}]);
app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);