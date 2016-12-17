/**
 * Created by SWF
 */

var app = angular.module('app',[]);
app.controller('mainCtrl',['$scope',function ($scope) {
    $scope.isShow = false;

    $scope.toggleHandle = function () {
        $scope.isShow  = !$scope.isShow;
    };
    $scope.doSubmit=function () {
        console.log($scope.person);
    }
}]);