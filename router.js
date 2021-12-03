angular.module('app').config(function($routeProvider) {
    $routeProvider
        .when('/post/:iduser?', {
            templateUrl: 'post/post.html',
            controller: 'PostController as vm'
        })
        .otherwise({
            templateUrl: 'home/home.html',
            controller: 'HomeController as vm'
        })

})