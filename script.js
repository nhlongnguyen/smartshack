$(document).ready(function() {
	var controller = $.superscrollorama({
		triggerAtCenter: true,
		playoutAnimations: true
	});
	// parallax example
	controller.addTween(
		'#clouds',
		(new TimelineLite())
		.append([
			TweenMax.fromTo($('#clouds .r2'), 1, 
				{css:{top: 50}, immediateRender:true}, 
				{css:{top: -50}}),
			TweenMax.fromTo($('#clouds .r1'), 1, 
				{css:{top: 300}, immediateRender:true}, 
				{css:{top: -100}})
			]),
	  800, // scroll duration of tween
	  -350
	  );
	controller.addTween('#under-sky h2', TweenMax.from( $('#under-sky h2'), .75, {css:{letterSpacing:20,opacity:0}, ease:Quad.easeOut}),0 , -150);
	$('#what-we-do .block').css('position','relative').each(function() {
		controller.addTween('#what-we-do', TweenMax.from( $(this), 1, {delay:Math.random()*.2,css:{left:Math.random()*200-100,top:Math.random()*200-100,opacity:0}, ease:Back.easeOut}), 0, -200);
	});
});