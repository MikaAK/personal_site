'use strict'

angular.module('personalSite.projects', ['classy', 'package.commaWords'])
  .factory('Project', ['siteConfig', function(siteConfig) {
    return {
      projects: siteConfig.projects
    }
  }])
