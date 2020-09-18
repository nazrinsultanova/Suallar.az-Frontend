$(document).ready(function(){

    /*   Create Exam (Sınaq/Fenn)  */
        $('.radio-ul .radio-li').click(function() {
            $('.radio-ul .radio-li').removeClass('choosen');
            $(this).addClass('choosen');
        });

    /*-----Exam Selected Answer----*/
    
       $('.answer-variants-container').find('.variant-radios .radio-wrapper').click(function() {
           $('.variant-radios .radio-wrapper').removeClass('selected-answer');
           $(this).addClass('selected-answer');
    });
    
      /*------Breaktime Popup-----*/
      
      $('.breaktime').click(function () {
        $('.breaktime-container').css('display', 'flex');
     });

     $('.breaktime-container').find('.continue-exam').click(function () {
        $('.breaktime-container').css('display', 'none');
    });

    /*-----Show-time Popup---------*/

    $('.show-time').click(function () {
        $('.show-time-container').css('display', 'flex');
     });

     $('.show-time-container').find('.close').click(function () {
        $('.show-time-container').css('display', 'none');
    });

    /*------Finish Exam Popup--------*/

    $('.exam-questin-content-bottom-right').find('.finish-exam').click(function () {
        $('.finish-exam-container').css('display', 'flex');
        $(window).scrollTop(0);
     });

     $('.finish-exam-container').find('.continue').click(function () {
        $('.finish-exam-container').css('display', 'none');
    });

    /*-----Inform about wrong Popup-------*/

    $('.inform-about-wrong').click(function () {
        $('.inform-about-wrong-container').css('display', 'flex');
    });

     $('.inform-about-wrong-container').find('.exit').click(function () {
        $('.inform-about-wrong-container').css('display', 'none');
    });

    $('.inform-about-wrong-container').find('.send').click(function () {
        $('.inform-about-wrong-container').css('display', 'none');
        $('.thanks-for-informing-container').addClass('show');
    });

    $('.thanks-for-informing-container').find('.close').click(function () {
        $('.thanks-for-informing-container').removeClass('show');
    });


    /*---------Textarea Character Count-------*/

    $('textarea').keyup(function() {
    
        var characterCount = $(this).val().length,
            current = $('#current'),
            maximum = $('#maximum'),
            theCount = $('#the-count');

        current.text(characterCount);
           
      });

    /*---------Header User Submenu---------*/
    
    $('.profile-info').click(function(e){
        e.stopPropagation();
        const activeClassName = 'submenu-active';
        $('.user-name').find('.submenu-content').toggleClass(activeClassName);
    });

    $('body').click(function(){
        const activeClassName = 'submenu-active';
        $('.user-name').find('.submenu-content').removeClass(activeClassName);
    });

    /*-------Link-------*/
    $('.achievements-content-top-right').find('a').click(function() {
        $('.achievements-content-top-right a').removeClass('active');
        $(this).addClass('active');
    });

    $('.results-content-top-right').find('a').click(function() {
        $('.results-content-top-right a').removeClass('active');
        $(this).addClass('active');
    });

    /*-------Header Menu-------*/

    $('.header-menu .header-menu-item').click(function() {
        $('.header-menu-item').removeClass('active');
        $(this).addClass('active');
    });


    /*--------Account menu--------*/

    $('.account-content-bottom-left').find('.account-ul .account-li').click(function() {
        $('.account-ul .account-li').removeClass('active');
        $(this).addClass('active'); 
   });

    $('.account-content-bottom-right').find('.save-info').click(function(){
        $('.account-content-bottom-right input').filter(function () {
            if (($.trim(this.value).length == 0) && ($(this).prop('required'))) {
                $(this).css("border", "0.1rem solid rgba(235, 87, 87, 0.5)");
                $(this).siblings('.warning-title').addClass('show');
                $('label').css('margin-bottom', '1.2rem');
            } 

            else if($.trim(this.value).length != 0)
            {
                $(this).siblings('.warning-title').removeClass('show');
                $(this).css("border", "0.1rem solid rgba(4, 37, 96, 0.1)");
            }
        });
    });


    /*------------Upload Image---------*/
 
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".change-profile").on('click', function() {
       $(".file-upload").click();
    });


    /*----------Vertical Chart Info----------*/

    $('.score-chart-top').find('.question-mark').click(function(e){
        e.stopPropagation();
        $('.score-chart-top').children('.chart-info').toggleClass('show');
    });

    $(document).click(function() { 
        $('.score-chart-top').children('.chart-info').removeClass('show');
    });

    
    /*----------Horizontal Chart Info----------*/

    $('.score-chart-top').find('.question-icon').click(function(e){
        e.stopPropagation();
        $('.score-chart-top').children('.horizontal-chart-info').toggleClass('show');
    });

    $(document).click(function() { 
        $('.score-chart-top').children('.horizontal-chart-info').removeClass('show');
    });

});
 