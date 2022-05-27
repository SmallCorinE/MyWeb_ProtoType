var Link = {
	setLinkColor:function (color){
		// var alist = document.querySelectorAll('a');
		// var i = 0;
		// while(i<alist.length){
		// 	console.log(alist[i]);
		// 	alist[i].style.color=color;
		// 	i=i+1;
		// }
		$('a').css('color', color);
	}
}
var Body = {
	setLetterColor:function (color){
		// document.querySelector('body').style.color=color;
		$('body').css('color', color);
	},
	setBackGColor:function (color){
		// document.querySelector('body').style.backgroundColor=color;
		$('body').css('backgroundColor', color);
	}
}

	function contrastHandler(self){
		var target = document.querySelector('body');
		if(self.value === 'Make it bright'){
			Body.setBackGColor('white')
			Body.setLetterColor('black')
			self.value = 'Make it dark';
			Link.setLinkColor('red')

		} else {
			Body.setBackGColor('black')
			Body.setLetterColor('white')
			self.value = 'Make it bright';
			Link.setLinkColor('pink');
		}
	}
