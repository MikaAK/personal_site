'use strict'

angular.module('personalSite.home')
  .directive('homeNav', [function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        menuItems: '='
      },
      templateUrl: 'modules/home/home_nav/home_nav.html'
    }
  }])
