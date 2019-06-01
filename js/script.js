


    /// loading website

    jQuery(window).load(function () {
        $(".loader").fadeOut(500, function () {
            $(".loading").fadeOut(500);
            $("body").css("overflow-y", "auto");
        });
    });

