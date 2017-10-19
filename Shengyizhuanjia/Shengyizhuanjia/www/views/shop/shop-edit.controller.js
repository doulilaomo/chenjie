(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService',function ($scope,$stateParams,localStorageService) {
    $scope.title = $stateParams.title;
    $scope.property = $stateParams.property;
    $scope.shop = localStorageService.get('Shop',{
      name:'小店铺',
      ab:'',
      name1:'陈杰',
      phone:'13290897576',
      phone1:'13290897576',
      createTime:'2016-8-30 12:30:00',
      email:'912733244@qq.com',
      hylx:'cj'

    });
    $scope.save = function () {
      localStorageService.update('Shop',$scope.shop);
    };
  }]);
})();
