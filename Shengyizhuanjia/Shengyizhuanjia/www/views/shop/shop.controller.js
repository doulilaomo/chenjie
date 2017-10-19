(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'小店铺',
        ab:'',
        name1:'陈杰',
        phone:'13290897576',
        phone1:'13290897576',
        createTime:'2016-8-30 12:30:00',
        email:'912733244@qq.com',
        hylx:'手机'
      });
    });
  }])
})();
