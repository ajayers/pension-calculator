(function() {
  var module = angular.module('benefit_reduction_directive', []);

  module.directive('benefitReduction', function(calcService, $rootScope) {
    return {
      restrict: 'C',
      replace: false,
      templateUrl: 'calc/partial/benefit-reduction.tpl.html',

      // The linking function will add behavior to the template
      link: function(scope, element) {
        scope.ageAtHire = 25;
        scope.ageAtRetire = 55;
        scope.wageAtHire = 20000;
        scope.wageAtRetire = 62374;
        scope.finalSalaryYears = 3;
        scope.COLAAdjustment = 2;
        scope.definedContribution = 33.62;
        scope.wageIncrease = 0.04;
        scope.investReturn = 0.06;
        scope.xValue = 0;

        scope.doStuff = function() {
          console.log('----- yoyo: ', scope.ageAtHire, scope.ageAtRetire, scope.wageAtHire, scope.xValue);
          //scope.xValue = calcService.ComputeXValue(scope.ageAtHire,scope.ageAtRetire,scope.wageAtHire,scope.definedContribution,scope.investReturn,scope.wageIncrease);        };
        };
      }
    };
  });

}());
