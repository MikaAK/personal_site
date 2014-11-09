'use strict'

angular.module('personalSite.navbar', ['personalSite.navigationItems'])
  .directive('navbar', [function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        shown: '@',
        menuItems: '='
      },
      templateUrl: "modules/navbar/navbar.html",
      link: function(scope, ele, attr) {
        attr.$observe('shown', function(val) {
          scope.shown = scope.$eval(val)
        })
      }
    }
  }])
