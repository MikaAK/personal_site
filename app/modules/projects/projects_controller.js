'use strict'

angular.module('personalSite.projects')
  .classy.controller({
    name: 'projectsCtrl',

    inject: ['$scope', 'Project'],

    init: function() {
      this.$.project = this.Project
      this.$.imageSelection = 0
    },

    nextImage: function() {
      this.$.imageSelection += 1
    },

    previousImage: function() {
      this.$.imageSelection -= 1
    }
  })
