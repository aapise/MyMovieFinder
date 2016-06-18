angular.module('starter.services', [])

.factory('MovieDb', ['$http', function ($http) { 
    return {
        getMovies: function(title, page) {
            var getData = {
                method: 'jsonp',
                url: 'http://www.omdbapi.com/?s=' + title + '&page=' + page, 
                headers: {
                    'Content-Type': undefined
                },
                params : {
                    callback : 'JSON_CALLBACK'
                }

            };
            return $http(getData)
        }

    }
}]);