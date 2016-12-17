/**
 * Created by SWF
 */
var app = angular.module('app',[]);

app.controller('mainCtrl',['$scope','$rootScope',function ($s,$rs) {

}]);
// 创建一个数据服务
app.factory('DataApi',function () {
    var res={};
    res.gameTypes=[
        {id:1,name:'RPG'},
        {id:2,name:'FPS'}
    ]
    res.games=[
        {
            id:10001,
            fid:1,
            name:'仙剑'
        },
        {
            id:10002,
            fid:1,
            name:'流行蝴蝶剑'
        },
        {
            id:20001,
            fid:2,
            name:'CS1.5'
        },
        {
            id:20002,
            fid:2,
            name:'CF'
        },
    ];
    return res;
});
app.directive('selAddress',function () {
    return{
        templateUrl:'./js/tpl/sel_directive.html',
        scope:{},
        controller:['$scope','DataApi',function ($scope,api) {
            console.log(api.gameTypes);
            $scope.gameTypes = api.gameTypes;

            //事件
            $scope.selGTChange = function () {
                console.log('选择改变');
                //过滤
                $scope.games = api.games.filter(function (item) {
                    return item.fid == $scope.selGT;
                })
            }
        }],
        link:function (scope,ele,attr) {
            scope.selGT=2;
        }
    }
});