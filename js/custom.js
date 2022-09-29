$(document).ready(function(){
	
	//메뉴 공통
	
	//more메뉴
    $("#header .menu p.more").click(function(){
        $("#more_menu").stop().animate({"left":"0px"}); 
    });
    //close메뉴
    $("#more_menu p.close").click(function(){
        $("#more_menu").stop().animate({"left":"-250px"}); 
    });
	
	
	
	
	
	
	
	
	
	
	
	
	
});