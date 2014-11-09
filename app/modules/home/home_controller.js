'use strict'

angular.module('personalSite.home')
  .classy.controller({
    name: 'homeCtrl',

    inject: ['$scope', 'Home'],

    init: function() {
      this.$.home = this.Home
    }
  })
