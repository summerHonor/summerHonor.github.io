/**
 * Created by SWF
 */
//创建模块的时候 第二个参数[]为项目的依赖项,多个用数组分割,没有时为空数组
var app = angular.module('app', [])


//通过service定义服务
//服务可以依赖其他服务
app.service('mService', ['$http', function ($http) {
    this.name = "mService"
    //此方法接收一个回调函数
    this.getData = function (Type, callback) {
        $http.get('data/book_' + Type + '.json')
            .success(function (res) {
                callback(res)
            })
    }
}])

//创建控制器
app.controller('mainCtrl', ['$scope', 'mService'
    , function ($scope, m_s) {
        m_s.getData('ertong', function (res) {
            $scope.books = res //把数据绑定到$scope中
        }) //调用服务中的getData()方法

        //点击事件
        $scope.btnTab = function (type) {
            //获取事件源 自定义属性
            m_s.getData(type, function (res) {
                $scope.books = res //把数据绑定到$scope中
            }) //调用服务中的getData()方法
        };
    }])
