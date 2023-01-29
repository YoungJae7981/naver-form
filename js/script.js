//label 태그를 클릭 했을 떄 실행할 함수

$('label').on('click',function(e){
	//폼태그 안에있는 input을 전송하는 동작을 막아줌
	e.preventDefault();
	$(this).children('.checkbox-img').toggleClass('checked');
	
	if($(this).children('.checkbox-img').hasClass('checked')){
		// .checkbox-img가 checked 클래스를 가지고 있을 때 실행할 코드
		$(this).children('input[type="checkbox"]').attr('checked','true');
	} else{
			// .checkbox-img가 checked 클래스를 가지고 있지 않을 때 실행할 코드
		 $(this).children('input[type="checkbox"]').removeAttr('checked');	
	}
})

//total에 체크하면 모든 .agree에 체크
//total에 언체크하면 모든 agree.에 언체크

$('.total label').on('click',function(){
	if($(this).find('.checkbox-img').hasClass('checked')){
		//모든  .agree라는 클래스를 가진 것들이 체크  되어야함
		$('.agree').find('.checkbox-img').addClass('checked');
		$('.agree').find('input[type ="checkbox"]').attr('checked',true)
	}else{
		$('.agree').find('.checkbox-img').removeClass('checked');
		$('.agree').find('input[type ="checkbox"]').attr('checked',false)
	}
})

$('#cancel').on('click',function(){
	location.href = "https://www.naver.com/";
})


//submit 버튼을 클릭했을때 필수동의 사항에 모두 체크했는지 확인
//모두 체크되어있으면 통과
//체크 되어있지않다면 #RED-ALERT을 보여주고 전송을 중지

$('#submit').on('click', function(E){
	let req = $('.req').length;
	let chkreq = $('.req .checked').length;
	let unchk = req - chkreq;
	if(unchk==0) {
		$("#form1").submit();
	
	} else {
		E.preventDefault();
	// }	$("#red-alert").css("visibility","visible");
		$("#red-alert").attr( 'style', 'visibility:visible');
		
	
	}
	
	
});