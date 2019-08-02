$(document).ready(function() {
	$("#btnSignup").click(function(e) {
		e.preventDefault();
		fn_signUp();
	});
	
	$("#btnSignup_P").click(function(e) {
		e.preventDefault();
		fn_signUp_P();
	});
	
	$("#btnLogin").unbind("click").click(function(e) {
		e.preventDefault();
		fn_logIn();
	});
});


function fn_signUp() {
	var comSubmit = new ComSubmit("form");
	comSubmit.setUrl("/skc/member/insertMember");
	comSubmit.submit();
}

function fn_signUp_P() {
	var comSubmit = new ComSubmit("form");
	comSubmit.setUrl("/skc/member/insertMember_P");
	comSubmit.submit();
}

function fn_logIn() {
	if($("#uId").val().length < 1)
	{
		alert("아이디 입력해랑");
	}
	else if($("#uPwd").val.length < 1)
	{
		alert("비밀번호 입력해랑");
	}
	else
	{
		var comSubmit = new ComSubmit("form");
		comSubmit.setUrl("/skc/member/memberLogin");
		comSubmit.submit();
	}
}

function fn_logOut() {
	if(window.confirm("갈거냥 냥냥?"))
		{
		window.location.href="/main/index"
		}
}

function gfn_isNull(str) {
	if (str == null) return true;
	if (str == "NaN") return true;
	if (new String(str).valueOf() == "undefined") return true;    
	var chkStr = new String(str);
	if( chkStr.valueOf() == "undefined" ) return true;
	if (chkStr == null) return true;    
	if (chkStr.toString().length == 0 ) return true;   
	return false; 
}

function ComSubmit(opt_formId) {
	this.formId = gfn_isNull(opt_formId) == true ? "commonForm" : opt_formId;
	this.url = "";
	if(this.formId == "commonForm"){
		$("#commonForm")[0].reset();
	}
	this.setUrl = function setUrl(url){
		this.url = url;
	};

	this.addParam = function addParam(key, value){
		$("#"+this.formId).append($("<input type='hidden' name='"+key+"' id='"+key+"' value='"+value+"' >"));
	};
	this.submit = function submit(){
		var frm = $("#"+this.formId)[0];
		frm.action = this.url;
		frm.method = "post";
		frm.submit();	
	};
}

