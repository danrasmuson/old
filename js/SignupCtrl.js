angular.module('starter.controllers')
// TODO put this location stuff in service
.controller('SignupCtrl', function($scope, $http, UrlService, UserService, $ionicPopup) {
    $scope.userData = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    $scope.signup = function(){
        // note make sure to add to in function
        $http.post(UrlService.baseURL+'/add/user', $scope.userData)
        .then(function (result) {
           if (result.data !== 'failure'){
              UserService.setSession(result.data);
              window.location.replace('#/app/search');
           } else{
              var invalidLoginPopup = $ionicPopup.alert({
                title: 'Login Error',
                template: 'Email or Password not found'
              });
           }
        });
    }

});
