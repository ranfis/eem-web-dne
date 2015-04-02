'use strict';

angular.module('eemApp')
  .controller('OffersCtrl', function ($scope, $http, socket) {
    $scope.types = [];
    $scope.newOffer = {};

    $http.get('/api/types').success(function(types) {
      $scope.types = types;
      socket.syncUpdates('thing', $scope.types);
    });

    $scope.addOffer = function() {
      var expirationDate = $("#txtExpirationDate").val();//TODO: This is a bug. Fix ASAP. PD: Blame bootstrap-datetimepicker
      var realDate = new Date(expirationDate);
      $scope.newOffer.expirationDate = realDate;
      $http.post('/api/offers', $scope.newOffer);
      $scope.newOffer = {};
    };

  });
