(function() {
  'use strict';

  angular.module('esn.http').config(configBlock);
  
  function configBlock(httpConfigurerProvider) {
    httpConfigurerProvider.setBaseUrl('http://localhost:8080');
  }
})();
