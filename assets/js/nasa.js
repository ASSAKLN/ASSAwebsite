$(document).ready(function() {
	$.getJSON("https://api.nasa.gov/planetary/apod?api_key=57dNorW8I85carzwdkbBduOBYUjrXEd5vL2SVOwZ",function(data) {
		$(".nasa").css("background-image","url("+data.url+")").fadeIn("slow");
	});
});