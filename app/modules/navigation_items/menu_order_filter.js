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

      var findResume = function() {
        return inputWrapped.find(function(im) {
          return im.state == 'resume'
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

      var finalOrder   = [],
          inputWrapped = _(input),
          homeItem     = findHome(),
          projectItem  = findProject(),
          resumeItem   = findResume(),
          aboutItem    = findAbout()

      if (homeItem)
        finalOrder.push(homeItem)
      if (projectItem)
        finalOrder.push(projectItem)
      if (resumeItem)
        finalOrder.push(resumeItem)
      if (aboutItem)
        finalOrder.push(aboutItem)

      return finalOrder
    }
  }])
