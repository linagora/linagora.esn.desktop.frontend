(function() {
  'use strict';

  angular.module('linagora.esn.desktop.frontend')
    .config(configBlock);

  function configBlock($provide, OP_REST_BASE_URL) {
    $provide.decorator('ngSrcDirective', function($delegate) {
      var directive = $delegate[0];

      directive.compile = function(element, attrs) {
        return function (scope, element, attr) {
          attr.$observe('ngSrc', function(value) {
            if (!value) {
              return;
            }

            if (value.indexOf('/api/') > -1) {
              value = OP_REST_BASE_URL + value;
            }

            attr.$set('src', value);
          });
        };
      };

      delete directive.link;

      return $delegate;
    });
  }
})();
