angular.module('starter.controllers')
.controller('StoryCtrl', function($scope, $location) {
    $scope.reviewNum = $location.path().split('/').pop();
});
