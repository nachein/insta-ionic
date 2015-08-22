angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ImageListCtrl', function($scope) {
  $scope.feed = new Instafeed({
      get: 'tagged',
      tagName: 'nofilter',
      clientId: 'YOUR_CLIENT_ID',
      template: '<ion-item><div class="list card"><div class="item item-avatar"><img src="{{model.user.profile_picture}}"><h2>{{model.user.full_name}}</h2><p>{{model.user.username}}</p></div><div class="item item-image"><img src={{model.images.standard_resolution.url}} /></div></div></ion-item>',
      target: 'nacho'
  });
  //debugger;
  //window.feed = $scope.feed;
  $scope.images = $scope.feed.run();
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
