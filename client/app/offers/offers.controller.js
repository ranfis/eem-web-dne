'use strict';

angular.module('eemApp')
  .controller('OffersCtrl', function ($scope, $http, socket) {
    $scope.types = [];
    $scope.categories = [];
    $scope.malls = [];
    $scope.newOffer = {};

    $http.get('/api/types').success(function(types) {
      $scope.types = types;
      socket.syncUpdates('type', $scope.types);
    });
    $http.get('/api/malls').success(function(malls) {
      $scope.malls = malls;
      socket.syncUpdates('mall', $scope.malls);
    });
    $http.get('/api/categories').success(function(categories) {
      $scope.categories = categories;
      socket.syncUpdates('category', $scope.categories);
    });

    $scope.addOffer = function() {
      var expirationDate = $("#txtExpirationDate").val();//TODO: This is a bug. Fix ASAP. PD: Blame bootstrap-datetimepicker
      var realDate = new Date(expirationDate);
      $scope.newOffer.expirationDate = realDate;
      $http.post('/api/offers', $scope.newOffer);
      $scope.newOffer = {};
    };

  });
