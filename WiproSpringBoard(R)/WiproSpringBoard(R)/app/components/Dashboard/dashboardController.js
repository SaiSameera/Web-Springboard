angular.module("wiproApp")
    .controller("dashboardController", function ($scope, dashboardService, $location, $state, $window, $rootScope, $timeout) {
        "use strict";
        $scope.byDemandSourceList = [];
        $scope.byDemandClassificationList = [];
        $scope.byDemandStatusList = [];

        $scope.byOppurtunityStatusList = [];
        $scope.byOppurtunityClassificationList = [];
        $scope.byOppurtunityCategoryList = [];

        // Gets the getDemandSourceData
        $scope.getDemandSourceData = function () {
            dashboardService.getDemandSourceData().success(function (data) {
                $scope.byDemandSourceList = data;
            }).error(function (err) {
                return;
            });
        };
        //timer function
        $scope.counter = 1;
        $scope.onTimeout = function () {
            if ($scope.counter < 11) {
                $scope.counter++;
            };
            mytimeout = $timeout($scope.onTimeout, 1000);
        }
        var mytimeout = $timeout($scope.onTimeout, 1000);

        // Gets the getDemandClassificationData
        $scope.getDemandClassificationData = function () {
            dashboardService.getDemandClassificationData().success(function (data) {
                $scope.byDemandClassificationList = data;
            }).error(function (err) {
                return;
            });
        };

        // Gets the getDemandStatusData
        $scope.getDemandStatusData = function () {
            dashboardService.getDemandStatusData().success(function (data) {
                $scope.byDemandStatusList = data;
            }).error(function (err) {
                return;
            });
        };


        // Gets the getOppurtunityStatusData
        $scope.getOppurtunityStatusData = function () {
            dashboardService.getOppurtunityStatusData().success(function (data) {
                $scope.byOppurtunityStatusList = data;
            }).error(function (err) {
                return;
            });
        };

        // Gets the getOppurtunityClassificationData
        $scope.getOppurtunityClassificationData = function () {
            dashboardService.getOppurtunityClassificationData().success(function (data) {
                $scope.byOppurtunityClassificationList = data;
            }).error(function (err) {
                return;
            });
        };

        // Gets the getOppurtunityCategoryData
        $scope.getOppurtunityCategoryData = function () {
            dashboardService.getOppurtunityCategoryData().success(function (data) {
                $scope.byOppurtunityCategoryList = data;
            }).error(function (err) {
                return;
            });
        };
    });