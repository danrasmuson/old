angular.module('starter.controllers', [])
.controller('SearchCtrl', function($scope, $ionicModal, $http, UrlService) {
  $scope.popular = [
    "Vyvanse",
    "Effexor",
    "Lexapro",
    "Tylenol",
    "Adderall"
  ];

  $scope.viewSearch = function(){
    window.location.replace("#/app/searchScreen");
  };

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/searchScreen.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeSearch = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.search = function() {
    $scope.modal.show();
    document.getElementById('searchBox').focus();
  };

  $scope.query = '';
  $scope.pills = [];

  $http.get(UrlService.baseURL+'/pills').then(function (response) {
    $scope.pills = response.data;
  });

  $scope.viewPill = function(pillName){
    $scope.closeSearch();
    window.location.replace("#/app/pill/"+pillName);
  };
});