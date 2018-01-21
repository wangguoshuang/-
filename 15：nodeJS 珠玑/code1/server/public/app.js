(function (angular) {
    // "use strict";

    // start your ride
   // 1.创建一个主模块
   var app = angular.module('moviecat',['ngRoute',
    //'moviecat.details',// 先引入就会优先匹配相应的路由规则
    'moviecat.in_theaters',
    ]);

    app.config(function($routeProvider){
        $routeProvider.when('/in_theaters',{
            templateUrl:'in_theaters/view.html'
            ,
            controller:'movie_listController'
        }).otherwise({
            templateUrl:'home_page/view.html',

        })
    });

})(angular);