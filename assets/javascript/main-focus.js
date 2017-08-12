$(function() {

    if(!localStorage.getItem('permanentTask')) {
        taskNotSet();
    } else {
        taskSet();
    }
    
    function taskNotSet() {
        $('.focusBox').hide();
        $('input[name=mainFocusItem').show();
    }

    function taskSet() {
        $('.focusBox').show();
        $('input[name=mainFocusItem').hide();
        $('.focusItem').append(localStorage.getItem('permanentTask'));
    }

    $('input[name=mainFocusItem').keydown(function(e) {
        if (e.keyCode == 13) {
            $('.focusBox').show();
            $(this).hide();
            var mainFocusAdd = $('input[name=mainFocusItem]').val();
            localStorage.setItem('permanentTask', mainFocusAdd);
            $('.focusItem').append('<p class="deleteLater">' + mainFocusAdd + '</p>');
        } 
    });

    $('.focusTrash').click(function(){
        $('input[name=mainFocusItem').show();
        $('.focusBox').hide();
        localStorage.removeItem("permanentTask");
    });

    $('.focusCheckbox').click(function(){
        $('.focusItem').toggleClass('strike');
    })




    /*IF LOCAL STORAGE IS NOT ENABLED    
    $('.focusBox').hide(); 

    $('input[name=mainFocusItem').keydown(function(e) {
        if (e.keyCode == 13) {
            $('.focusBox').show();
            var mainFocusAdd = $('input[name=mainFocusItem]').val();
            $('.focusItem').append('<p class="deleteLater">' + mainFocusAdd + '</p>');
            $(this).hide();
        } 
    });

    $('.focusTrash').click(function(){
        $('input[name=mainFocusItem').show();
        $('.deleteLater').remove();
        $('.focusBox').hide();
        $('input[name=mainFocusItem]').val("");
    });

    $('.focusCheckbox').click(function(){
        $('.focusItem').toggleClass('strike');
    })*/


}); // document.ready 