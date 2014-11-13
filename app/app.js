'use strict'

angular.module('personalSite',
  ['ui.router',
   'ngAnimate',
   'ngCookies',
   'personalSite.ngOnerror',
   'personalSite.home',
   'personalSite.about',
   'personalSite.projects',
   'personalSite.navbar',
   'personalSite.siteControl'
  ])

	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/')

		$stateProvider
			.state('home', {
        url: '/',
        controller: 'homeCtrl',
				templateUrl: 'modules/home/home.html'
			})
      .state('about', {
        url: '/about',
        controller: 'aboutCtrl',
        templateUrl: 'modules/about/about.html'
      })
      .state('projects', {
        url: '/projects',
        controller: 'projectsCtrl',
        templateUrl: 'modules/projects/projects.html'
      })

		// use the HTML5 History API
		$locationProvider.html5Mode(true)
	}])
