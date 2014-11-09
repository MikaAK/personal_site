'use strict'

angular.module('personalSite.navigationItems', ['vendor.lodash'])
  .directive('navigationItems', ['_', '$state', '$rootScope', function(_, $state, $rootScope) {
    return {
      restrict: 'E',
      scope: {
        menuItems: '='
      },
      templateUrl: "modules/navigation_items/navigation_items.html",
      link: function(scope, ele, attrs) {
        if ('singleWords' in attrs) {
          scope.menuItems = _(scope.menuItems).each(function(item) {
            item.title = item.title.split(' ')[0]
          }).value()
        }

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

          activeItem.active = true
        }
        changeActiveItem('', $state.$current)
        $rootScope.$on('$stateChangeStart', changeActiveItem)
      }
    }
  }])
