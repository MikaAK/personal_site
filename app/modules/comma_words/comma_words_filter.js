'use strict'

angular.module('personalSite.commaWords', ['vendor.lodash'])
  .filter('commaWords', ['_', function(_) {
    return function(input) {
      if (_(input).any())
        return input.join(', ')
    }
  }]);
