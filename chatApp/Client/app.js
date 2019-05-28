var app=angular.module('chatApp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('Register',{
        url:'/register',
        templateUrl:'Templates/Register.html',
        controller:'controlRegister'
    })
    $stateProvider.state('login',{
        url:'/login',
        templateUrl:'Templates/Login.html',
        controller:'controlLogin'
    })
    $stateProvider.state('forgotPassword',{
        url:'/forgotPassword',
        templateUrl:'Templates/forgotPassword.html',
        controller:'controlForgotPassword'
    })
    $stateProvider.state('resetPassword',{
        url:'/resetPassword/:token',
        templateUrl:'Templates/ResetPassword.html',
        controller:'controlResetPassword'
    })
$urlRouterProvider.otherwise('/login');

});