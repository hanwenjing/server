/**
 * Created by Administrator on 2017/10/19 0019.
 */
app.factory('server',function($http,$q){
    return{
        ajax:function(url){
            var def=$q.defer()
            $http({
                url:url
            }).then(function(data){
                def.resolve(data)
            });
            return def.promise
        }
    }
});
