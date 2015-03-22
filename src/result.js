/**
 * Created by namita on 13/3/15.
 */
(function (ng) {
    var eventApp = ng.module('eventApp', []);
    eventApp.controller('EventCtrl', ["$scope", "EventService", function ($scope, EventService) {
        $scope.news=[];
        function getFeeds(url,index) {
            EventService.getFeeds(url)
                .success(function (response) {
                    $scope.news[index] = response;

                })
                .error(function (status) {
                    console.log(status);
                });
        }
        function getFeedSource() {
            EventService.getFeedSource()
                .success(function (response) {
                    $scope.feedSources = response;
                    angular.forEach($scope.feedSources,function(value,index){
                        console.log(value.title);
                        getFeeds(value.url,index)
                    });




                })
                .error(function (status) {
                    console.log(status);
                });

        }


        getFeedSource();
    }]);
})(angular);