/**
 * Created by namita on 13/3/15.
 */
(function (ng) {
    var eventApp = ng.module('eventApp');
    eventApp.service("EventService", ["$http", "UrlConfig", function ($http, UrlConfig) {
        this.getFeeds = function (url) {
            return $http.get(url);
        };
        this.getFeedSource = function () {
            return $http.get(UrlConfig.feedSource);
        };
    }]);
})(angular);