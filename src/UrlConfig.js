/**
 * Created by Namita Malik on 13/3/15.
 */
(function (ng) {
    var eventApp = ng.module("eventApp");
    eventApp.factory("UrlConfig", function () {
        return {
            news: "/myBlogs/Events/eventDetails/football.json",
            pastEvents: "/myBlogs/Events/eventDetails/cricket.json",
            upcomingEvents: "/myBlogs/Events/eventDetails/tennis.json",
            feedSource: "/myBlogs/Events/eventDetails/feedSource.json"
        }
    });
})(angular);