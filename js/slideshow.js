$(document).ready( function(){

	console.log("SlideshowJS loaded...")
	var i  		= 0;
	var images = [
		"images/beach/beach1.jpg",
		"images/beach/beach2.jpg",
		"images/beach/beach3.jpg",
		"images/beach/beach4.jpg",
		"images/beach/beach5.jpg",
		"images/beach/beach6.jpg"
	];
	var lastImage = images.length - 1;

	$("#leftArrow").click(function(){
		console.log( "Previous btn pressed");
		if( i > 0 ){
			i = i - 1;
		}else{
			i = lastImage;
		}
		swapImage( i );
	});

	$("#rightArrow").click(function(){
		console.log( "Next btn pressed");
		if( i < lastImage ){
			i = i + 1;
		}else{
			i = 0;
		}
		swapImage( i );
	});

	var timer = setInterval(function(){
		if( i < lastImage ){
			i = i + 1;
		}else{
			i = 0;
		}
		swapImage( i );
	}, 5000 );

	function swapImage( index ){
		$("#pictureFrame").hide()
		$("#pictureFrame img").attr("src", images[index])
		$("#pictureFrame").fadeIn( 2000 )
	}




});