app.controller("listCtrl",function($scope,$http){
	$http.get("data/list.json")
	.success(function(data){
		$scope.offHead=data.off.head[0];
		$scope.offLi=data.off.offLi;
		
		
		$scope.toHeadO=data.total.head[0];
		$scope.toHeadT=data.total.head[1];
		
		$scope.toIconO=data.total.icon.one;
		$scope.toIconT=data.total.icon.two;
	})
})