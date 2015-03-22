/**
 * Created by Namita Malik on 13/3/15.
 */
(function (ng) {
    var eventApp = ng.module("eventApp");
    eventApp.factory("UrlConfig", function () {
        return {
            feedSource: "./eventDetails/feedSource.json"
        }
    });
})(angular);
