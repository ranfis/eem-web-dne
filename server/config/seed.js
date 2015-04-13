/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Category = require('../api/category/category.model');

/*User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});*/

Category.create({"_id":"552ab909e4b0d849d90d77bf","id":1,"description":"Electronicos"},{"_id":"552ab918e4b0d849d90d77c0","id":2,"description":"Postres"},{"_id":"552ab921e4b0d849d90d77c1","id":3,"description":"Hogar"},{"_id":"552ab936e4b0d849d90d77c3","id":4,"description":"Caballeros"},{"_id":"552ab93ee4b0d849d90d77c4","id":5,"description":"Damas"},{"_id":"552ab945e4b0d849d90d77c5","id":6,"description":"NiÃ±os"},{"_id":"552ab94ce4b0d849d90d77c6","id":7,"description":"Zapatos"},{"_id":"552ab952e4b0d849d90d77c7","id":8,"description":"Viajes"},{"_id":"552ab959e4b0d849d90d77c8","id":9,"description":"Entretenimiento"},{"_id":"552ab960e4b0d849d90d77c9","id":10,"description":"Opticas"},{"_id":"552ab968e4b0d849d90d77ca","id":11,"description":"Relojerias"},{"_id":"552ab971e4b0d849d90d77cc","id":12,"description":"Deportivo"},{"_id":"552ab97be4b0d849d90d77cd","id":13,"description":"Heladeria"},{"_id":"552ab989e4b0d849d90d77ce","id":14,"description":"Joyeria"},{"_id":"552ab9a0e4b0d849d90d77cf","id":15,"description":"Cosmeticos"},{"_id":"552ab9a4e4b0d849d90d77d0","id":16,"description":"Restaurants"},{"_id":"552ab9aae4b0d849d90d77d3","id":17,"description":"Belleza"},{"_id":"552ab9b2e4b0d849d90d77d4","id":18,"description":"Servicios"},{"_id":"552ab9b7e4b0d849d90d77d6","id":19,"description":"Supermercado"},{"_id":"552ab9bae4b0d849d90d77d7","id":20,"description":"Farmacias"},function() {
  console.log('finished populating categories');
});



