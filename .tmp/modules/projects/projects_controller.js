'use strict'

angular.module('personalSite.projects', ['classy'])
  .classy.controller({
    name: 'projectsCtrl',

    inject: ['$scope', 'siteConfig'],

    init: function() {
      this.$.config = this.siteConfig
      this.$.imageSelection = 0
    },

    nextImage: function() {
      this.$.imageSelection += 1
    },

    previousImage: function() {
      this.$.imageSelection -= 1
    }
  })
