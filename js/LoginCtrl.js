angular.module('starter.controllers')
// TODO put this location stuff in service
.controller('LoginCtrl', function($scope, UrlService, $http, UserService, $ionicPopup, $ionicViewService) {
  $scope.userData = UserService.getSession()

  $scope.loginData = {
    username: "",
    password: ""
  }

  $scope.signup = function(){
    window.location.replace('#/app/signup');
  }

  $scope.login = function(username, password){
    // note make sure to include  in function
    var credentials = {"email":$scope.loginData.username, "password": $scope.loginData.password};
    $http.post(UrlService.baseURL+"/login", credentials)
    .then(function (result) {
        var session = result.data
        if (session !== 'false'){
          UserService.setSession(session);
          $ionicViewService.nextViewOptions({
             disableBack: true
          });
          window.location.replace('#/app/search');
        } else {
          // invalidLoginPopup();
          var invalidLoginPopup = $ionicPopup.alert({
            title: 'Login Error',
            template: 'Email or Password not found'
          });
        }
    });
  }

  $scope.logout = function(){
    UserService.setSession(false);
    window.location.replace('#/app/login');
  }

});
