(function() {
  'use strict';

  const {ipcRenderer} = require('electron'); // eslint-disable-line import/no-unresolved

  angular.module('esn.login')
    .factory('loginSuccessService', loginSuccessService);

    function loginSuccessService($log) {
      return function() {
        $log.debug('Sending login success to main process');
        ipcRenderer.send('op:login:success');
      };
    }
})();
