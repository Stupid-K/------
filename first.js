// 首页最下面的商标
var date = new Date();
var year = date.getFullYear();
var labal = 'Copyright © Kovid-19 ' + year
var first = document.getElementsByClassName('first')[0];
first.innerText = labal

// $('.button').on('click',function(){
// 	showResult()
// })
// function showResult() {
// 	var date = $('.word').val()
// 	$.ajax({
// 		url: "/asset",
// 		type:'POST',
// 		data: {"data":date},
// 	})
// }
var text = document.getElementsByClassName('word')[0]
	promp = document.getElementsByClassName('promp')[0]
text.onkeyup = function(){
	if(text.value != ''){
		promp.style.display = 'block';
	}
	else{
		promp.style.display = 'none';
	}
}


var button = document.getElementsByClassName('button')[0]
button.onclick = function(){

}