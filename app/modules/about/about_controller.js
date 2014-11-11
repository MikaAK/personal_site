'use strict'

angular.module('personalSite.about', ['classy', 'personalSite.photoBall'])
  .classy.controller({
    name: 'aboutCtrl',
    inject: ['$scope', 'siteConfig'],

    init: function() {
      this.$.config = this.siteConfig
    }
  })
