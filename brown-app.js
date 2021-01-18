$(document).ready(function () {
    // get the elements
    let tutorialList = $('.three-col-outer-layer .tabber-sec ul li');
    let tutorialConent = $('.three-col-outer-layer .center-col .demo-content');
    let keypadSteps = $('.three-col-outer-layer .left-col .keypad-step');
    let step2ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(2)');
    let step3ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(3)');
    let step4ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(4)');
    let step5ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(5)');
    let step6ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(6)');
    let step7ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(7)');
    let step8ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(8)');
    let step9ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(9)');
    let step10ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(10)');
    // nextButton 
    let nextButton = $('.three-col-outer-layer .center-col .demo-content .card .btn img');

    //get step3 elements and key image src
    let key0InactiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key0-inactive.png';
    let key1InactiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key1-inactive.png';
    let key2InactiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key2-inactive.png';
    let key3InactiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key3-inactive.png';
    let key4InactiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key4-inactive.png';
    let key5InactiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key5-inactive.png';
    let key6InactiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key6-inactive.png';
    let key7InactiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key7-inactive.png';
    let key8InactiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key8-inactive.png';
    let key9InactiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key9-inactive.png';
    let cmdInactiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Cmd-inactive.png';
    let escInactiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/ESC-inactive.png';
    let prevInactiveImgSrc = 'hhttps://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Prev-inactive.png';
    let nextInactiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Next-inactive.png';
    let entInactiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Ent-inactive.png';
    // active key image src elements 
    let key0ActiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key0-active.png';
    let key1ActiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key1-active.png';
    let key2ActiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key2-active.png';
    let key3ActiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key3-active.png';
    let key4ActiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key4-active.png';
    let key5ActiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key5-active.png';
    let key6ActiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key6-active.png';
    let key7ActiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key7-active.png';
    let key8ActiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key8-active.png';
    let key9ActiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Key9-active.png';
    let cmdActiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Cmd-active.png';
    let escActiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/ESC-active.png';
    let prevActiveImgSrc = 'hhttps://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Prev-active.png';
    let nextActiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Next-active.png';
    let entActiveImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Ent-active.png';

    let step3CmdKey = $('.three-col-outer-layer .left-col .keypad3 ul.number-keys  li:last-child');
    let step3NextList = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] ol li:nth-child(2)');
    let step3NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] .btn img');
    let step3FirstNumKey = $('.three-col-outer-layer .left-col .keypad3 ul.number-keys  li:first-child');
    let step3DisplayStatus = $('.three-col-outer-layer .left-col .keypad3 .display-status img');
    let step3EntKey = $('.three-col-outer-layer .left-col .keypad3 ul.menu-keys  li:last-child');



    // Next Button image src elements 
    let nextBtnImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Next-section-button.png';
    let nextBtnHoverImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Next-section-button-hover.png';

    // Next Button Hover function
    nextButton.hover(function () {
        nextButton.attr('src', nextBtnHoverImgSrc);
    }, function () {
        nextButton.attr('src', nextBtnImgSrc);
    });

    // initial slidedown 
    slideDownHandler();


    function tutorialListItemsHandler(e) {
        var tab_id = $(this).attr('data-tab');
        var tab_keypad = $(this).attr('data-keypad');
        tutorialList.removeClass('current');
        tutorialConent.removeClass('current');
        keypadSteps.removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
        $("#" + tab_keypad).addClass('current');
        // slidedown onclick of list items
        slideDownHandler();
    }
    // tutorialListItems Click action - right col items
    tutorialList.click(tutorialListItemsHandler);


    // onClick of nextbutton Function Handler
    nextButton.click(function () {
        let currentButton = $(this);
        let nextFilter = $(this).closest('.demo-content').attr('data-filter');
        let nextFilterforKeypad = $(this).closest('.demo-content').attr('data-keypad');
        setTimeout(function () {
            $('.three-col-outer-layer .tabber-sec ul li' + nextFilter).removeClass('current');
            $('.three-col-outer-layer .tabber-sec ul li' + nextFilter).next().addClass('current');
            currentButton.closest('.demo-content').removeClass('current');
            currentButton.closest('.demo-content').next().addClass('current');
            $('#' + nextFilterforKeypad).removeClass('current');
            $('#' + nextFilterforKeypad).next().addClass('current');
            slideDownHandler();
        }, 500);
    });

    // slideDownHandler
    function slideDownHandler() {
        $('.three-col-outer-layer .center-col .heading').hide();
        $('.three-col-outer-layer .center-col .description').hide();
        // step1 
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .description').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .btn').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .description').slideDown(1500);
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .btn').slideDown(1500);
        // step2
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .description').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .btn').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .btn').slideDown(1500);
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .description').slideDown(1500);
        // step3 
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] li:first-child').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] li:nth-child(2)').hide();
        $('.three-col-outer-layer .center-col .heading').slideDown(1500);
        $('.three-col-outer-layer .center-col .description').slideDown(1500);
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] li:first-child').slideDown(1500);
        // step4 slideDown 
        // $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] li:first-child').hide();
        // $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] li:nth-child(2)').hide();
        // $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] li:first-child').slideDown(1500);

    }

    // data key 1 beep sound play
    function playDefaultBeepSound() {
        let audio = $('audio[data-key="1"]');
        if (!audio) return; //stop the fun all together
        audio.currentTime = 0; //rewind to the start
        audio.get(0).play();
    }


    // Run step1-2-3-4 onclick elements 
    function commonNumKeysActiveHandler(firstNumKey, entKey, displayStatus) {
        firstNumKey.addClass('playing');
        firstNumKey.find('img').attr('src', key1ActiveImgSrc);
        firstNumKey.click(function () {
            playDefaultBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            // displayStatus.attr('src', enterCodeKey1ImgSrc);
            $(this).find('img').attr('src', key1InactiveImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', key2ActiveImgSrc);
            secondKeyHightlight();
        });
        function secondKeyHightlight() {
            firstNumKey.next().click(function () {
                playDefaultBeepSound();
                $(this).off('click');
                $(this).removeClass('playing');
                // displayStatus.attr('src', enterCodeKey2ImgSrc);
                $(this).find('img').attr('src', key2InactiveImgSrc);
                $(this).next().find('img').attr('src', key3ActiveImgSrc);
                $(this).next().addClass('playing');
                thirdKeyHightlight();
            });
        }
        function thirdKeyHightlight() {
            firstNumKey.next().next().click(function () {
                playDefaultBeepSound();
                $(this).off('click');
                $(this).removeClass('playing');
                $(this).find('img').attr('src', key3InactiveImgSrc);
                $(this).next().addClass('playing');
                $(this).next().find('img').attr('src', key4ActiveImgSrc);
                fourthKeyHightlight();
            });

        }
        function fourthKeyHightlight() {
            firstNumKey.next().next().next().click(function () {
                playDefaultBeepSound();
                $(this).off('click');
                $(this).removeClass('playing');
                $(this).find('img').attr('src', key4InactiveImgSrc);
                entKey.addClass('playing');
                entKey.find('img').attr('src', entActiveImgSrc);
                console.log('[step3] ENT key pressed..');
            });
        }

    }
    // Below fun will run once user reach to step3 
    step2ListItem.click(step3KeyOneActiveHandler);
    // step3 list item onclick handler 
    step3ListItem.click(function () {
        step3KeyOneActiveHandler();
    });
    function step3KeyOneActiveHandler() {
        commonNumKeysActiveHandler(step3FirstNumKey, step3EntKey, step3DisplayStatus);

    }

});


