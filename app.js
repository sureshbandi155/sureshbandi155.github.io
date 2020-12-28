$(document).ready(function () {
    // get the elements
    let tutorialList = $('.three-col-outer-layer .tabber-sec ul li');
    let tutorialConent = $('.three-col-outer-layer .center-col .demo-content');
    let keypadSteps = $('.three-col-outer-layer .left-col .keypad-step');
    let step3ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(3)');
    let step4ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(4)');
    let step5ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(5)');
    let step6ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(6)');
    let step7ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(7)');


    // nextButton 
    let nextButton = $('.three-col-outer-layer .center-col .demo-content .card .btn img');

    // step3Elements
    let replayDivForStep3 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] .replay');
    let replayDivForStep4 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] .replay');
    // step2
    let step2NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .btn img');

    const keys = $('.three-col-outer-layer .left-col .keys ul li.action');

    let nextBtnImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Next-section-button.png';
    let nextBtnHoverImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Next-section-button-hover.png';





    // Get keys Image src

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
    let Key7ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-7.png';
    let Key7HigImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-7-highlight.png';

    // Display status images
    let fridayDisplayImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Fri-06.png';
    let armDisArmImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Arm-disarm.png';
    let enterCodeKeyImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Enter-code.png';
    let enterCodeKey1ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Enter-code-1.png';
    let enterCodeKey2ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Enter-code-2.png';
    let enterCodeKey3ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Enter-code-3.png';
    let enterCodeKey4ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Enter-code-4.png';

    let exitImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit.png';


    // step3 elements 
    let cmdKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:last-child');
    let step3NextList = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] ol li:nth-child(2)');
    let step3NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] .btn img');
    let step3TopRowFirstKeyItem = $('.three-col-outer-layer .left-col .keypad3  ul.top-keys li:first-child');
    let step3FirstNumKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:first-child');
    let step3DisplayStatus = $('.three-col-outer-layer .left-col .keypad3 .display-stauts img');
    let Step3RedArmedIndicator = $('.three-col-outer-layer .left-col .keypad3 .indicator .light.red');

    // step4 elements 
    let step4CmdKey = $('.three-col-outer-layer .left-col .keypad4 ul.bottom-keys  li:last-child');
    let step4NextList = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] ol li:nth-child(2)');
    let step4TopRowLastKeyItem = $('.three-col-outer-layer .left-col .keypad4  ul.top-keys li:nth-child(4)');
    let step4FirstNumKey = $('.three-col-outer-layer .left-col .keypad4 ul.bottom-keys  li:first-child');
    let step4DisplayStatus = $('.three-col-outer-layer .left-col .keypad4 .display-stauts img');
    let Step4RedArmedIndicator = $('.three-col-outer-layer .left-col .keypad4 .indicator .light.red');

    // Get step5 elements
    let step5CmdKey = $('.three-col-outer-layer .left-col .keypad5 ul.bottom-keys  li:last-child');
    let step5NextList = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol li:nth-child(2)');
    let step5TopRowLastKeyItem = $('.three-col-outer-layer .left-col .keypad5  ul.top-keys li:nth-child(4)');
    let step5TopRowAllKeyItem = $('.three-col-outer-layer .left-col .keypad5  ul.top-keys li:nth-child(-n+4)');
    let step5BypKeyItem = $('.three-col-outer-layer .left-col .keypad5  ul.top-keys li:nth-child(3)');
    let step5FirstNumKey = $('.three-col-outer-layer .left-col .keypad5 ul.bottom-keys  li:first-child');
    let step5BackKey = $('.three-col-outer-layer .left-col .keypad5 ul.bottom-keys  li:nth-last-child(2)');
    let step5DisplayStatus = $('.three-col-outer-layer .left-col .keypad5 .display-stauts img');
    let step5DescriptionPare = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] .description>p');
    let step5NextStepButton = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] .btn img');
    let step5FirstFourListItems = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol li:nth-child(-n+4)');
    let step5BackBtnHelpText = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol p.back-btn-text');
    let step5Key7Key = $('.three-col-outer-layer .left-col .keypad5  ul.bottom-keys li:nth-child(7)');
    let replayDivForStep5 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] .replay');
    let step5CmdKeyCount = 0;
    let menuNoYesImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Menu-no-yes.png';
    let alaramSilenceImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Alarm-silence.png';
    let sensorResetImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Sensor-reset.png';
    let doorAccessImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Door-access.png';
    let armedAreasImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Armed-areas.png';
    let outputsOnOffImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Outputs-on-off.png';
    let zoneStatusImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Zone-status.png';
    let byPasszonesImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Bypass-zones.png';
    let byPasszoneRstBypImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Bypass-zone-rst-byp.png';
    let byPasszoneWith7RstBypImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Bypass-zone-7-rst-byp.png';
    let backKeyImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Back-key.png';
    let backHigKeyImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/backKey-highlight.png';



    // Get step6 elements
    let step6CmdKey = $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:last-child');
    let step6NextList = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] ol li:nth-child(2)');
    let step6TopRowLastKeyItem = $('.three-col-outer-layer .left-col .keypad6  ul.top-keys li:nth-child(4)');
    let step6TopRowAllKeyItem = $('.three-col-outer-layer .left-col .keypad6  ul.top-keys li:nth-child(-n+4)');
    let step6FirstNumKey = $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:first-child');
    let step6DisplayStatus = $('.three-col-outer-layer .left-col .keypad6 .display-stauts img');
    let step6DescriptionPare = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] .description>p');
    let step6NextStepButton = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] .btn img');
    let step6FirstFourListItems = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] ol li:nth-child(-n+4)');
    let replayDivForStep6 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] .replay');
    let step6CmdKeyCount = 0;


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
        console.log('#' + tab_keypad);
        tutorialList.removeClass('current');
        tutorialConent.removeClass('current');
        keypadSteps.removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
        $("#" + tab_keypad).addClass('current');

        // slidedown onclick of list items
        slideDownHandler();
        // if ($(this).hasClass('current')) {
        //     $(this).off('click');
        // }
        // else return;
        // console.log($(this).hasClass('current'));
    }
    // tutorialListItems Click action - right col items
    tutorialList.click(tutorialListItemsHandler);


    // onClick of nextbutton Function Handler
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
            slideDownHandler();
        }, 500);
    });

    // slideDownHandler
    function slideDownHandler() {
        $('.three-col-outer-layer .center-col .heading').hide();
        $('.three-col-outer-layer .center-col .description').hide();

        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .description').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .btn').hide();

        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .description').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .btn').hide();

        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] li:first-child').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] li:nth-child(2)').hide();

        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .description').slideDown(1500);
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .btn').slideDown(1500);

        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .btn').slideDown(1500);
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .description').slideDown(1500);
        $('.three-col-outer-layer .center-col .heading').slideDown(1500);
        $('.three-col-outer-layer .center-col .description').slideDown(1500);
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] li:first-child').slideDown(1500);

        // step4 slideDown 
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] li:first-child').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] li:nth-child(2)').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] li:first-child').slideDown(1500);
        // step5 slideDown 
        step5DescriptionPare.show();
        step5NextStepButton.hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] li:first-child').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] li:nth-child(n+2)').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol p').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] li:first-child').slideDown(1500);
    }





    // Playsound handler 
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


    // onclick of keys Handler 

    keys.click(playSound);


    // step2 next btn onclick handler 
    step2NextSectionBtn.click(function () {
        slideDownHandler();
        cmdKeyHightlight();
        redArmIndicationOFF(Step3RedArmedIndicator);
        step3ResetExistingStateActions();

    });

    // step3 next btn onclick handler 
    step3NextSectionBtn.click(function () {
        slideDownHandler();
        redArmIndicationON(Step4RedArmedIndicator);
        step4CmdKeyHightlight();
        step4ResetExistingStateActions();

    });

    // step3 list item onclick handler 
    step3ListItem.click(function () {
        step3DisplayStatus.attr('src', fridayDisplayImgSrc);
        cmdKeyHightlight();
        redArmIndicationOFF(Step3RedArmedIndicator);
        step3ResetExistingStateActions();

    });
    // step4 list item onclick handler 
    step4ListItem.click(function () {
        redArmIndicationON(Step4RedArmedIndicator);
        step4CmdKeyHightlight();
        step4ResetExistingStateActions();
    });

    function redArmIndicationON(indicatorEle) {
        indicatorEle.addClass('red-active');

    }
    function redArmIndicationOFF(indicatorEle) {
        indicatorEle.removeClass('red-active');

    }
    // Below functions will run once user reach to step4 
    function step4CmdKeyHightlight() {
        step4NextList.nextAll().hide();
        step4CmdKey.addClass('playing');
        step4CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        step4CmdKey.click(function () {
            $(this).off('click');
            step4DisplayStatus.attr('src', armDisArmImgSrc);
            step4CmdKey.find('img').attr('src', cmdKeySrc);
            step4NextList.slideDown(500);
            step4TopRowLastKeyItem.addClass('playing');
            step4TopRowLastKeyItem.find('img').attr('src', topOptionHigKeyImgSrc);
            step4TopRowRightKeyHightlight();
        });

    }

    function step4TopRowRightKeyHightlight() {
        // cmdKey.parent().removeClass('.playing');
        step4TopRowLastKeyItem.click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step4DisplayStatus.attr('src', enterCodeKeyImgSrc);
            $(this).find('img').attr('src', topOptionKeyImgSrc);
            step4NextList.next().slideDown(500);
            step4FirstNumKey.addClass('playing');
            step4FirstNumKey.find('img').attr('src', Key1HigImgSrc);
            step4FirstKeyHightlight();
        });

    }
    function step4FirstKeyHightlight() {
        step4FirstNumKey.click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step4DisplayStatus.attr('src', enterCodeKey1ImgSrc);
            $(this).find('img').attr('src', Key1ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key2HigImgSrc);
            step4SecondKeyHightlight();
        });

    }
    function step4SecondKeyHightlight() {
        step4FirstNumKey.next().click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step4DisplayStatus.attr('src', enterCodeKey2ImgSrc);
            $(this).find('img').attr('src', Key2ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key3HigImgSrc);
            step4ThirdKeyHightlight();
        });
    }
    function step4ThirdKeyHightlight() {
        step4FirstNumKey.next().next().click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step4DisplayStatus.attr('src', enterCodeKey3ImgSrc);
            $(this).find('img').attr('src', Key3ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key4HigImgSrc);
            step4FourthKeyHightlight();
        });

    }
    function step4FourthKeyHightlight() {
        step4FirstNumKey.next().next().next().click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step4DisplayStatus.attr('src', enterCodeKey4ImgSrc);
            $(this).find('img').attr('src', Key4ImgSrc);
            step4NextList.next().next().slideDown(500);
            step4CmdKey.addClass('playing');
            step4CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
            step4FinalCmdKeyHightlight();
        });
    }

    function step4FinalCmdKeyHightlight() {
        step4CmdKey.off('click');
        step4CmdKey.click(function () {
            // alert('test');
            $(this).off('click');
            $(this).find('img').attr('src', cmdKeySrc);
            step4DisplayStatus.attr('src', fridayDisplayImgSrc);
            $(this).removeClass('playing');
            redArmIndicationOFF(Step4RedArmedIndicator);
            step4NextList.next().next().next().slideDown(500);
        });
    }
    replayDivForStep4.click(function () {
        step4DisplayStatus.attr('src', fridayDisplayImgSrc);
        slideDownHandler();
        keys.removeClass('playing');
        step4CmdKeyHightlight();
        step4ResetExistingStateActions();
    });

    // clear all functions and actions once you click step2 and step3 next btn and replaybutton
    function step3ResetExistingStateActions() {
        cmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        step3TopRowFirstKeyItem.find('img').attr('src', topOptionKeyImgSrc);
        step3FirstNumKey.find('img').attr('src', Key1ImgSrc);
        step3FirstNumKey.next().find('img').attr('src', Key2ImgSrc);
        step3FirstNumKey.next().next().find('img').attr('src', Key3ImgSrc);
        step3FirstNumKey.next().next().next().find('img').attr('src', Key4ImgSrc);
        keys.click(playSound);

    }
    function step4ResetExistingStateActions() {
        step4CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        step4TopRowLastKeyItem.find('img').attr('src', topOptionKeyImgSrc);
        step4FirstNumKey.find('img').attr('src', Key1ImgSrc);
        step4FirstNumKey.next().find('img').attr('src', Key2ImgSrc);
        step4FirstNumKey.next().next().find('img').attr('src', Key3ImgSrc);
        step4FirstNumKey.next().next().next().find('img').attr('src', Key4ImgSrc);
        keys.click(playSound);
    }

    // Below functions will run once user reach to step3 
    // // once one function is running don't play sound to other func
    // function dontPlaySoundHandler(topFirstLeftKey, firstKey, secondKey, thirdKey, fourthKey) {
    //     topFirstLeftKey.off('click');
    //     firstKey.off('click');
    //     secondKey.off('click');
    //     thirdKey.off('click');
    //     fourthKey.off('click');
    // }
    function cmdKeyHightlight() {
        step3NextList.nextAll().hide();
        step3NextSectionBtn.hide();
        cmdKey.addClass('playing');
        cmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        cmdKey.click(firstTimeCmdKeyHandler);
    }

    function firstTimeCmdKeyHandler() {
        $(this).removeClass('playing');
        cmdKey.off('click');
        redArmIndicationOFF(Step3RedArmedIndicator);
        step3DisplayStatus.attr('src', armDisArmImgSrc);
        cmdKey.find('img').attr('src', cmdKeySrc);
        step3NextList.slideDown(500);
        step3TopRowFirstKeyItem.addClass('playing');
        step3TopRowFirstKeyItem.find('img').attr('src', topOptionHigKeyImgSrc);
        topLeftKeyHightlight();
    }
    function topLeftKeyHightlight() {
        // cmdKey.parent().removeClass('.playing');
        step3TopRowFirstKeyItem.click(function () {
            $(this).off('click');
            step3TopRowFirstKeyItem.removeClass('playing');
            step3DisplayStatus.attr('src', enterCodeKeyImgSrc);
            step3TopRowFirstKeyItem.find('img').attr('src', topOptionKeyImgSrc);
            step3NextList.next().slideDown(500);
            step3FirstNumKey.addClass('playing');
            step3FirstNumKey.find('img').attr('src', Key1HigImgSrc);
            firstKeyHightlight();
        });

    }
    function firstKeyHightlight() {
        step3FirstNumKey.click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step3DisplayStatus.attr('src', enterCodeKey1ImgSrc);
            $(this).find('img').attr('src', Key1ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key2HigImgSrc);
            secondKeyHightlight();
        });

    }
    function secondKeyHightlight() {
        step3FirstNumKey.next().click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step3DisplayStatus.attr('src', enterCodeKey2ImgSrc);
            $(this).find('img').attr('src', Key2ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key3HigImgSrc);
            thirdKeyHightlight();
        });
    }
    function thirdKeyHightlight() {
        step3FirstNumKey.next().next().click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step3DisplayStatus.attr('src', enterCodeKey3ImgSrc);
            $(this).find('img').attr('src', Key3ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key4HigImgSrc);
            fourthKeyHightlight();
        });

    }
    function fourthKeyHightlight() {
        step3FirstNumKey.next().next().next().click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step3DisplayStatus.attr('src', enterCodeKey4ImgSrc);
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
            $(this).off('click');
            $(this).find('img').attr('src', cmdKeySrc);
            // console.log('test');
            redArmIndicationON(Step3RedArmedIndicator);
            step3DisplayStatus.attr('src', exitImgSrc);
            $(this).removeClass('playing');
            step3NextList.next().next().next().slideDown(500);
            const num1 = 1, num2 = 11;
            let exitArray = ['https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-10.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-9.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-8.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-7.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-6.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-5.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-4.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-3.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-2.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-1.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Fri-06.png'];
            for (let i = num1; i <= num2; i++) {
                setTimeout(() => {
                    let currentImage = exitArray[i - 1];
                    step3DisplayStatus.attr('src', currentImage);
                    // console.log(currentImage);
                    if (i === 2) {
                        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] ol p').show();
                    }
                    else if (i === 11) {
                        let longKeyAudio = $('audio[data-key="2"]');
                        longKeyAudio.get(0).play();
                        step3NextSectionBtn.slideDown(500);
                    }
                }, i * 500);
            }

        });
    }
    // Replay Button for step3 Onclick Action
    replayDivForStep3.click(function () {
        step3DisplayStatus.attr('src', fridayDisplayImgSrc);
        slideDownHandler();
        keys.removeClass('playing');
        cmdKeyHightlight();
        redArmIndicationOFF(Step3RedArmedIndicator);
        step3ResetExistingStateActions();

    });



    // Below functions will run once user reach to step5
    // step5 list item onclick handler 
    step5ListItem.click(function () {
        step5ResetExistingStateActions();
        step5CmdKeyHightlight();
    });

    function step5CmdKeyHightlight() {
        step5CmdKey.addClass('playing');
        step5CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        step5CmdKey.click(function () {
            step5CmdKeyCount++;
            step5DisplayStatus.attr('src', armDisArmImgSrc);
            // display menu image 
            if (step5CmdKeyCount === 2) {
                step5DisplayStatus.attr('src', menuNoYesImgSrc);
                $(this).off('click');
                step5CmdKey.find('img').attr('src', cmdKeySrc);
                step5NextList.slideDown(500);
                $(this).removeClass('playing');
                $(this).off('click');
                step5TopRowLastKeyItem.addClass('playing');
                step5TopRowLastKeyItem.find('img').attr('src', topOptionHigKeyImgSrc);
                step5TopRowRightKeyHightlight();
            }
        });
    }

    function step5TopRowRightKeyHightlight() {
        step5TopRowLastKeyItem.click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step5DisplayStatus.attr('src', enterCodeKeyImgSrc);
            $(this).find('img').attr('src', topOptionKeyImgSrc);
            step5FirstNumKey.addClass('playing');
            step5FirstNumKey.find('img').attr('src', Key1HigImgSrc);
            step5FirstKeyHightlight();
        });
    }
    function step5FirstKeyHightlight() {
        step5FirstNumKey.click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step5DisplayStatus.attr('src', enterCodeKey1ImgSrc);
            $(this).find('img').attr('src', Key1ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key2HigImgSrc);
            step5SecondKeyHightlight();
        });

    }
    function step5SecondKeyHightlight() {
        step5FirstNumKey.next().click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step5DisplayStatus.attr('src', enterCodeKey2ImgSrc);
            $(this).find('img').attr('src', Key2ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key3HigImgSrc);
            step5ThirdKeyHightlight();
        });
    }
    function step5ThirdKeyHightlight() {
        step5FirstNumKey.next().next().click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step5DisplayStatus.attr('src', enterCodeKey3ImgSrc);
            $(this).find('img').attr('src', Key3ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key4HigImgSrc);
            step5FourthKeyHightlight();
        });

    }
    function step5FourthKeyHightlight() {
        step5FirstNumKey.next().next().next().click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step5DisplayStatus.attr('src', enterCodeKey4ImgSrc);
            $(this).find('img').attr('src', Key4ImgSrc);
            step5NextList.next().slideDown(500);
            step5CmdKey.addClass('playing');
            step5CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
            step5MenuImgShowsHandler();
        });
    }
    function step5MenuImgShowsHandler() {
        let step5Menucount = 0;
        step5CmdKey.click(function () {
            $(this).click(playSound);
            step5Menucount += 1;
            // console.log(step5Menucount);
            switch (step5Menucount) {
                case 1:
                    step5DisplayStatus.attr('src', alaramSilenceImgSrc);
                    step5NextList.next().next().slideDown(500);
                    step5BackBtnHelpText.slideDown(500);
                    break;
                case 2:
                    step5DisplayStatus.attr('src', sensorResetImgSrc);
                    break;
                case 2:
                    step5DisplayStatus.attr('src', sensorResetImgSrc);
                    break;
                case 3:
                    step5DisplayStatus.attr('src', doorAccessImgSrc);
                    break;
                case 4:
                    step5DisplayStatus.attr('src', armedAreasImgSrc);
                    break;
                case 5:
                    step5DisplayStatus.attr('src', outputsOnOffImgSrc);
                    break;
                case 6:
                    step5DisplayStatus.attr('src', zoneStatusImgSrc);
                    break;
                case 7:
                    step5DisplayStatus.attr('src', byPasszonesImgSrc);
                    step5DescriptionPare.hide();
                    step5BackBtnHelpText.hide();
                    step5FirstFourListItems.hide();
                    step5NextList.next().next().next().hide();
                    $(this).off('click');
                    $(this).removeClass('playing');
                    $(this).find('img').attr('src', cmdKeySrc);
                    step5NextList.next().next().next().next().slideDown(500);
                    step5TopRowAllKeyItem.addClass('playing');
                    step5TopRowAllKeyItem.find('img').attr('src', topOptionHigKeyImgSrc);
                    bypassZonesHandler();
                    break;
                default:
                    break;
            }
        })

    }
    function bypassZonesHandler() {
        step5TopRowAllKeyItem.click(function () {
            step5TopRowAllKeyItem.off('click');
            step5TopRowAllKeyItem.find('img').attr('src', topOptionKeyImgSrc);
            step5TopRowAllKeyItem.removeClass('playing');
            step5NextList.next().next().next().next().next().slideDown(500);
            step5DisplayStatus.attr('src', byPasszoneRstBypImgSrc);
            step5Key7Key.addClass('playing');
            step5Key7Key.find('img').attr('src', Key7HigImgSrc);
            step7Key7Handler();
        })
    }
    function step7Key7Handler() {
        step5Key7Key.click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            $(this).find('img').attr('src', Key7ImgSrc);
            step5DisplayStatus.attr('src', byPasszoneWith7RstBypImgSrc);
            step5NextList.next().next().next().next().next().next().slideDown(500);
            step5BypKeyItem.addClass('playing');
            step5BypKeyItem.find('img').attr('src', topOptionHigKeyImgSrc);
            bypassZoneConfirmsHandler();
        })
    }
    function bypassZoneConfirmsHandler() {
        step5BypKeyItem.click(function () {
            $(this).off('click');
            $(this).find('img').attr('src', topOptionKeyImgSrc);
            $(this).removeClass('playing');
            step5NextList.next().next().next().next().next().next().next().slideDown(500);
            step5NextList.next().next().next().next().next().next().next().next().slideDown(500);
            step5DisplayStatus.attr('src', byPasszoneRstBypImgSrc);
            step5BackKey.addClass('playing');
            step5BackKey.find('img').attr('src', backHigKeyImgSrc);
            step5BackkeyHandler();
        })
    }
    function step5BackkeyHandler() {
        step5BackKey.click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            $(this).find('img').attr('src', backKeyImgSrc);
            step5NextStepButton.slideDown(500);
            step5DisplayStatus.attr('src', fridayDisplayImgSrc);

        })
    }
    // Replay Button for step5 Onclick Action
    replayDivForStep5.click(function () {
        slideDownHandler();
        keys.removeClass('playing');
        step5CmdKeyHightlight();
        step5ResetExistingStateActions();

    });
    // clear all functions and actions once you click replaybutton
    function step5ResetExistingStateActions() {
        step5DisplayStatus.attr('src', fridayDisplayImgSrc);
        step5CmdKeyCount = 0;
        step5CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        step5TopRowAllKeyItem.find('img').attr('src', topOptionKeyImgSrc);
        step5Key7Key.find('img').attr('src', Key7ImgSrc);
        step5BackKey.find('img').attr('src', backKeyImgSrc);
        step5FirstNumKey.find('img').attr('src', Key1ImgSrc);
        step5FirstNumKey.next().find('img').attr('src', Key2ImgSrc);
        step5FirstNumKey.next().next().find('img').attr('src', Key3ImgSrc);
        step5FirstNumKey.next().next().next().find('img').attr('src', Key4ImgSrc);
        keys.click(playSound);

    }




    // Below functions will run once user reach to step6
    // step6 list item onclick handler 
    step6ListItem.click(function () {
        // step5ResetExistingStateActions();
        step6CmdKeyHightlight();
    });

    function step6CmdKeyHightlight() {
        step6CmdKey.addClass('playing');
        step6CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        step6CmdKey.click(function () {
            step6CmdKeyCount++;
            step6DisplayStatus.attr('src', armDisArmImgSrc);
            // display menu image 
            if (step6CmdKeyCount === 2) {
                step6DisplayStatus.attr('src', menuNoYesImgSrc);
                $(this).off('click');
                step6CmdKey.find('img').attr('src', cmdKeySrc);
                step6NextList.slideDown(500);
                $(this).removeClass('playing');
                $(this).off('click');
                step6TopRowLastKeyItem.addClass('playing');
                step6TopRowLastKeyItem.find('img').attr('src', topOptionHigKeyImgSrc);
                step6TopRowRightKeyHightlight();
            }
        });
    }

    function step6TopRowRightKeyHightlight() {
        step6TopRowLastKeyItem.click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step6DisplayStatus.attr('src', enterCodeKeyImgSrc);
            $(this).find('img').attr('src', topOptionKeyImgSrc);
            step6FirstNumKey.addClass('playing');
            step6FirstNumKey.find('img').attr('src', Key1HigImgSrc);
            step6FirstKeyHightlight();
        });
    }
    function step6FirstKeyHightlight() {
        step6FirstNumKey.click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step6DisplayStatus.attr('src', enterCodeKey1ImgSrc);
            $(this).find('img').attr('src', Key1ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key2HigImgSrc);
            step6SecondKeyHightlight();
        });

    }
    function step6SecondKeyHightlight() {
        step6FirstNumKey.next().click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step6DisplayStatus.attr('src', enterCodeKey2ImgSrc);
            $(this).find('img').attr('src', Key2ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key3HigImgSrc);
            step6ThirdKeyHightlight();
        });
    }
    function step6ThirdKeyHightlight() {
        step6FirstNumKey.next().next().click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step6DisplayStatus.attr('src', enterCodeKey3ImgSrc);
            $(this).find('img').attr('src', Key3ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key4HigImgSrc);
            step6FourthKeyHightlight();
        });

    }
    function step6FourthKeyHightlight() {
        step6FirstNumKey.next().next().next().click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            step6DisplayStatus.attr('src', enterCodeKey4ImgSrc);
            $(this).find('img').attr('src', Key4ImgSrc);
            step6NextList.next().slideDown(500);
            step6CmdKey.addClass('playing');
            step6CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
            // step6MenuImgShowsHandler();
        });
    }



});


