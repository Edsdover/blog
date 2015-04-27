'use strict';

angular.module('checklist')
.controller('BlogCtrl', ['$scope', 'User', '$state', '$rootScope', 'Task', function($scope, User, $state, $rootScope, Task){
  console.log($rootScope.blogPostId);
  var blogObjects = Task.getBlog();
  $scope.post = blogObjects[$rootScope.blogIndex];
}]);
