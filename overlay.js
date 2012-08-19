/*
	desarrollado por jpgrafico
*/
var jp_overlay = function(url_img, width_img, height_img, opacity_img){
	//nuevos elementos contenedores
	$('body').append('<div class="overlay_content"></div>');
	$('body > *').not('.overlay_content').appendTo('.overlay_content');

	//variables
	var img_content     = $('.overlay_content').eq(1);
	var element_content = $('.overlay_content').eq(0);
	var url_img         = url_img;
	var height_img      = height_img;
	var width_img       = width_img;
	var opacity_img     = opacity_img;
	
	//CONTENEDOR DEL PRINCIPAL
	element_content.css({
		'position':'relative',
		'z-index': 10
	});
	element_content.find('> *').css({
		'position':'relative'
	})

	//CONTENDOR DE LA IMG
	img_content.append('<div><img /></div>');
	img_content.css({
		'position':'absolute',
		'top':0,
		'left':0,
		'width':'100%',
		'height': height_img,
		'display': 'block',
		'opacity': opacity_img,
	}).find('div').css({
		'position': 'relative',
		'width':width_img,
		'margin':'0 auto'
	}).find('img').attr({
		'src':url_img
	});
}