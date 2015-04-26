'use strict';

angular.module('checklist')
.controller('Main',['$scope', function($scope){

  $scope.portfolio = [
    {
      title: 'battleship',
      image: 'http://i.imgur.com/JAKzsR9.png',
      link: 'http://battleship.evangatchell.me',
      description: 'Using jQuery and Firebase to create a two-player Star Wars-themed Battleship game. Writing the rules for the game while storing position data was a lot of fun.'
    },
    {
      title: 'memory',
      image: 'http://i.imgur.com/2nmfKM5.png',
      link: 'http://memory.evangatchell.me',
      description: 'jQuery and CSS Project using classes to compare selections.This fun little game was written with a couple of other guys one night.'
    },
    {
      title: 'checkers',
      image: 'http://i.imgur.com/E75rbM8.png',
      link: 'checkersgame.evangatchell.me',
      description: 'Tricky game involving using Jade and jQuery to re-create classic Checkers. Dynamically creating a board and establishing the rules was a lot of fun.'
    },
    {
      title: 'checkers',
      image: 'http://scitechdaily.com/images/boston-dynamics-darpa-cheetah-concept.jpg',
      link: 'http:checkers.com',
      description: 'ighgkhhjkhkjhkh'
    },
    {
      title: 'watson',
      image: 'http://cdn.geekwire.com/wp-content/uploads/IBM-Watson.jpg',
      link: 'http://google.com',
      description: 'Triand establishing the rules was a lot of fun.'
    },
    {
      title: 'checkers',
      image: 'http://sitmeanssit.com/dog-training-mu/houston-dog-training/files/2013/03/puppy.jpeg',
      link: 'http://google.com',
      description: 'Teckers. Dynamically creating aot of fun.'
    }
  ];
}]);
