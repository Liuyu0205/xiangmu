app.controller("songCtrl",function($scope,$http){
	$http.get("data/song.json")
	.success(function(data){
//		all
		$scope.allHead=data.all.head[0];
		$scope.allUl=data.all.allUl;
		
//		Class
		$scope.Class=data.Class;
	})
})