


    /// loading website

    jQuery(window).load(function () {
        $(".loader").fadeOut(200, function () {
            $(".loading").fadeOut(200);
            $("body").css("overflow-y", "auto");
        });
    });

