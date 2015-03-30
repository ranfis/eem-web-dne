'use strict';

angular.module('eemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('offers', {
        url: '/ofertas',
        templateUrl: 'app/offers/offers.html',
        controller: 'OffersCtrl'
      });
  });
