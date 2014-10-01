angular.module('Instagram')
  .controller('SignupCtrl', function($scope, $location, $auth) {
    $scope.signup = function() {
      var user = {
        email: $scope.email,
        password: $scope.password
      };

      $auth.signup(user)
        .then(function(response) {
          $location.path('/connect');
        })
        .catch(function(response) {
          console.log(response.data);
        });
    };
  });