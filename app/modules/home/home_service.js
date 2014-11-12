'use strict'

angular.module('personalSite.home')
  .service('Home', ['$timeout', function($timeout) {
    var self = this
    this.homeAnimationRun = false

    this.findTitleAnimationElements = function() {
      this.nameEle     = angular.element(document.getElementById('title'))
      this.imageEle    = angular.element(document.getElementById('image'))
      this.subtitleEle = angular.element(document.getElementById('subtitle'))
    }

    this.findIconAnimationElements = function() {
      this.emailEle    = angular.element(document.getElementById('email'))
      this.githubEle   = angular.element(document.getElementById('git'))
      this.linkedinEle = angular.element(document.getElementById('linkedin'))
    }

    this.runHomeAnimation = function() {
      this.findTitleAnimationElements()

      $timeout(function() {
        self._nameTitleSlide()
      }, 1500)
      this.homeAnimationRun = true
    }

    this._nameTitleSlide = function() {
      this.nameEle.addClass('active')
      this.imageEle.addClass('active')

      $timeout(function() {
        self._subtitleSlide()
      }, 2000)
    }

    this._subtitleSlide = function() {
      this.subtitleEle.addClass('active')

      $timeout(function() {
        self._emailFadeIn()
      }, 1000)
    }

    this._emailFadeIn = function() {
      this.findIconAnimationElements()
      this.emailEle.addClass('active')

      $timeout(function() {
        self._iconsFadeIn()
      }, 1000)
    }

    this._iconsFadeIn = function() {
      this.githubEle.addClass('active')

      $timeout(function() {
        self.linkedinEle.addClass('active')
      }, 750)
    }
  }])
