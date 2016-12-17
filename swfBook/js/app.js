/**
 * Created by SWF
 */

//定义模块 引入路由模块
var app = angular.module('app',['ngRoute']);
//在config中使用服务 需要加后缀
app.config(['$routeProvider',function (route) {
    route
        .when('/home',{
            templateUrl:'js/tpl/editor.html',
            controller:'editorCtrl'
        })
        .when('/list',{
            templateUrl:'js/tpl/list.html',
            controller:'listCtrl'
        })
        .when('/discover',{
            // template:'<h1>发现页面</h1>'
            templateUrl:'js/tpl/discover.html'
        })
        .when('/about',{
            template:'<h1>关于我页面</h1>'
        })
        //当路由匹配不到
        .otherwise({
            redirectTo:'/home' //重定向
        })
}]);


//me
app.service('myService',['$rootScope', function ($rs) {
    $rs.arr=[];
    // window.localStorage.formHistory='';
}]);

app.factory('dataServe',function () {
    var data={};
    data.save = function (person) {
        var arr=[];
        arr.push(person)
        localStorage.userList=angular.toJson(arr);
    }
    data.getData = function () {
        if(localStorage.userList){

        }else{
            localStorage.userList=[];
        }
        return  localStorage.userList;
    }
});

//在定义控制器中注入$route
//通过$route 可以获取路由中传递的参数和条件
app.controller('listCtrl',['$route','$scope',
    function ($r,$s) {

    $s.btnAdd=function () {
       window.location.href = '#/home'
    }
}]);


app.controller('editorCtrl',['$rootScope','$route','$scope',
    function ($rs,$r,$s){
    $s.btnSave=function () {
        // console.log($rs.arr);
        // $rs.arr.push($s.person);
        // console.log($s.person);
        // window.localStorage.userList=JSON.stringify($rs.arr);
        window.location.href = '#/list'
    }
}]);
