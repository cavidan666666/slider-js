$(function(){

	var ButunLiler = $(".slider ul li").length;
	var Liwitdh = 780;
	var toplamWidth = Liwitdh * ButunLiler;
	// alert(toplamWidth);
	var lideger = 0; 

	$(".slider ul").css("width", toplamWidth + "px");

	$(".next").click(function(){
      
     if (lideger < ButunLiler - 1) 
     {
     	lideger++;
     	yeniWidth = Liwitdh*lideger;
     	$(".slider ul").animate({marginLeft: "-" + yeniWidth + "px"},500);
     }
     else
     {
     	lideger = 0;
     	$(".slider ul").animate({marginLeft: "0"}, 500);
     }

	});



	$(".prev").click(function(){
      
     if (lideger > 0) 
     {
     	lideger--;
     	yeniWidth = Liwitdh*lideger;
     	$(".slider ul").animate({marginLeft: "-" + yeniWidth + "px"},500);
     }

	});

});

