angular.module('starter.controllers')
.controller('SearchScreenCtrl', function($scope, $location, PillDataService) {
    $scope.query = '';
    $scope.pills = [];

    $.getJSON('database/pills.json',function(result){
        $scope.pills = result;
    });

    $scope.viewPill = function(pillName){
      window.location.replace("#/app/pill/"+pillName);
    };

    $scope.viewSearch = function(){
      window.location.replace("#/app/search");
    };
});