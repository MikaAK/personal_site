'use strict'

angular.module('personalSite.resume', ['classy', 'ngPDFViewer'])
  .classy.controller({
    name: 'resumeCtrl',

    inject: ['$scope', '$timeout', 'PDFViewerService'],

    init: function() {
      this.$.resumeLoaded = false
      this._loaderIcon()
    },

    _loaderIcon: function() {
      var self = this

      // HACK Because isn't working properly
      this.$timeout(function() {
        self.$.resumeLoaded = true
      }, 2500)
    }
  })
