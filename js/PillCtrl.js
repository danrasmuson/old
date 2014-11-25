angular.module('starter.controllers')
// todo put this location stuff in service
.controller('PillCtrl', function($scope, $location, PillDataService) {
  $scope.toTitleCase = function(str){
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };

  $scope.pillName = $location.path().split('/').pop().toLowerCase().replace(' ', '_');
  $scope.overview = {
    difficulty: 0,
    weightChange: 0,
    moodChange: 0,
    satisfaction: 0
  };


  $scope.pill = "";
  // $.getJSON('database/PillData.json',function(pills){
  PillDataService.getPill($scope.pillName).then(function(pill){
    $scope.pill = pill;
    $scope.overview.difficulty = $scope.getAverage('difficulty');
    $scope.overview.weightChange = $scope.getAverage('weightChange');
    $scope.overview.moodChange = $scope.getAverage('moodChange');
    $scope.overview.satisfaction = $scope.getAverage('satisfaction');
    setTimeout(function() {
      $(document).ready(function() {
          $('.progress .progress-bar').progressbar();
      }); 
    }, 50);
  });

  $scope.getAverage = function(key){
    total = 0;
    count = 0;
    for (var i = 0; i < $scope.pill.stories.length; i++) {
      total += $scope.pill.stories[i][key];
      count += 1;
    }
    return Math.round(total/count);
  };

  // todo put this in servce
  $scope.writeStory = function(pillName){
    window.location.replace("#/app/story/write/"+pillName);

  };

  $scope.browser = function(link){
    var ref = window.open(link, '_blank', 'location=yes');
  };

  
});