angular.module('personalSite')
  .constant('siteConfig', {
    home: {
      centerImageUrl: 'https://s3-us-west-2.amazonaws.com/mika-personal/images/misc/personal_image.jpeg'
    },
    backgroundUrl: 'https://s3-us-west-2.amazonaws.com/mika-personal/images/backgrounds/stary_night.jpg',
    projects: [
      {
        title: 'Foodee',
        url: 'https://toronto.food.ee',
        imageUrls: [
          'https://s3-us-west-2.amazonaws.com/mika-personal/images/projects/Foodee.png',
          'https://s3-us-west-2.amazonaws.com/mika-personal/images/projects/Foodee_2.png'
        ],
        languages: ['Javascript', 'Ruby'],
        frameworks: ['Angular', 'Rails'],
        description: 'Foodee is a company that delivers amazing, health-wise ' +
                     'food to larger sized groups than the normal delivery company. ' +
                     'They also have there own squad of drivers and provide ' +
                     'an awesome variety of restaurants (some of which you ' +
                     'can\'t get delivered otherwise).'
      }, {
        title: 'Educ8',
        url: 'https://educ8.io',
        imageUrls: ['https://s3-us-west-2.amazonaws.com/mika-personal/images/projects/Educ8.png'],
        languages: ['Javascript', 'Ruby'],
        frameworks: ['Angular', 'Rails', 'Node'],
        description: 'Educ8 was a final project during Lighthouse Labs. Created ' +
                     'with my two partners Megan and Clarence, Educ8 attempts ' +
                     'to connect people who wish to learn or teach via WebRTC.'
      }, {
        title: 'Cohort Board',
        url: 'http://cohort-board.herokuapp.com/',
        imageUrls: ['https://s3-us-west-2.amazonaws.com/mika-personal/images/projects/Cohortboard.png'],
        languages: ['Ruby'],
        frameworks: ['Rails'],
        description: 'The cohort board was my midway project at Lighthouse Labs. ' +
                     'It was an invite only app, created to enable employers to view ' +
                     ' a students profile that the student themselves could setup.'
      }
    ]
  })
