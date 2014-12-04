// title, body, difficulty, weightChange, moodChange, satisfaction, userId, pillId
angular.module('starter.controllers')
.controller('WriteStoryCtrl', function($scope, $location, PillDataService, UrlService, $ionicViewService) {
    function toTitleCase(str){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }


    $scope.questions = {
        weightChange: 50
    };

    $scope.pillName = toTitleCase($location.path().split('/').pop().replace('_', ' '));
    var cleanPillName = $scope.pillName.toLowerCase().replace(' ','_');

    PillDataService.getPill(cleanPillName).then(function(pill){
        $scope.pill = pill;
    });

    // TODO CHANGE TITLE AND USERID
    $scope.story = {
        userId: 10,
        title: '',
        comment: '',
        difficulty: 50,
        moodChange: 50,
        weightChange: 50,
        satisfaction: 50
    };

    $scope.addStory = function(){
        $scope.story.pillId = $scope.pill.pillId;
        PillDataService.addStory($scope.story);
        // window.history.back();
        // window.location.replace('#/app/pill/'+$scope.pillName)
        // using the ionicViewService to hide the back button on next view
        $ionicViewService.nextViewOptions({
           disableBack: true
        });

        // Go back to home
        $location.path('#/app/pill/'+$scope.pillName);
    };
});