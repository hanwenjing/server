/**
 * Created by Administrator on 2017/10/19 0019.
 */
app.controller('serverController',function($scope,server){
    server.ajax('Data/list1.json').then(function(data){
        var lists='';
        $scope.lists=data.data;
    });
});

