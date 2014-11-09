'use strict'

angular.module('personalSite.siteControl', ['classy', 'personalSite.home'])
  .classy.controller({
    name: 'siteControlCtrl',
    inject: ['$scope', '$rootScope', 'siteConfig', 'Home'],

    init: function() {
      var self = this

      this.$.home = this.Home
      this.$.backgroundUrl = this.siteConfig.backgroundUrl
      this.$rootScope.$on('$stateChangeStart', function(event, toState, toStateParams) {
        var stateName = toState.name

        self.$rootScope.pageName = stateName + '-body'
        self._toggleNavBar(stateName)
      })
    },

    _toggleNavBar: function(name) {
      var self        = this,
          nameCommand = {
        'home': function () {
          self.$.showNavbar = false
        },
        default: function() {
          self.$.showNavbar = true
        }
      }

      if (typeof nameCommand[name] != 'function')
        return nameCommand.default()

      nameCommand[name]()
    }
  })
