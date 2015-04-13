'use strict';

angular.module('eemApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('offers', {
        url: '/ofertas',
        templateUrl: 'app/offers/newOffer.html',
        controller: 'OffersCtrl'
      })
      .state('offer', {
        url: '/ofertas/agregar',
        templateUrl: 'app/offers/newOffer.html',
        controller: 'OffersCtrl'
      });
  });
