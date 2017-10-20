/**
 * Created by Administrator on 2017/10/18 0018.
 */
var app=angular.module('myApp',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('servers',{
            url:'/servers',
            templateUrl:'App/View/server.html',
            controller:'serverController'
        })
        .state('financial',{
            url:'/financial',
            templateUrl:'App/View/financial.html'
        });
    $urlRouterProvider.otherwise('servers');
});
