'use strict'

angular.module('personalSite.resume', ['classy', 'ngPDFViewer'])
  .classy.controller({
    name: 'resumeCtrl',

    inject: {
      $scope: '$',
      PDFViewerService: 'pdf',
      siteConfig: 'config'
    },

    init: function() {
      this.$.viewer = pdf.Instance('viewer')
    }
  })
