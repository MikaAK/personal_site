'use strict'

angular.module('personalSite.keyWord', ['vendor.lodash'])
  .filter('keyWord', ['_', function(_) {
    return function(input, active) {
      if (!input || !active) return input

      var words = input.split(' '),
          keyword = '';

      _(words).each(function(word) {
        if (keyword.length < word.length)
          keyword = word
      })

      return keyword
    }
  }]);
