angular.module('starter.controllers')
.controller('ProfileCtrl', function($scope, $location,  $ionicPopup, $http) {
    $scope.profile = {
      name:  "Daniel Rasmuson",
      weight:  155,
      bloodPressure:  100,
      glucose:  120
    };
    $scope.pristine = true;

    // Triggered on a button click, or some other target
    $scope.getNewValue = function(title, subTitle, putInputIn) {
      $scope.data = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
          template: '<input type="tel" ng-model="data.wifi">',
          title: title,
          subTitle: subTitle,
          scope: $scope,
          buttons: [
            { text: 'Cancel' },
            {
              text: '<b>Save</b>',
              type: 'button-positive',
              onTap: function(e) {
                if (!$scope.data.wifi) {
                  //don't allow the user to close unless he enters wifi password
                  e.preventDefault();
                } else {
                  return $scope.data.wifi;
                }
              }
            },
          ]
        });
        myPopup.then(function(res) {
          $scope.profile[putInputIn] = parseFloat(res);
          $scope.pristine = false;
        });
      };

    $scope.getWeight = function(){
      $scope.getNewValue(
        'Enter Weight',
        'Please enter your current weight',
        'weight'
      );
    };

    $scope.getBloodPressure = function(){
      $scope.getNewValue(
        'Enter Blood Pressure',
        'Please enter your current blood pressure',
        'bloodPressure'
      );
    };

    $scope.getGlucose = function(){
      $scope.getNewValue(
        'Enter Blood Glucose',
        'Please enter your current blood glucose',
        'glucose'
      );
    };

    $scope.loading = false;
    $scope.successSync = false;
    $scope.walgreensText = "Sync With Walgreens";
    $scope.syncWalgreen = function(){
        $scope.loading = true;
        $scope.walgreensText = "Syncing";
        setTimeout(function() {
            $scope.loading = false;
            $scope.successSync = true;
            $scope.walgreensText = "Sync Successful!";
            $scope.$apply();
        }, 1500);
    };
});