'use strict';

angular.module('eemApp')
  .controller('OffersCtrl', function ($scope, $http, socket) {
    $scope.newOffer = {
      title: "Title",
      details:"Details",
      active:true,
      image:"aaa.jpg",
      mall:{_id:"5516d716e4b06f03910e913a",name:"Agora"},
      expirationDate: moment("2015-04-30T05:01:00.000Z").locale("es").format("MMMM D YYYY, h:mm:ss A"),
      type:2
    };
    $scope.types = [];
    $scope.categories = [];
    $scope.malls = [];

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
      //var active = $("#chkActive").data().bootstrapSwitch.state();
      $scope.newOffer.expirationDate = realDate;
      console.log($scope.newOffer);
      $http.post('/api/offers', $scope.newOffer);
      $scope.newOffer = {};
    };
  });
