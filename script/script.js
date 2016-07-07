jQuery(function($){
    	     $( '.menu-btn' ).click(function(){
    	     $('.responsive-menu').toggleClass('expand')
    	     })
        })

$(function(){
	function blinker() {
    $('.blink_me').fadeOut(1000);
    $('.blink_me').fadeIn(1000);
}

setInterval(blinker, 3000);
});

SC.initialize({
  client_id: '95ce484b988bfe2c552dad8fe64c351f'
});

var track_url = 'https://soundcloud.com/lewisbanksvoice/lewis-banks-commercial-demo';
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
  console.log('oEmbed response: ', oEmbed);
  console.log(oEmbed.html);
  $(".commercial").append('<iframe width="100%" height="200" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F127268567&show_artwork=true&auto_play=true"></iframe>');
  //$("iframe").css('display','none');
});

 $('ul').on('click', 'li', function(event){
 	console.log(this);
 	//console.log(this.a);

 		$("ul.navBar>li>a.active").removeClass("active");
 		//console.log(this.getElementsByClassName());
 		console.log()
 		$(this).closest('li').addClass("active");
 		$(this).closest('li a').addClass("active");
//     var items = document.getElementsByClassName("navBar li");
// 		//var items = ul.getElementsByTagName("li");
// 		for (var i = 0; i < items.length; ++i) {
//   		if ($("item[i]").hasClass("active")) {
//   			$("item[i]").removeClass("active");
//   }
// }

    })