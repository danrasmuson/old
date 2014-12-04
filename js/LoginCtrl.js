angular.module('starter.controllers')
// TODO put this location stuff in service
.controller('LoginCtrl', function($scope, UrlService, $http, UserService, $ionicPopup, $ionicViewService, $ionicModal) {
  $scope.userData = UserService.getSession()

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/about.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    // you can put it in the localstorage

    var applaunchCount = window.localStorage.getItem('launchCount');

    //Check if it already exists or not
    if(applaunchCount){
       //This is a second time launch, and count = applaunchCount
    }else{
      //Local storage is not set, hence first time launch. set the local storage item
      window.localStorage.setItem('launchCount',1);

      //Do the other stuff related to first time launch
       // $scope.about();
      $scope.modal.show();
    } 
  });

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

  // Open the login modal
  $scope.about = function() {
    $scope.modal.show();
  };

  // Triggered in the login modal to close it
  $scope.closeAbout = function() {
    $scope.modal.hide();
  };


});
