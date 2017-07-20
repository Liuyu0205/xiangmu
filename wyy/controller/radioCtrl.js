app.controller("radioCtrl", function($scope, $http) {
	$http.get("data/radio.json")
		.success(function(data) {

			$scope.claHead = data.Class.head;

			$scope.hotHeadOne = data.Class.hot.head[0];
			$scope.hotHeadTwo = data.Class.hot.head[1];

			$scope.hotIconOne = data.Class.hot.icon.one;
			$scope.hotIconTwo = data.Class.hot.icon.two;

			$scope.everyHead = data.everyDay.head[0];

			$scope.everyLi = data.everyDay.everyLi;

			$scope.eleHead = data.ele.head[0];

			$scope.eleLi = data.ele.eleLi;

			$scope.readOne = data.read.head[0];
			$scope.readTwo = data.read.head[1];
			$scope.readThr = data.read.head[2];
			$scope.readFour = data.read.head[3];

			$scope.readHotOne = data.read.one;
			$scope.readHotTwo = data.read.two;
			$scope.readHotThr = data.read.thr;
			$scope.readHotFour = data.read.four;

			setTimeout(function() {
				//初始化Swiper对象			
				$scope.mySwiper = new Swiper(".swiper-container", {
					pagination: ".swiper-pagination",
					//小圆点点击
					paginationClickable: true,

					//垂直方向
					direction: 'horizontal',
					loop:true,

					//当前页数 从0开始
					initialSlide: 0,

					//自动轮播
					autoplay: 2000,
					autoplayDisableOnInteraction: false,
				});
			}, 100)

		})

})