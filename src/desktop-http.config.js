(function() {
  'use strict';

  angular.module('esn.http').config(configBlock);

  function configBlock(httpConfigurerProvider) {
    httpConfigurerProvider.setBaseUrl(window.OP_BASE_URL || 'http://localhost:8080');
  }
})();
