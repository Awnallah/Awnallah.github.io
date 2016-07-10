

angular.module('portfolio', [])
        .controller('ProjectsList', ['$scope', function($scope) {

        	$scope.projects=[
                         {
                          name:'Running Map',
                          image: 'src/images/map.png',
                          link:'http://awnallah.github.io/MapProject/',
                          githubLink:'https://github.com/Awnallah/MapProject',
                          skills:['OOP-JS', 'Knouckout-JS', 'AJAX', 'Bootstrap']

                        },
                        {
                          name:'Arcade Game',
                          image: 'src/images/game1.png',
                          link:'http://awnallah.github.io/frontend-nanodegree-arcade-game/',
                          githubLink:'https://github.com/Awnallah/frontend-nanodegree-arcade-game',
                          skills:['OOP-JS', 'Bootstrap', 'HTML5-Canvas']
                        },
                        {
                          name:'Website Optimization',
                          image: 'src/images/optimize.png',
                          link:'https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fawnallah.github.io%2Ffrontend-nanodegree-mobile-portfolio%2F&tab=mobile',
                          githubLink:'https://github.com/Awnallah/frontend-nanodegree-mobile-portfolio',
                          skills:['Develpor Tools', 'critical rendering path', '60FPS rendering']
                        },
                        {
                          name:'Online Resume',
                          image: 'src/images/resume.png',
                          link:'http://awnallah.github.io/resume/',
                          githubLink:'https://github.com/Awnallah/resume',
                          skills:['jQuery', 'CSS3', 'Bootstrap']
                        }

                        ];




        	}]);