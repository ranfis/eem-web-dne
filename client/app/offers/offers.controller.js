'use strict';

angular.module('eemApp')
  .controller('OffersCtrl', function ($scope, $http, socket) {
    $scope.offers = [];

    $scope.newOffer = {
      title: "",
      details:"",
      active:true,
      image:"",
      mall:{},
      expirationDate: "",
      type:null
    };
    $scope.eOffer = {
      title: "Title",
      details:"Details",
      active:true,
      image:"aaa.jpg",
      mall:{_id:"5516d716e4b06f03910e913a",name:"Agora"},
      expirationDate: "2/2/2",
      type:2
    };
    $scope.types = [];
    $scope.categories = [];
    $scope.malls = [];

    $http.get('/api/offers').success(function(offers) {
      $scope.offers = offers;

      console.log(offers);
      socket.syncUpdates('offers', $scope.offers);
    });
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
    $scope.removeOffer = function(id) {
      var sure = confirm("Yo sure?"+id);
      if(sure){
        $http.delete('/api/offers/'+id);
        socket.syncUpdates('offers', $scope.offers);
      }

    };
  });
