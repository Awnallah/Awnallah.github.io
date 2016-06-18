

angular.module('portfolio', [])
        .controller('ProjectsList', ['$scope', function($scope) {

        	$scope.projects=[
                         {
                          name:'Running Map',
                          image: 'src/images/map.png',
                          link:'http://awnallah.github.io/MapProject/',
                          githubLink:'https://github.com/Awnallah/MapProject',
                          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comment: ''
                        },
                        {
                          name:'Arcade Game',
                          image: 'src/images/game1.png',
                          link:'http://awnallah.github.io/frontend-nanodegree-arcade-game/',
                          githubLink:'https://github.com/Awnallah/frontend-nanodegree-arcade-game',
                          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comment: ''
                        },
                        {
                          name:'Website Optimization',
                          image: 'src/images/optimize.png',
                          link:'http://awnallah.github.io/frontend-nanodegree-mobile-portfolio/',
                          githubLink:'https://github.com/Awnallah/frontend-nanodegree-mobile-portfolio',
                          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comment: ''
                        },
                        {
                          name:'Running Map',
                          image: 'src/images/map.png',
                          category: 'mains',
                          link:'http://awnallah.github.io/MapProject/',
                          githubLink:'https://github.com/Awnallah/MapProject',
                          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comment: ''
                        }

                        ];




        	}])