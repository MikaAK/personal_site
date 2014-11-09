'use strict'

angular.module('personalSite.photoBall', [])
  .directive('photoBall', [function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        size: '@',
        src: '='
      },
      templateUrl: 'modules/photo_ball/photo_ball.html',
      compile: function(ele, attr) {
        var size = attr.size + 'px',
            img  = ele.find('img')

        ele.css('height', size)
        ele.css('width', size)

        if (img) {
          if ('faded' in attr)
            img.addClass('faded-' + attr.faded)

          if ('gray' in attr)
            img.addClass('gray-' + attr.gray)
        }
      }
    }
  }])
