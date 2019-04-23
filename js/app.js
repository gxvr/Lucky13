$(".close-icon").click(function () {
    $("#about-wrapper").fadeTo("slow", 0.01, function () {
        $("#about-wrapper").slideUp("slow", function () {
            $(this).remove();
        });
    });
});

$(window).load(function () {
    $("#sidebar-preview").twentytwenty();
});
