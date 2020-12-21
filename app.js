$(document).ready(function () {
    // get the elements
    let tutorialList = $('.three-col-outer-layer .tabber-sec ul li');
    let tutorialConent = $('.three-col-outer-layer .center-col .demo-content');
    let keypadSteps = $('.three-col-outer-layer .left-col .keypad-step');
    let step3ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(3)');



    // initial slidedown 
    slideDownHandler();
    step3ListItem.click(cmdKeyHightlight);

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

    let nextButton = $('.three-col-outer-layer .center-col .demo-content .card button');
    nextButton.click(function () {
        let currentButton = $(this);
        let nextFilter = $(this).closest('.demo-content').attr('data-filter');
        let nextFilterforKeypad = $(this).closest('.demo-content').attr('data-keypad');
        console.log(nextFilterforKeypad);
        setTimeout(function () {
            $('.three-col-outer-layer .tabber-sec ul li' + nextFilter).removeClass('current');
            $('.three-col-outer-layer .tabber-sec ul li' + nextFilter).next().addClass('current');
            currentButton.closest('.demo-content').removeClass('current');
            currentButton.closest('.demo-content').next().addClass('current');
            $('#' + nextFilterforKeypad).removeClass('current');
            $('#' + nextFilterforKeypad).next().addClass('current');
        }, 500);
    });

    // slideDownHandler
    function slideDownHandler() {
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .description').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .description').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .btn').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .btn').hide();

        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .btn').hide();
        $('.three-col-outer-layer .center-col .heading').hide();
        $('.three-col-outer-layer .center-col .description').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] li:first-child').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] li:nth-child(2)').hide();

        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .description').slideDown(1500);
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .description').slideDown(1500);
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .btn').slideDown(1500);
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .btn').slideDown(1500);
        $('.three-col-outer-layer .center-col .heading').slideDown(1500);
        $('.three-col-outer-layer .center-col .description').slideDown(1500);
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] li:first-child').slideDown(1500);

    }
    // Replay Button Oncick Action
    function replayDivHandler() {
        alert('Replay Action');
    }
    let replayDivForStep3 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] .replay');

    replayDivForStep3.click(function () {
        slideDownHandler();
        keys.removeClass('playing');
        cmdKeyHightlight();
    });

    function playSound(e) {
        const keyCode = $(this).attr('data-key');;
        // console.log(keyCode);
        const audio = $(`audio[data-key="${keyCode}"]`);
        // console.log(audio);
        const key = $(`.key[data-key="${keyCode}"]`);
        // console.log(key);
        if (!audio) return; //stop the fun all together
        audio.currentTime = 0; //rewind to the start
        audio.get(0).play();

    }

    const keys = $('.three-col-outer-layer .left-col .clickable-keys .keys ul li.action');

    // onclick of keys Handler 

    keys.click(playSound);
    // keys 
    let cmdKeySrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Cmd-key.png';
    let topOptionKeyImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-btn.png';
    let topOptionHigKeyImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Arm-disarm-hightlight-key.png';
    let cmdKeyHigImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Cmd-highlight-key.png';
    let Key1ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-1.png';
    let Key2ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-2-new.png';
    let Key3ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-3.png';
    let Key4ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-4.png';
    let Key1HigImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-1-highlight.png';
    let Key2HigImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-2-highlight.png';
    let Key3HigImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-3-highlight.png';
    let Key4HigImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-4-hightlight.png';

    // Display status images
    let fridayDisplayImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Fri-06.png';
    let armDisArmImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Arm-disarm.png';
    let enterCodeKeyImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Enter-code.png';
    let enterCodeKey1ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Enter-code-1.png';
    let enterCodeKey2ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Enter-code-2.png';
    let enterCodeKey3ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Enter-code-3.png';
    let enterCodeKey4ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Enter-code-4.png';

    let exitImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit.png';

    let armedIndicator = $('#red');

    let cmdKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:last-child');
    let step3NextList = $('.three-col-outer-layer .center-col ol li:nth-child(2)');
    let step3NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] .btn');
    let topRowFirstKeyItem = $('.three-col-outer-layer .left-col .keypad3  ul.top-keys li:first-child');
    let firstNumKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:first-child');
    let displayStatus = $('.three-col-outer-layer .left-col .keypad3 .display-stauts img');


    function cmdKeyHightlight() {
        step3NextList.nextAll().hide();
        step3NextSectionBtn.hide();
        cmdKey.addClass('playing');
        cmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        cmdKey.click(firstTimeCmdKeyHandler);
    }

    function firstTimeCmdKeyHandler() {
        armedIndicator.removeClass('red');
        displayStatus.attr('src', armDisArmImgSrc);
        cmdKey.find('img').attr('src', cmdKeySrc);
        step3NextList.slideDown(500);
        // $('.three-col-outer-layer .center-col ol li:nth-child(-n+2)').hide();
        topRowFirstKeyItem.parent().addClass('playing');
        topRowFirstKeyItem.find('img').attr('src', topOptionHigKeyImgSrc);

        topLeftKeyHightlight();
    }
    function topLeftKeyHightlight() {
        // cmdKey.parent().removeClass('.playing');
        topRowFirstKeyItem.click(function () {
            topRowFirstKeyItem.removeClass('playing');
            displayStatus.attr('src', enterCodeKeyImgSrc);
            topRowFirstKeyItem.find('img').attr('src', topOptionKeyImgSrc);
            step3NextList.next().slideDown(500);
            firstNumKey.addClass('playing');
            firstNumKey.find('img').attr('src', Key1HigImgSrc);
            firstKeyHightlight();
        });

    }
    function firstKeyHightlight() {
        firstNumKey.click(function () {
            $(this).removeClass('playing');
            displayStatus.attr('src', enterCodeKey1ImgSrc);
            $(this).find('img').attr('src', Key1ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key2HigImgSrc);
            secondKeyHightlight();
        });

    }
    function secondKeyHightlight() {
        firstNumKey.next().click(function () {
            $(this).removeClass('playing');
            displayStatus.attr('src', enterCodeKey2ImgSrc);
            $(this).find('img').attr('src', Key2ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key3HigImgSrc);
            thirdKeyHightlight();
        });
    }
    function thirdKeyHightlight() {
        firstNumKey.next().next().click(function () {
            $(this).removeClass('playing');
            displayStatus.attr('src', enterCodeKey3ImgSrc);
            $(this).find('img').attr('src', Key3ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key4HigImgSrc);
            fourthKeyHightlight();
        });

    }
    function fourthKeyHightlight() {
        firstNumKey.next().next().next().click(function () {
            $(this).removeClass('playing');
            displayStatus.attr('src', enterCodeKey4ImgSrc);
            $(this).find('img').attr('src', Key4ImgSrc);
            console.log('Sequence done.');
            step3NextList.next().next().slideDown(500);
            cmdKey.addClass('playing');
            cmdKey.find('img').attr('src', cmdKeyHigImgSrc);
            finalCmdKeyHightlight();
        });

    }


    function finalCmdKeyHightlight() {
        cmdKey.off('click');
        cmdKey.click(function () {
            $(this).find('img').attr('src', cmdKeySrc);
            // console.log('test');
            armedIndicator.addClass('red');
            displayStatus.attr('src', exitImgSrc);
            $(this).removeClass('playing');
            step3NextList.next().next().next().slideDown(500);
            step3NextSectionBtn.slideDown(500);
            const num1 = 1, num2 = 3;
            let exitArray = ['https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-10.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-9.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-8.png'];
            for (let i = num1; i <= num2; i++) {
                setTimeout(() => {
                    let currentImage = exitArray[i - 1];
                    displayStatus.attr('src', currentImage);
                    // console.log(currentImage);
                }, i * 1000);
                // d();
            }
            // function d() {
            //     console.log('hello D');
            //     displayStatus.attr('src', fridayDisplayImgSrc);
            // }

        });
    }
    let step2NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] button');
    step2NextSectionBtn.click(function () {
        slideDownHandler();
        cmdKeyHightlight();
    });




});


