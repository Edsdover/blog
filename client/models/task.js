'use strict';

angular.module('checklist')
.factory('Task', ['$rootScope', '$firebaseArray', function($rootScope, $firebaseArray){

  console.log('entering factory');

  var fbTasks;
  var afTasks;

  function init(){
    fbTasks = $rootScope.fbRoot.child('users/simplelogin:2/tasks');
    afTasks = $firebaseArray(fbTasks);
    return afTasks;
  }

  function add(task){
    return afTasks.$add(task);
  }

  function destroy(task){
    console.log('delete function in task factory')
    return afTasks.$remove(task);
  }

  function save(task){
    console.log(afTasks, 'af tasks');
    return afTasks.$save(task);
  }

  return {add: add, init: init, destroy: destroy, save: save};

}]);
