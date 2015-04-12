'use strict';

angular.module('eemApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth) {

    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
