(function() {
  'use strict';

  angular.module('esn.http')
    .config(configBlock);

  function configBlock($provide, httpConfigurerProvider) {
    $provide.decorator('ngSrcDirective', function($delegate) {
      var directive = $delegate[0];

      directive.compile = function() {
        return function(scope, element, attr) {
          attr.$observe('ngSrc', function(value) {
            if (!value) {
              return;
            }

            if (value.indexOf('/api/') > -1) {
              value = httpConfigurerProvider.getUrl(value);
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
