angular.module('starter.controllers')
.controller('StoryCtrl', function($scope, $location, $http, UrlService) {
    $scope.reviewNum = $location.path().split('/').pop();

    $scope.storyData = {};
    $http.get(UrlService.baseURL+'/story/'+$scope.reviewNum).then(function (response) {
        console.log(response.data);
        $scope.storyData = response.data;
        setTimeout(function() {
          $(document).ready(function() {
              $('.progress .progress-bar').progressbar();
          }); 
        }, 50);
    }); 
});
