app.controller("personCtrl",function($scope,$http){
	$http.get("data/person.json")
	.success(function(data){
//			banner
			$scope.banner=data.banner;

//			icon
			$scope.icon=data.icon;
			
//			mend
			$scope.headOne=data.mend.head[0];
			$scope.headTwo=data.mend.head[1];
			$scope.headThr=data.mend.head[2];
			
			$scope.iconOne=data.mend.icon.one;
			$scope.iconTwo=data.mend.icon.two;
			$scope.iconThr=data.mend.icon.three;
			
//			alone
			$scope.aloneOne=data.alone.head[0];
			$scope.aloneTwo=data.alone.head[1];
			
			$scope.aloneIconOne=data.alone.icon.one;
			
			$scope.aloneIconTwo=data.alone.icon.two;
			
			
//			welfare
			$scope.welfare=data.welfare[0];
			
			
//			select
			$scope.seleHead=data.sele.head[0];
			$scope.seleLi=data.sele.li;
			
			setTimeout(function() {
				//初始化Swiper对象			
				$scope.mySwiper = new Swiper(".swiper-container", {
					pagination: ".swiper-pagination",
					//小圆点点击
					paginationClickable: true,
			
					//垂直方向
					direction: 'horizontal',
					
					
					//当前页数 从0开始
					initialSlide: 0,
			
					//自动轮播
					autoplay: 2000,
					autoplayDisableOnInteraction: false,
					loop:true,
				});
			}, 100)
				
	})

})