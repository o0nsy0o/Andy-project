	$(setInterval(function(){
		if($("#backgroundPlace li.onactive").next('li').attr('name')=="sb"){
			var aa=$("#backgroundPlace li.onactive").next();
		}else{
			var aa=$("#backgroundPlace li:first")
		}
		$("#backgroundPlace li.onactive").fadeOut(4000);
		$("#backgroundPlace li.onactive").removeClass('onactive')
		$(aa).fadeIn(4000);
		$(aa).addClass('onactive');
	},10000));