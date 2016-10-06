var defaultListApp = angular.module('defaultListApp', ['builder', 'builder_editors']);
defaultListApp.controller('defaultListCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.products = [];

    console.log(Builder.currentProjectId);
    console.log(Builder.accessToken);
    var tenant = Builder.currentProjectId;
    $scope.selectedProduct = {};
    $scope.products = [];
    $scope.comments = [];

    $scope.getProducts = function () {
        $http({
            method: 'GET',
            url: 'https://api.yaas.io/hybris/product/v2/' + tenant + '/products',
            headers: {
                'Authorization': 'Bearer ' + Builder.accessToken
            }
        }).then(function (response) {
            $scope.products = response.data;
        }, function (error) {

        });
    };

    $scope.getComments = function (productId) {
        $http({
            method: 'GET',
            url: 'https://api.yaas.io/nemanja/product-comments/v1/' + tenant + '/products/' + productId + '/comments',
            headers: {
                'Authorization': 'Bearer ' + Builder.accessToken
            }
        }).then(function (response) {
            $scope.comments = response.data;
        });
    };

    $scope.selectProduct = function(product){
        $scope.selectedProduct = product;
        $scope.comments = [];
        $scope.getComments(product.id);
    };

    $scope.deleteComment = function(comment){
        $scope.getComments($scope.selectedProduct.id);
    };

    $scope.getProducts();
}]);
