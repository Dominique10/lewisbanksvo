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
    //alert($(this).value());
    //alert("this.id"+this.id); // id of clicked li by directly accessing DOMElement property
    //alert("$(this).attr('id'))"+$(this).attr('id')); // jQuery's .attr() method, same but more verbose
    //alert("$(this).html())"+$(this).html()); // gets innerHTML of clicked li
    //alert("$(this).text())"+$(this).text()); // gets text contents of clicked li
 		$("ul.navBar>li>a.active").removeClass("active");
 		//console.log(this.getElementsByClassName());
 		//console.log()
 		//$(this).closest('li').addClass("active");
 		$(this).closest('li').children().addClass("active");
    //$(this).closest('li>a').addClass("active");
//     var items = document.getElementsByClassName("navBar li");
// 		//var items = ul.getElementsByTagName("li");
// 		for (var i = 0; i < items.length; ++i) {
//   		if ($("item[i]").hasClass("active")) {
//   			$("item[i]").removeClass("active");
//   }
// }  
        // if (this.id =="home") {
        //   $("#home").children().addClass("active");
        // }
        // else if (this.id =="sports") {
        //   $("#sports").children().addClass("active");
        // }
        if (this.id == "sports") {
          $(".middle").css("display","none");
          $(".how").css("display","none");
          $(".title").css("display","none");
          $(".bio").css("display","none");
          $(".commercial").css("display","none");
          $(".sports").css("display","block");
        }

        else if (this.id == "home") {
          $(".middle").css("display","block");
          $(".how").css("display","block");
          $(".title").css("display","block");
          $(".bio").css("display","block");
          $(".commercial").css("display","block");
          $(".sports").css("display","none");
        }
    })