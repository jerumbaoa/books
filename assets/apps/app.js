(function () {
  'use strict';

  angular
    .module('core', [
      'ui.router',
      'ui.bootstrap'
    ])
    .constant('TEMPLATE_URL', '/static/apps/templates/')
    .config(csrf)
  ;

  /* CSRF TOKEN
   */
  function csrf($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  };

})();