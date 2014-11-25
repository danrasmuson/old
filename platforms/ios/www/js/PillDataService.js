angular.module('starter')
.service('PillDataService', function($location, $q, $http) {

    var pills = false;

    var getPill = function(pillName){
        var deferred = $q.defer(); 
        if (pills){

            deferred.resolve(pills[pillName]);
        } else{
            $.getJSON('database/PillData.json',function(data){
                pills = data;
                $http.get('https://aqueous-temple-8608.herokuapp.com/pill/img/'+pillName).then(function (response) {
                    pills[pillName].image = response.data;
                    deferred.resolve(pills[pillName]);
                });
            }); 
        } 
        return deferred.promise;
    };

    var addReview = function(pillName, reviewObj){
        pills[pillName].reviews.push(reviewObj);
    };

   return {
    getPill: getPill,
    addReview: addReview,
   };
});

