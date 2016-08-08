angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('AlbisteakCtrl', function($scope,$http) {
  $scope.irekiurl = function(url) {
    window.open(url,'_self');
  }
  return $http.get('http://www.pasaia.eus/es/noticias/-/asset_publisher/uBroWoztIyOX/rss').then(function(response){
      items = response.data;
      var parser = new DOMParser();
      var xml = parser.parseFromString(items, 'text/xml');


      var entryData = xml.getElementsByTagName('entry');
      var posts = [];

      for (var i = 0; i < entryData.length; i++) {
        posts.push({
          id          : getFirstNode(entryData[i], 'id').innerHTML,
          title       : getFirstNode(entryData[i], 'title').innerHTML,
         // content     : getFirstNode(entryData[i], 'content').innerHTML,
         link         : getLink(entryData[i], 'link'),
          image       : getImageLink(entryData[i], 'thumbnail', 'media')
        });
      }

      function getFirstNode(parent, nodeName, nameSpace) {
         if (!nameSpace)
            return parent.getElementsByTagName(nodeName)[0];
         return parent.getElementsByTagName(nodeName, nameSpace)[0];
      }

      function getImageLink(parent, nodeName, nameSpace) {
         var node = getFirstNode(parent, nodeName, nameSpace);
         if (node)
            return node.getAttribute('href');
         return null;
      }

      function getLink(parent, nodeName, nameSpace) {
         var node = getFirstNode(parent, nodeName, nameSpace);
         if (node)
            return node.getAttribute('href');
         return null;
      }


      $scope.entries = posts;
  });
})

.controller('AlbisteaCtrl', function($scope, $http, $stateParams) {
  console.log($stateParams.albistea);

})

.controller('LaneskeintzakCtrl', function($scope) {
  $scope.laneskeintzak = [
    { title: 'Lan 1', id: 1 },
    { title: 'Lan 2', id: 2 },
    { title: 'Lan 3', id: 3 },
    { title: 'Lan 4', id: 4 },
    { title: 'Lan 5', id: 5 },
    { title: 'Lan 6', id: 6 }
  ];
})

.controller('LaneskeintzaCtrl', function($scope, $stateParams) {
});
