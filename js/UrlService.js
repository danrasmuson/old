angular.module('starter')
.service('UrlService', function() {
    // var baseURL = "http://localhost:3000";
    var baseURL = "https://aqueous-temple-8608.herokuapp.com";
    return {
        baseURL: baseURL
    };
});

