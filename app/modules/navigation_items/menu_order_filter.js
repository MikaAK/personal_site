'use strict'

angular.module('personalSite.navigationItems')
  .filter('menuOrder', ['_', function(_) {
    return function(input, ordered) {
      if (!input || !ordered) return input

      var findHome = function() {
        return inputWrapped.find(function(im) {
          return im.state == 'home'
        })
      }

      var findProject = function() {
        return inputWrapped.find(function(im) {
          return im.state == 'projects'
        })
      }

      var findAbout = function() {
        return inputWrapped.find(function(im) {
          return im.state == 'about'
        })
      }

      var findContact = function() {
        return inputWrapped.find(function(im) {
          return im.state == 'contact'
        })
      }

      var finalOrder   = [],
          inputWrapped = _(input),
          homeItem     = findHome(),
          projectItem  = findProject(),
          contactItem  = findContact(),
          aboutItem    = findAbout()

      if (homeItem) {
        finalOrder.push(homeItem)

        if (projectItem)
          finalOrder.push(projectItem)
        if (contactItem)
          finalOrder.push(contactItem)
        if (aboutItem)
          finalOrder.push(aboutItem)
      } else {
        if (contactItem || aboutItem)
          finalOrder.push(contactItem || aboutItem)
        if (projectItem)
          finalOrder.push(projectItem)
        if (aboutItem || contactItem)
          finalOrder.push(aboutItem || contactItem)
      }

      return finalOrder
    }
  }])
