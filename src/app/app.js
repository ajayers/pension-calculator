angular.module('ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.defined-contribution',
  'ngBoilerplate.defined-benefit',
  'ngBoilerplate.benefit-reduction',
  'ui.router',
  'ui.utils.masks',
  'calc'
]).config(function myAppConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  console.log('---- AppCtrl.config');
}).run(function run() {
  console.log('---- AppCtrl.run');
}).controller('AppCtrl', function AppCtrl($scope, $location) {
  console.log('---- AppCtrl');
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if (angular.isDefined(toState.data.pageTitle)) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate';
    }
  });
});
