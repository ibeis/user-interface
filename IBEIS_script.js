$(document).ready(function(){
	$(".tab-links a").click(function(e){
		var currentLinkValue = $(this).attr("href");
		$(".tabs " + currentLinkValue).show().siblings().hide();
		$(this).parent("li").addClass("active").siblings().removeClass("active");
		e.preventDefault();
	});
	
	$(".tab-links a").hover(
	function(e) {
        var referenceLink = $(this).attr("href");
		switch(referenceLink)
		{
			case "#tab1":
				$(this).removeClass("link1");
				$(this).addClass("link1-hover");
				break;
			case "#tab2":
				$(this).removeClass("link2");
				$(this).addClass("link2-hover");
				break;
			case "#tab3":
				$(this).removeClass("link3");
				$(this).addClass("link3-hover");
				break;
			case "#tab4":
				$(this).removeClass("link4");
				$(this).addClass("link4-hover");
				break;
			case "#tab5":
				$(this).removeClass("link5");
				$(this).addClass("link5-hover");
				break;
		}
    },
	function(e) {
        var referenceLink = $(this).attr("href");
		switch(referenceLink)
		{
			case "#tab1":
				$(this).removeClass("link1-hover");
				$(this).addClass("link1");
				break;
			case "#tab2":
				$(this).removeClass("link2-hover");
				$(this).addClass("link2");
				break;
			case "#tab3":
				$(this).removeClass("link3-hover");
				$(this).addClass("link3");
				break;
			case "#tab4":
				$(this).removeClass("link4-hover");
				$(this).addClass("link4");
				break;
			case "#tab5":
				$(this).removeClass("link5-hover");
				$(this).addClass("link5");
				break;
		}
    });
	
	$(".tab-links a")
});