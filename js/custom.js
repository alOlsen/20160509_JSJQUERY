$( document ).ready( function(){ 
	console.log("Test from jQuery"); 

	$("#topPanel").animate( 
						{	top : "-=100px"}, 
						500,
						"linear"
						);

	$("#bottomPanel").animate( 
						{ bottom : "-=100px"}, //change
						500, //duration
						"linear",
						function(){ $("#socialMediaIcons img").fadeIn(); } // when it completes
					);

} );