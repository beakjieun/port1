$(document).ready(function(){
   
//    /*윈도우 창 조절하는 기능을 사용했을때*/
//    $(window).resize(function(){
//        /*.sub 높이값을 받아서 hei변수에 담아줌*/
//        var hei = $(".tab_sub .sub").height();
//        $(".tab_sub").height(hei); 
//    });
    
	//isotope 시작

                
   $(".tab_menu ul li").click(function(e){ // 버튼 클릭 시
      e.preventDefault(); // a태그 기능 정지
	   
	      $(".tab_sub .sub").isotope({ // 정렬할 박스들 감싸는 부모 클래스 이름
    // options
	   itemSelector: '.all', //정렬할 박스들 클래스 이름
      layoutMode: 'fitRows' // 정렬시 옵션
    });
      $(".tab_menu ul li").removeClass("on"); // 활성화되어있는 버튼 클래스on제거
      $(this).addClass("on"); // 클릭한 버튼 활성화
      var selector = $(this).attr('data-filter'); 
      // 정렬시킬 박스들의 클래스 이름 받아오기
      $(".tab_sub .sub").isotope({ filter: selector });
	   // 정렬시작 구문
	});	
    //isotope 끝
	
	
    
});