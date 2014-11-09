'use strict'

angular.module('personalSite.projects')
  .directive('project', [function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        data: '='
      },
      templateUrl: "modules/projects/project/project.html"
    }
  }])
