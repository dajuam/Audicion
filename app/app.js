/**
 * Angular App Definition
 * @author: jmartinez
 */

var app = angular.module('myApp', ['ui.bootstrap']);

// Defining services for the entire app
app.factory('Services', function() {
    return {
        tableName : 'audit_records'
    };
});

// Controller for messages in the app
function MessagesController($scope, Services) {
    $scope.tableName = Services.tableName;
}

app.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; // Parse to int
            return input.slice(start);
        }
        return [];
    }
});

app.controller('customersCrtl', function ($scope, $http, $timeout) {
    $http.get('ajax/getCustomers.php').success(function(data){
        $scope.list = data;
        $scope.currentPage = 1; // Current page
        $scope.entryLimit = 10; // Max no of items to display in a page
        $scope.filteredItems = $scope.list.length; // Initially for no filter  
        $scope.totalItems = $scope.list.length;
    });
    $scope.setPage = function(pageNo) {
        $scope.currentPage = pageNo;
    };
    $scope.filter = function() {
        $timeout(function() { 
            $scope.filteredItems = $scope.filtered.length;
        }, 10);
    };
    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };
});