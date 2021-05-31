$(document).ready(function(){
    $('.active-menu-top').removeClass('active-menu-top');
    $('.active-menu').removeClass('active-menu');

    if ( typeof is_parent !== 'undefined' ){
    	$('.'+active).addClass('active-menu');
    }
    else{
	    $('.'+active+' a').addClass('active-menu');
	    var parent_menu = $('.'+active).attr('data-parentmenu');
	    $('#'+parent_menu).addClass('active-menu-top');
	    $('.'+active).parent().addClass('in');
	}
});