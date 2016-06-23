

angular.module('portfolio', [])
        .controller('ProjectsList', ['$scope', function($scope) {

        	$scope.projects=[
                         {
                          name:'Running Map',
                          image: 'src/images/map.png',
                          link:'http://awnallah.github.io/MapProject/',
                          githubLink:'https://github.com/Awnallah/MapProject'

                        },
                        {
                          name:'Arcade Game',
                          image: 'src/images/game1.png',
                          link:'http://awnallah.github.io/frontend-nanodegree-arcade-game/',
                          githubLink:'https://github.com/Awnallah/frontend-nanodegree-arcade-game'
                        },
                        {
                          name:'Website Optimization',
                          image: 'src/images/optimize.png',
                          link:'http://awnallah.github.io/frontend-nanodegree-mobile-portfolio/',
                          githubLink:'https://github.com/Awnallah/frontend-nanodegree-mobile-portfolio'
                        },
                        {
                          name:'Online Resume',
                          image: 'src/images/resume.png',
                          link:'http://awnallah.github.io/resume/',
                          githubLink:'https://github.com/Awnallah/resume'
                        }

                        ];




        	}]);