angular.module('personalSite')
  .constant('siteConfig', {
    personalImageUrl: 'https://s3-us-west-2.amazonaws.com/mikakalathil.ca/images/misc/personal_image.jpeg',
    backgroundUrl: 'https://s3-us-west-2.amazonaws.com/mikakalathil.ca/images/backgrounds/stary_night.jpg',
    resumeUrl: 'https://s3-us-west-2.amazonaws.com/mikakalathil.ca/assets/ResumeMika.pdf',
    github: {
      url: 'http://github.com/MikaAK',
      logoLow: 'https://s3-us-west-2.amazonaws.com/mikakalathil.ca/images/misc/github-low.png',
      logoHigh: 'https://s3-us-west-2.amazonaws.com/mikakalathil.ca/images/misc/github-high.svg'
    },
    linkedin: {
      url: 'http://linkedin.com/in/mikakalathil',
      logoLow: 'https://s3-us-west-2.amazonaws.com/mikakalathil.ca/images/misc/linkedin-logo-low.png',
      logoHigh: 'https://s3-us-west-2.amazonaws.com/mikakalathil.ca/images/misc/linkedin-logo-high.svg'
    },
    email: 'mikakalathil@gmail.com',
    menuItems: [
      { title: 'Home',          state: 'home',     active: false },
      { title: 'Past Projects', state: 'projects', active: false },
      { title: 'Resume',        state: 'resume',   active: false },
      { title: 'About Me',      state: 'about',    active: false }
    ],
    projects: [
      {
        title: 'Foodee',
        url: 'https://toronto.food.ee',
        imageUrls: [
          'https://s3-us-west-2.amazonaws.com/mikakalathil.ca/images/projects/Foodee.png',
          'https://s3-us-west-2.amazonaws.com/mikakalathil.ca/images/projects/Foodee_2.png'
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
        url: 'https://www.educ8.io',
        githubUrl: 'https://github.com/Educ8-2014',
        imageUrls: ['https://s3-us-west-2.amazonaws.com/mikakalathil.ca/images/projects/Educ8.png'],
        languages: ['Javascript', 'Ruby'],
        frameworks: ['Angular', 'Rails', 'Node'],
        description: 'Educ8 was a final project during Lighthouse Labs. Created ' +
                     'with my two partners Megan and Clarence, Educ8 attempts ' +
                     'to connect people who wish to learn or teach via WebRTC.'
      }, {
        title: 'Cohort Board',
        url: 'http://cohort-board.herokuapp.com/',
        githubUrl: 'https://github.com/MikaAK/Cohorts-Board',
        imageUrls: ['https://s3-us-west-2.amazonaws.com/mikakalathil.ca/images/projects/Cohortboard.png'],
        languages: ['Ruby'],
        frameworks: ['Rails'],
        description: 'The Cohort Board was my a project created during Lighthouse Labs. ' +
                     'It was an invite only app, created to enable employers to view ' +
                     'a students profile that the student themselves could setup.'
      }, {
        title: 'Generator-Mika',
        url: 'https://www.npmjs.org/package/generator-mika',
        githubUrl: 'https://github.com/MikaAK/generator-mika',
        imageUrls: ['https://s3-us-west-2.amazonaws.com/mikakalathil.ca/images/projects/Generator-mika.png'],
        languages: ['Javascript'],
        frameworks: ['Yeoman', 'Angular'],
        description: 'Generator-mika was created using Yeoman in attempt to bring ' +
                     'a higher level of customization while generating angular apps. ' +
                     'This generator can optionally can include bootstrap, angular-classy,' +
                     'neat and bourbon plus much more!'

      }
    ]
  })
