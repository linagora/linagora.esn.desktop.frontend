(function() {
  'use strict';

  angular.module('linagora.esn.desktop.frontend')
    .config(configBlock);

  function configBlock($provide, httpConfigurer) {
    $provide.decorator('ngSrcDirective', function($delegate) {
      var directive = $delegate[0];

      directive.compile = function(element, attrs) {
        return function (scope, element, attr) {
          attr.$observe('ngSrc', function(value) {
            if (!value) {
              return;
            }

            if (value.indexOf('/api/') > -1) {
              value = httpConfigurer.getUrl(value);
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
