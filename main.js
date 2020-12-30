

function toggleleftsidebar(){
    document.getElementById('leftsidebar').classList.toggle('active');
}

$(document).ready(function() {
    var seviye = 25;
    var yukseklik = seviye / $(window).height();
    var genislik = seviye / $(window).width();
    $("body").mousemove(function(e){
        var sayfaX = e.pageX - ($(window).width() / 2);
        var sayfaY = e.pageY - ($(window).height() / 2);
        var yenidegerX = genislik * sayfaX * -1 - 25;
        var yenidegerY = yukseklik * sayfaY * -1 - 50;
        $('div.dinamik-background').css("background-position", yenidegerX+"px     "+yenidegerY+"px");
    });
});
