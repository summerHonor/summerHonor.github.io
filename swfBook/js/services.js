/**
 * Created by SWF
 */
//创建模块的时候，参数2为项目的依赖项
var app = angular.module('app', []);

//通过value写服务，通常用于写一些配置
app.value('baseUrl', 'http://localhost:3000/api/v1');
// 通过constant定义一个服务，静态内容
app.constant('appName', {name: '我的第一个应用', version: '1.0.0'});
app.service('myService',['baseUrl','$http', function (baseUrl,$http) {
    this.name='myService';
    this.getData=function () {
        console.log(baseUrl);
        console.log($http);
    }
}])
app.controller('mainCtrl', ['$scope', '$http', 'baseUrl', 'appName','myService'
    , function ($scope, $http, baseUrl, appName,myService) {
        console.log($http);
        console.log(baseUrl);
        console.log(appName);
        console.log(myService);
        myService.getData();
        $http.get('http://localhost:63342/1205/data/book_ertong.json')
            .success(function (res) {
                $scope.books = res;
            })
    }]);
app.directive('books',function () {
    return{
        templateUrl:'./js/tpl/books.html',
        scope:{},
        controller:['$scope','$http',function ($scope,$http) {
          $http.get('http://localhost:63342/1205/data/book_ertong.json')
              .success(function (res) {
                  $scope.books = res;
                  console.log(res);
              })
        }],
        link:function (scope,ele,attr) {

        }
    }
});