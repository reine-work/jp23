$(window).on('orientationchange resize load', function() {
    ww = $(window).width();
    if (ww < 768) {

        $(".dashboard-video-label").click(() => {
            $(".suggested-videos").slideToggle();
        });

        $(".dashboard-video-label").click(() => {
            $(".dashboard-overlay").toggle();
        });

        $(".dashboard-video-label").click(() => {
            $(".caret-toggle").toggleClass('icon-flip');
        });

        $('#suggVid1, #suggVid2, #suggVid3').on('show.bs.modal', function(e) {
            $(".suggested-videos").hide();
            $(".dashboard-overlay").hide();
            $(".dashboard-video-label").hide();
        });

        $('#suggVid1, #suggVid2, #suggVid3').on('hidden.bs.modal', function(e) {
            $(".dashboard-video-label").show();
        });

        $('#suggVid1, #suggVid2, #suggVid3').modal({
            show: false
        }).on('hidden.bs.modal', function() {
            $(this).find('video')[0].pause();
        });

    }
    if (ww > 767 && ww < 1023) {
        $('#suggVid1, #suggVid2, #suggVid3').on('show.bs.modal', function(e) {
            $(".suggested-videos").hide();
        });

        $('#suggVid1, #suggVid2, #suggVid3').on('hidden.bs.modal', function(e) {
            $(".suggested-videos").show();
        });
    }
    if (ww > 1023) {
        $('#suggVid1, #suggVid2, #suggVid3').on('show.bs.modal', function(e) {
            $(".suggested-videos").hide();
        });

        $('#suggVid1, #suggVid2, #suggVid3').on('hidden.bs.modal', function(e) {
            $(".suggested-videos").show();
        });
    }
    // if (ww < 1024) {
    //     $('#sharefriends-modal').on('show.bs.modal', function(e) {
    //         $("body").toggleClass('sidebar-gone');
    //         $("body").toggleClass('sidebar-show');
    //     });
    // }
});