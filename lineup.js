// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("centered1").style.fontSize = "50px";
  } else {
    document.getElementById("centered1").style.fontSize = "90px";
  }
}

$(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 300);
  });