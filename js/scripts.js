$(function () {
    let openned;
    let hide_menu = $(".hide-menu");
    hide_menu.on('click',function() {
        var target = $(this).attr("target");
        $(openned).toggleClass("visible");
        if (openned!=="#"+target) {
            $("#"+target).toggleClass("visible");
            openned="#"+target;
        } else openned=undefined;
    })
});