'use strict';

angular.module('checklist')
.controller('TasksCtrl', ['$scope', 'Task', '$window', '$rootScope', function($scope, Task, $window, $rootScope){
  // return user tasks
  $scope.afTasks = Task.init();

  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
    }
    else{
      $rootScope.activeUser = null;
    }
  });

  $scope.tags = [
      { text: 'Angular' },
      { text: 'jQuery' },
      { text: 'Firebase' },
      { text: 'Node' }
  ];

  // $scope.sort = function(sortString){
  //   var modifier = ($scope.taskOrder === sortString) ? '-' : '';
  //   $scope.taskOrder = modifier + sortString;
  // };

  $scope.addTask = function(task){

    task.createdAt = $window.Firebase.ServerValue.TIMESTAMP;

    Task.add(task)
    .then(function(data){
      console.log(data);
      // reset task in scope once added
      $scope.task = {};
    });
  };

  $scope.deleteTask = function(task){
    Task.destroy(task);
  };

  $scope.editTask = function(task){
    $scope.task = task;
  };

  $scope.saveEdit = function(task){
    Task.save(task)
    .then(function(){
      console.log('promise');
    })
    .catch(function(err){
      console.log(err);
    });
    $scope.task = {};
  };

  $scope.toggleComplete = function(task){
    task.dueDate = new Date(task.dueDate);
    Task.save(task);
  };

}]);
