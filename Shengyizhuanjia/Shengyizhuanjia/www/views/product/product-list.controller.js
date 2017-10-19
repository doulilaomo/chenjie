(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ProductListCtrl',['$scope','$ionicLoading','$timeout','$filter',function ($scope,$ionicLoading,$timeout,$filter) {
      $scope.products=[];
      $scope.sourceProducts=[];
      $scope.searchMV={
        content:''
      };
      var isLoading=false;
      var pageIndex=1;
      $scope.$on('$ionicView.enter',function () {
        $ionicLoading.show({
          template:'<ion-spinner icon="ios" class="spinner-light"></ion-spinner>数据加载中，请稍候......'
        });
        $scope.doRefresh();
      });
      $scope.getByName=function () {
        $scope.products=$filter('filter')($scope.sourceProducts,{
          Name:$scope.searchMV.content
        });
      };
      $scope.doRefresh=function () {
        pageIndex=1;
        $scope.hasMore=false;
        $scope.products=[];
        loadData();
      };
      $scope.loadMore=function () {
        pageIndex++;
        loadData();
      };
      function loadData() {
        if(isLoading==true){
          return;
        }
        isLoading=true;
        $timeout(function () {

          var list=[
            {
              ID:1
              ,Images:['views/product/img/1.jpg']
              ,Name:'华为畅享7 Plus'
              ,Price:'1699'
              ,Store:12
              ,Barcode:'12121212112'
            }
            ,{
              ID:2
              ,Images:['views/product/img/2.jpg']
              ,Name:'华为 Mate 9'
              ,Price:'2899'
              ,Store:11
              ,Barcode:'12121212113'
            }
            ,{
              ID:3
              ,Images:['views/product/img/3.jpg']
              ,Name:'HUAWEI nova 青春版'
              ,Price:'1699'
              ,Store:10
              ,Barcode:'12121212114'
            }
            ,{
              ID:1
              ,Images:['views/product/img/4.jpg']
              ,Name:'华为畅享7'
              ,Price:'799'
              ,Store:9
              ,Barcode:'12121212115'
            }
            ,{
              ID:1
              ,Images:['views/product/img/5.jpg']
              ,Name:'HUAWEI Mate 9 Pro'
              ,Price:'4399'
              ,Store:8
              ,Barcode:'12121212116'
            }
            ,{
              ID:1
              ,Images:['views/product/img/6.jpg']
              ,Name:'HUAWEI nova 2 Plus'
              ,Price:'2299'
              ,Store:7
              ,Barcode:'12121212117'
            }
          ];
          $scope.products=list;
          isLoading=false;
          $scope.$broadcast('scroll.refreshComplete');
          $ionicLoading.hide();
        },2000);
      }
    }]);
})();
