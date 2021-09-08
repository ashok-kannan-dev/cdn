$(document).ready(function() {
    $(".mobile-menu").click(function() {
        $("nav.header_sec").addClass("menu_open");
    });
    $(".cloe-btn").click(function() {
        $("nav.header_sec").removeClass("menu_open");
    });
});