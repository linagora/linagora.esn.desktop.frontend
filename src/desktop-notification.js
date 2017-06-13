(function(){
  'use strict';

var notifier = require('node-notifier');

angular.module('esn.notification', ['angularMoment', 'esn.escape-html', 'esn.i18n'])

  .factory('notifyService', function($window, escapeHtmlUtils, esnI18nService) {
    return function(options, settings) {
      if (options) {
        options.message = options.message ? esnI18nService.translate(options.message).toString() : options.message;
        options.title = options.title ? esnI18nService.translate(options.title).toString() : options.title;
      }

      return notifier.notify({
        title: options.title,
        message: options.message,
        type: settings.type,
        time: settings.delay
      });
    };
  })

  .factory('notificationFactory', function(notifyService) {
    function notify(type, title, text, delay) {
      var animationDelay = 300;

      return notifyService({
        title: title,
        message: text
      }, {
        type: type,
        delay: delay - animationDelay
      });
    }

    function weakNotification(type, title, text) {
      return notify(type, title, text, 3000);
    }

    function strongNotification(type, title, text) {
      return notify(type, title, text, 0);
    }

    function weakSuccess(title, text) {
      return weakNotification('success', title, text);
    }

    function weakInfo(title, text) {
      return weakNotification('info', title, text);
    }

    function weakError(title, text) {
      return weakNotification('danger', title, text);
    }

    function strongInfo(title, text) {
      return strongNotification('info', title, text);
    }

    function strongError(title, text) {
      return strongNotification('danger', title, text);
    }

    return {
      weakInfo: weakInfo,
      weakError: weakError,
      weakSuccess: weakSuccess,
      strongInfo: strongInfo,
      strongError: strongError,
      notify: notify
    };

  });
})();
