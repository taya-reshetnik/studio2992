$(".container").scroll(function(){
  checkScroll();
  var scroll = $(".container").scrollTop();
  const deg = -0.2 * scroll;
  $('.rotate').css('transform', `rotate(${deg}deg)`);
})

$(document).ready(function(){
  $(".cont").css("min-height",$(window).height());
  $(".centerVert, .cont iframe, .horCont, .horSmall, .horSmall video").css("height",$(window).height()*0.95);
})

var videos = document.getElementsByTagName("video"), fraction = 0.7;

function checkScroll() {

    for(var i = 0; i < videos.length; i++) {
      // console.log(videos.length);
        var video = videos[i];
        var x = video.offsetLeft, y = video.offsetTop - $(".container").scrollTop(), w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;
            // console.log(b);

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                if (video.currentTime <= 0 || video.paused) {
                    video.play();
                }
            } else {
                if (!video.paused) {
                    video.pause();
                }
            }
    }

}

$(".container").on('scroll', checkScroll, false);
$(".container").on('resize', checkScroll, false);