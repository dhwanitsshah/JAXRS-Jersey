(function() {

	// ....................MODULES....................

	// StoreModule
	var app = angular.module('store', []);
	var hasLoad = false;
	// .....................DATA.......................

	// GemData
	var gems = [
			{
				name : "Ruby",
				price : "100",
				description : "Ruby is very precious stone",
				image : "./images/image1.JPG",
				reviews : [ "This is an excellent ruby",
						"This is second review of ruby" ]
			},
			{
				name : "Pearl",
				price : "200",
				description : "Pearl is very precious gem",
				image : "./images/image2.JPG",
				reviews : [ "This is an excellent pearl",
						"This is second review of pearl" ]
			} ];

	// .....................SERVICE......................
	app.factory('trackService', [
			'$http',
			function($http) {

				var doRequest = function() {

					/*
					 * var result = $http({ method : 'GET', url :
					 * './rest/json/metallica/get' });
					 * 
					 * var obj = {}; obj.name = result.title; obj.description =
					 * result.singer; obj.price = 100; obj.image =
					 * "./images/image1.JPG"; obj.reviews = [ "review1",
					 * "review2" ]; gems.push(obj); return gems;
					 */

					/*
					 * $.getJSON("./rest/json/metallica/get", function(result) {
					 * var obj = {}; obj.name = result.title; obj.description =
					 * result.singer; obj.price = 100; obj.image =
					 * "./images/image1.JPG"; obj.reviews = [ "review1",
					 * "review2" ]; gems.push(obj); });
					 */

					$http.get('./rest/json/metallica/get').success(
							function(data, status, headers, config) {
								var obj = {};
								obj.name = result.title;
								obj.description = result.singer;
								obj.price = 100;
								obj.image = "./images/image1.JPG";
								obj.reviews = [ "review1", "review2" ];
								gems.push(obj);
							});

					return gems;
				};

				return {
					gems : function() {
						return doRequest();
					}
				};
				/*
				 * $.getJSON("./rest/json/metallica/get", function(result){ var
				 * obj = {}; obj.name = result.title; obj.description =
				 * result.singer; obj.price = 100; obj.image =
				 * "./images/image1.JPG"; obj.reviews = ["review1","review2"];
				 * gems.push(obj); });
				 */
			} ]);

	// ....................CONTROLLERS..................

	// StoreController
	app.controller('StoreController', [
			'$scope',
			'$http',
			function($scope, $http) {
				var that = this;
				loadTracks();
				function loadTracks() {
					$http.get('./rest/json/metallica/get').success(
							function(result) {
								var obj = {};
								obj.name = result.title;
								obj.description = result.singer;
								obj.price = 100;
								obj.image = "./images/image1.JPG";
								obj.reviews = [ "review1", "review2" ];
								gems.push(obj);
								//that.products = gems;
							});

					var track = {};
					track.title = "Rocky Sea";
					track.singer = "Dhwanit";

					$http.post('./rest/json/metallica/post',track).success(
							function(result) {
								var obj = {};
								obj.name = "Rocky Sea";
								obj.description = "Dhwanit";
								obj.price = 100;
								obj.image = "./images/image2.JPG";
								obj.reviews = [ "reviewX", "reviewY" ];
								gems.push(obj);
								that.products = gems;
							});
				}
				;

			} ]);

	// TabController
	app.controller('TabController', function() {
		this.tab = 1;

		this.setTab = function(tabValue) {
			this.tab = tabValue;
		};

		this.isTabSelected = function(tabValue) {
			return (tabValue === this.tab);
		};
	});

	// ReviewController
	app.controller("ReviewController", function() {
		this.newReview = '';

		this.addReview = function(product) {
			product.reviews.push(this.newReview);
			this.newReview = '';
		};
	});

})();