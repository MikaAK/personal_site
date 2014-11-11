'use strict'

angular.module('personalSite.projects')
  .directive('project', ['_', 'siteConfig', function(_, siteConfig) {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        data: '='
      },
      templateUrl: 'modules/projects/project/project.html',
      link: function(scope, ele) {
        var titleEle = ele.find('h3'),
            hrEle    = ele.find('hr')

        var randomColor = function() {
          return _(['red', 'green', 'blue', 'yellow']).sample()
        }

        var toggleClass = function(className) {
          titleEle.toggleClass(className)
          hrEle.toggleClass(className)
        }
        ele.on('mouseenter', function() {
          this.randomColor = randomColor()
          toggleClass(this.randomColor)
        })

        ele.on('mouseleave', function() {
          toggleClass(this.randomColor)
        })
        scope.siteConfig = siteConfig
      }
    }
  }])
