app.controller('homeController', ["$scope", "$http", "$stateParams", function($scope, $http, $stateParams) {
  $scope.view = {}
  $scope.redirectToProjects = function() {
    $state.go('home')
  }
    $scope.view.search = function (string) {
      $http.get('https://www.omdbapi.com/?s=' + string).then(function(data) {
        $scope.view.results = data.data.Search
        console.log($scope.view.results)
        $scope.view.searchText = ''
      })
    }
    $http.get('https://www.omdbapi.com/?s=' + $stateParams.title).then(function(data) {
      $scope.view.results = data.data.Search
      console.log($scope.view.results)
      // $scope.view.searchText = ''
    })
}])

app.controller('nextController', ['$scope','$stateParams','$http', function($scope, $stateParams, $http){
  $scope.redirectToDetails = function () {
    $state.go('next')
  }
    $http.get('https://www.omdbapi.com/?t=' + $stateParams.movieTitle).then(function(data){
      console.log(data)
      $scope.view = {}
      $scope.view.movie = data.data
    })
}])
