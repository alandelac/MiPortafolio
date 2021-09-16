$(function () {

    $('#ninjaSurvivorModal').on('show.bs.modal', function (e) {

        $('#ninjaSurvivorBtnImage').addClass('opacity-50');

    });

    $('#ninjaSurvivorModal').on('hidden.bs.modal', function (e) {

        $('#ninjaSurvivorBtnImage').removeClass('opacity-50');
    
    });

    $("#web-tab").on('show.bs.tab', function(e){
        $("#web-tab").removeClass('bg-dark text-light');
    });
    $("#web-tab").on('hide.bs.tab', function(e){
        $("#web-tab").addClass('bg-dark text-light');
    });
    
    $("#game-tab").on('show.bs.tab', function(e){
        $("#game-tab").removeClass('bg-dark text-light');
    });
    $("#game-tab").on('hide.bs.tab', function(e){
        $("#game-tab").removeClass('bg-light text-dark');
        $("#game-tab").addClass('bg-dark text-light');
    });

    $("#app-tab").on('show.bs.tab', function(e){
        $("#app-tab").removeClass('bg-dark text-light');
    });
    $("#app-tab").on('hide.bs.tab', function(e){
        $("#app-tab").addClass('bg-dark text-light');
    });

    $("#desktop-tab").on('show.bs.tab', function(e){
        $("#desktop-tab").removeClass('bg-dark text-light');
    });
    $("#desktop-tab").on('hide.bs.tab', function(e){
        $("#desktop-tab").addClass('bg-dark text-light');
    });

    $("#noProgram-tab").on('show.bs.tab', function(e){
        $("#noProgram-tab").removeClass('bg-dark text-light');
    });
    $("#noProgram-tab").on('hide.bs.tab', function(e){
        $("#noProgram-tab").addClass('bg-dark text-light');
    });

});

var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");
        function loadVideo(iframe) {
            $.getJSON(reqURL + iframe.getAttribute('cid'),
                function (data) {
                    var videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
                    console.log(videoNumber);
                    var link = data.items[videoNumber].link;
                    id = link.substr(link.indexOf("=") + 1);
                    iframe.setAttribute("src", "https://youtube.com/embed/" + id + "?controls=0&autoplay=1");
                }
            );
        }
        var iframes = document.getElementsByClassName('latestVideoEmbed');
        for (var i = 0, len = iframes.length; i < len; i++) {
            loadVideo(iframes[i]);
        }