'use strict'

angular.module('personalSite.navigationItems', ['vendor.lodash', 'personalSite.keyWord'])
  .directive('navigationItems', ['_', '$state', '$rootScope', function(_, $state, $rootScope) {
    return {
      restrict: 'E',
      scope: {
        menuItems: '='
      },
      templateUrl: "modules/navigation_items/navigation_items.html",
      link: function(scope, ele, attrs) {
        if ('keyWord' in attrs)
          scope.keyWord = true
        if ('ordered' in attrs)
          scope.ordered = true

        var getMenuItem = function(name) {
          return  _(scope.menuItems).find(function(page) {
            return page.state == name
          })
        }

        var changeActiveItem = function(event, toState, toStateParams, fromState) {
          var activeItem = getMenuItem(toState.name),
              oldItem    = getMenuItem((fromState && fromState.name))

          if (oldItem && oldItem.active)
            oldItem.active = false
          if (activeItem)
            activeItem.active = true
        }

        changeActiveItem('', $state.$current) // Used for initial load *possible bug*
        $rootScope.$on('$stateChangeStart', changeActiveItem)
      }
    }
  }])
