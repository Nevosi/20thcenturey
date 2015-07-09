var random_images_array = ["20th_century_leonard_nimoy_banner1.jpg", "20th_century_leonard_nimoy_banner2.jpg","20th_century_leonard_nimoy_banner3.jpg","20th_century_leonard_nimoy_banner4.jpg"];

	function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
		var imgStr = '<input type="image" id="banner_ad" src="' + path + img + '" alt = "Donate to help Fight COPD" width="540" height="100">';
    document.write(imgStr);
}
