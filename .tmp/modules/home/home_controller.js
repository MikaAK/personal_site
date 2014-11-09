'use strict'

angular.module('personalSite.home', ['classy', 'personalSite.navigationItems', 'personalSite.photoBall', 'personalSite.fullscreenBackground', 'personalSite.wordWrap', 'personalSite.commaWords'])
  .classy.controller({
    name: 'homeCtrl',

    inject: ['$scope', 'siteConfig'],

    init: function() {
      this.$.config = this.siteConfig
    }
  })
