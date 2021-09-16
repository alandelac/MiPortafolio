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