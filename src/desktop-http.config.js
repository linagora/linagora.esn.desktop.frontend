(function() {
  'use strict';

  angular.module('esn.http').config(configBlock);
  
  function configBlock(httpConfigurerProvider) {
    console.log('POUET')
    httpConfigurerProvider.setBaseUrl('http://localhost:8080');
  }
})();
