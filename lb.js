$(function(){
	var html=''
    +'<div class="slider" id="slider">'
				+'<div class="slide"><img src="img/b5.png" alt=""></div>'
				+'<div class="slide"><img src="img/b1.png" alt=""></div>'
			+	'<div class="slide"><img src="img/b2.png" alt=""></div>'
			+	'<div class="slide"><img src="img/b3.png" alt=""></div>'
			+	'<div class="slide"><img src="img/b4.png" alt=""></div>'
			+	'<div class="slide"><img src="img/b5.png" alt=""></div>'
			+	'<div class="slide"><img src="img/b1.png" alt=""></div>'
			+'</div>'
			+'<span id="left"><</span>'
			+'<span id="right">></span>'
			+'<ul class="nav" id="navs">'
			+	'<li class="active">1</li>'
			+	'<li>2</li>'
			+	'<li>3</li>'
			+	'<li>4</li>'
			+	'<li>5</li>'
			+'</ul>',
			box=$('#box');
			box.append(html);
			 
			var oNavlist = $('#navs').contents(),
			slider = $('#slider'),
			left = $('#left'),
			right = $('#right'),
			index = 1,
			isMoving = false,
			isStop=true,
			timer=null;
			
	box.mouseover(function(){
		clearInterval(timer);
		$('span').css('opacity','50%');
	})
	box.mouseleave(function(){
		autoSlider();
		$('span').css('opacity','');
	})

	function autoSlider(){
		timer=setInterval(function(){
			index++;
		    autoImage();
			autoDo();
			
		},1500);
		
		
	}
	slider.mouseleave()
	
	function autoImage(){
		var width=-1200*index;
		slider.animate({
			'left':width+'px'
		},500)
		if(index>=6){
			slider.animate({'left':'-1200px'},0);   
			index=1;
		}
		
	}
	function autoDo(){
		for(var p=0;p<oNavlist.length;p++)
		{
			$(oNavlist[p]).attr('class','');
		}
		$(oNavlist[index-1]).addClass('active')
	}

	oNavlist.click(function(event){
		var target=event.target;
		index=$(target).index()+1;
		autoImage();
		autoDo();
});
right.click(function(){
	index++;
	autoImage();
	autoDo();
});
left.click(function(){
	index--;
	autoImage();
	autoDo();
});

})

    
	






	