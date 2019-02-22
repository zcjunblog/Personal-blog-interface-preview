//鼠标点击特效社会核心价值观
var a_idx=0;jQuery(document).ready(function($){$("body").click(function(e){var a=new Array("富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善");var $i=$("<span />").text(a[a_idx]);a_idx=(a_idx+1)%a.length;var x=e.pageX,y=e.pageY;$i.css({"z-index":1e+69,"top":y-20,"left":x,"position":"absolute","font-weight":"bold","color":"#fd2b6c"});$("body").append($i);$i.animate({"top":y-180,"opacity":0},1500,function(){$i.remove()})})});
//控制小火箭隐藏
window.onscroll = function () {
	if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
		document.getElementById("back-top").style.display = "block";
	}
	else {
		document.getElementById("back-top").style.display = "none";
	}
}
//控制滚动条平滑滚动
function scrollToTop() {
var timeOut;
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout('scrollToTop()',10);
	}
	else clearTimeout(timeOut);
}
//修改title
window.onfocus = function () {
	document.title = '恢复正常了...(゜-゜)つロ 干杯~';
};
window.onblur = function () {
	document.title = '快回来~页面崩溃了';
};
 // 显示提示框
 function showToast(message, t) {
 	var alert = document.getElementById("toast");
 	if(alert == null){
 		alert = document.createElement("div");
 		alert.id = 'toast';
 		alert.innerText = message;
 	} else {
 		alert.style.opacity = .9;
 	}
 	document.body.appendChild(alert);
 	t = t ? t : 1000;
 	toast_timer = setTimeout(function() {
 		if(alert) {
 			document.body.removeChild(alert);
 		}
 	}, t);
 }
 function test() {
 	showToast('由于太菜暂时没写...', 2500);
 }
//微语滚动
$(function() {
	var $this = $("#news");
	var scrollTimer;
	$this.hover(function() {
		clearInterval(scrollTimer);
	}, function() {
		scrollTimer = setInterval(function() {
			scrollNews($this);
		}, 2000);
	}).trigger("mouseleave");

	function scrollNews(obj) {
		var $self = obj.find("ul");
		var lineHeight = $self.find("li:first").height(); 
		$self.animate({
			"marginTop": -lineHeight + "px"
		}, 600, function() {
			$self.css({
				marginTop: 0
			}).find("li:first").appendTo($self);
		})
	}
})
//验证码
var code;
function createCode() 
{
	code = "";
 var codeLength = 6; //验证码的长度
 var checkCode = document.getElementById("checkCode");
 var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
 	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
 for(var i = 0; i < codeLength; i++) 
 {
 	var charNum = Math.floor(Math.random() * 52);
 	code += codeChars[charNum];
 }
 if(checkCode) 
 {
 	checkCode.className = "code";
 	checkCode.innerHTML = code;
 }
}
function validateCode() 
{
	var inputCode=document.getElementById("inputCode").value;
	if(inputCode.length <= 0) 
	{
		alert("请输入验证码！");
	}
	else if(inputCode.toUpperCase() != code.toUpperCase()) 
	{
		alert("验证码输入有误！");
		createCode();
	}
	else 
	{
		alert("评论提交成功，待审核！");
	}    
}  
//清除文本
function cleartext(){
	$("#textarea").val("");
}
//文章border-bottom随机颜色
function bg1(){
	return '#'+Math.floor(Math.random()*0xffffff).toString(16);
}
window.onload  =  function(){

	var bg = document.getElementsByClassName("dv");

	for(var i = 0; i < bg.length; i++){
		bg[i].style.backgroundColor = bg1();
	}
}