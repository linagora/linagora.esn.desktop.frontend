(function() {
  'use strict';

  const {ipcRenderer} = require('electron'); // eslint-disable-line import/no-unresolved

  angular.module('esn.login')
    .factory('esnLoginSuccessService', esnLoginSuccessService);

    function esnLoginSuccessService($log, $q) {
      return function() {
        return $q(function(resolve) {
          $log.debug('Sending login success to main process');
          ipcRenderer.send('op:login:success');
          resolve();
        });
      };
    }
})();
