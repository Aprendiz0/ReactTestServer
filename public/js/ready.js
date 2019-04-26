var valores = {};
var currentUser;

$(document).ready(function () {

  if (!getQueryStringValue("token")) {
    return;
  }

  ajustLastItem();
  loadPage("home", "Room Control");
  $("#d_ip").html("Host: " + window.location.host);

  $(window).resize(function () {
    ajustLastItem();
  });

  $("#slide-out li").click(function () {
    let va = setInterval(ajustLastItem, 0);
    setTimeout(function () { clearInterval(va); }, 500);
  });

  $.each($.cookie(), function (i, val) {
    if (i.substring(0, 3) == "c_b") {
      if (val == "clear")
        $("#" + i.substring(2)).hide();
      else
        $("#" + i.substring(2)).show();
    }
  });

  setInterval(kappa, 100);

  function kappa() {
    $('.sidenav-overlay').each(function () {

      $b = $("main, .fixed-action-btn");

      if ($(this).is(":visible") && !$b.hasClass("side-blur"))
        $b.addClass("side-blur");
      else if (!$(this).is(":visible") && $b.hasClass("side-blur"))
        $b.removeClass("side-blur");

    });
  }

  function ajustLastItem() {
    $last = $("#slide-out li").last();
    if (!$last.get(0)) return;

    let margin = $(window).height() - $last.position().top - $last.children().outerHeight(true) + (($last.children().outerHeight(true) - $last.children().outerHeight()) / 2);
    if (margin >= 0) $last.css("margin-top", margin);
  }
});