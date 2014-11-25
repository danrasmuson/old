angular.module('starter.controllers')
.controller('StoryCtrl', function($scope, $location, PillDataService) {
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

    $scope.story = {
        comment: "",
        difficulty: 50,
        moodChange: 50,
        weightChange: 50,
        satisfaction: 50,
        profile: {
            image: "img/danielRasmuson.jpg",
            name: "Daniel Rasmuson"
        },
    };

    $scope.addStory = function(){
        PillDataService.addstory(cleanPillName, $scope.story);
        window.history.back();
    };
});