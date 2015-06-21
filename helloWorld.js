var app = angular.module('app', []);

app.controller('contactController', function($scope){
  $scope.addressBook = [];


  $scope.add = function(){
    var user = {};
    user.name = $scope.name;
    user.email = $scope.email;
    user.phone = $scope.phone;

    $scope.addressBook.push(user);
    $scope.name = '';
    $scope.email = '';
    $scope.phone = '';
  }

  $scope.edit = function(user){
    $scope.name = user.name;
    $scope.email = user.email;
    $scope.phone = user.phone;
    $scope.delete(user);
  }

  $scope.delete = function(user){
    $scope.addressBook.splice($scope.addressBook.indexOf(user), 1);
  }
});

