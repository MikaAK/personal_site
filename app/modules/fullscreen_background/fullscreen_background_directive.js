'use strict'

angular.module('personalSite.fullscreenBackground', [])
  .directive('fullscreenBackground', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, ele, attr) {
        var jsEle = ele[0],
            child = jsEle.children.item()

        if (child) child.style.zIndex = 99
        jsEle.style.backgroundSize = 'cover'
        jsEle.style.backgroundImage = 'url(' + attr.fullscreenBackground + ')'
        jsEle.style.backgroundRepeat = 'no-repeat'
        jsEle.style.zIndex = -99
        jsEle.style.size = '100%'
      }
    }
  }])
