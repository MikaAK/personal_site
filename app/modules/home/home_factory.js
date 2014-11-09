'use strict'

angular.module('personalSite.home', ['classy', 'personalSite.photoBall', 'personalSite.fullscreenBackground', 'personalSite.wordWrap', 'personalSite.wordWrap'])
  .factory('Home', ['siteConfig', function(siteConfig) {
    return {
      centerImageUrl: siteConfig.home.centerImageUrl,
      menuItems: [
        { title: 'Contact Me',    state: 'contact' },
        { title: 'Past Projects', state: 'projects' },
        { title: 'About Me',      state: 'about' }
      ]
    }
  }])
