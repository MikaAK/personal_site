'use strict'

angular.module('personalSite.ngOnerror', [])
  .directive('ngOnerror', [function() {
    return {
      restrict: 'A',
      link: function(scope, ele, attrs) {
        ele.on('error', function() {
          ele.attr('src', attrs.ngOnerror)
        })
      }
    }
  }])
