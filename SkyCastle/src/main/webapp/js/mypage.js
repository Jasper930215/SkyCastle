$(document).ready(function(){
			$("#testimonial-slider").owlCarousel({
				items:1,
				itemsDesktop:[1000,1],
				itemsDesktopSmall:[979,1],
				itemsTablet:[768,1],
				pagination: true,
				autoPlay:false
			});
		});	


var check_nick='';

function check_nick_exist(nick) {
	check_nick=nick;
	xmlHttp = null;
	xmlHttp = GetXMLHttpRequest();
	xmlHttp.open("POST", '/join/check_nick_exist.yg', true);
	xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	xmlHttp.setRequestHeader('Cache-Control', 'no-cache, must-revalidate');
	xmlHttp.setRequestHeader('Pragma', 'no-cache');
	xmlHttp.onreadystatechange = check_nick_exist_complete;
	xmlHttp.send("nick="+nick);
}
function check_nick_exist_complete(){
	if(!xmlHttp) return;
	if(xmlHttp.readyState == 4) {
		if(xmlHttp.status == 200) {
			var v=xmlHttp.responseXML;
			xmlHttp = null;
			if(v){
				var f = document.joinform;
				var result = v.getElementsByTagName('result');

				var msg = result.item(0).getAttribute('value')
				var len = result.item(0).getAttribute('len')
				var msg2 = '';

				switch(msg){
					case 'NO_NICK':
						msg2 = '';
						break;
					case 'EXIST_NICK':
						if(org_nick.toLowerCase()!=check_nick.toLowerCase()){
							msg2 = "<span class='warning'>이미 사용중인 닉네임입니다</span>";
						}
						break;
					case 'EXIST_NICK_YGCLAN':
						msg2 = "<span class='warning'>(구)YGCLAN 사이트에서 이미 사용중인 닉네임입니다</span>";
						break;
					case 'INVAL_NICK':
						msg2 = "<span class='warning'>한글6자, 영문/숫자 12자 까지의 정상적인 문자 (운영자 유사닉네임 불가) 만 사용</span>";
						break;
					case 'SUCCESS':						
						break;
				}
				update_nick_status(msg2,len);
			}
		}
	}
}

function update_nick_status(msg,len){
	current_nick_length=len;
	document.getElementById('nick_change_status').innerHTML = "(" + (len>12||len<3?("<span class='warning'>"+len+"</span>"):len) + "/12 자 입력) " + msg;
}


function check_member_out(){
	var f = document.member_out_form;

	if(f.reason1.value == ''){ alert('탈퇴사유를 선택해주세요'); f.reason1.focus(); return false; }
	if(f.pwd.value == ''){ alert('비밀번호를 선택해주세요'); f.pwd.focus(); return false; }

	if(confirm('정말로 회원 탈퇴를 진행 하시겠습니까?')) document.member_out_form.submit();

	return false;
}



$(document).ready(function() {

    $('#inputEmail2').hide();

    $("#inputEmailSelect").change(function() {
        var selected_mail_value =  $("#inputEmailSelect option:selected").text();
        if(selected_mail_value == '직접입력')
        {
            $('#inputEmail2').val('').show().focus();
        }
        else
        {
            $('#inputEmail2').val(selected_mail_value).hide();
        }
    });
});

function openTab(evt, tabName) 
{
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent"); //컨텐츠 불러옴 
      for (i = 0; i < tabcontent.length; i++) 
      {
        tabcontent[i].style.display = "none"; //컨텐츠 모두 숨김
      }
      tablinks = document.getElementsByClassName("tablinks"); //탭을 불러옴
      for (i = 0; i < tablinks.length; i++) 
      {
        tablinks[i].className = tablinks[i].className.replace(" active", ""); //탭을 초기화
      }
      document.getElementById(tabName).style.display = "block"; //해당되는 컨텐츠만 보여줌
      evt.currentTarget.className += " active"; //클릭한 탭을 활성화
}


var email_info = 'heraresq@naver.com';
var email_info_split = email_info.split('@');
$(function(){
    inputPlaceholder(document.getElementById('join_form_pwd'),'');
    inputPlaceholder(document.getElementById('join_form_nick'),'');
    inputPlaceholder(document.getElementById('join_form_email'),'');
});

 

     //console.debug(email_info_split);

if(email_info_split != '')
{
	$('#inputEmail').val(email_info_split[0]);
	$('#inputEmail2').val(email_info_split[1]);

	var is_selected_email = false;
	$("#inputEmailSelect option").each(function() {
		if($(this).text() == email_info_split[1]) {
			$("#inputEmailSelect option[text=" + $(this).text() + "]").attr("selected", true);
			is_selected_email = true;
			return;
		}
	});

	if(!is_selected_email) {
		$('#inputEmail2').show().val(email_info_split[1]);
		$("#inputEmailSelect").val('custom');
	}
}
//여기까지가 myPage_N,P.jsp


//wishList.jsp
jQuery(document).ready(function(){
	$("#checkAll").click(function(){
		if ($(this).is(':checked')) {
			$(".cartTable #course_idx").each(function() { 
				$(this).prop("checked", true);
			});
		} else {
			 $(".cartTable #course_idx").each(function() { 
				$(this).prop("checked", false);
			}); 
		}
	});
});

//requestCoupon.jsp
jQuery(document).ready(function(){
	var select = $("select#color");
	select.change(function(){
		var select_name = $(this).children("option:selected").text();
		$(this).siblings("label").text(select_name);
	});
	goBoardEditer("contents");
});

//qnaList.jsp, couponList_N,P.jsp
$(".reonON .r6").on("click",function(){
	$(this).parent().next().find(".reonBox").slideToggle( "slow" );
})
function anwerView(idx) {
	$("#anwer_"+idx).toggle();
}

//history.jsp
function movePaginate(p){
    $('#page').val(p); 
    $('#frm_list').submit();
}

//couponList_N,P.jsp
$(".reonON .r6").on("click",function(){
	$(this).parent().next().find(".reonBox").slideToggle( "slow" );
})
function anwerView(idx) {
	$("#anwer_"+idx).toggle();
}