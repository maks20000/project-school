$(function () {
    let openned;
    let hide_menu = $(".hide-menu");
    hide_menu.on('click',function() {
        var target = $(this).attr("target");
        $("#"+target).toggle();
    })
});