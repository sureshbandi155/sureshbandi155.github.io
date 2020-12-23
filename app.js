$(document).ready(function () {
    // get the elements
    let tutorialList = $('.three-col-outer-layer .tabber-sec ul li');
    let tutorialConent = $('.three-col-outer-layer .center-col .demo-content');
    let keypadSteps = $('.three-col-outer-layer .left-col .keypad-step');
    let step3ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(3)');
    let step4ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(4)');

    // nextButton 
    let nextButton = $('.three-col-outer-layer .center-col .demo-content .card button');

    // step3Elements
    let replayDivForStep3 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] .replay');
    let replayDivForStep4 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] .replay');
    // step2
    let step2NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] button');

    const keys = $('.three-col-outer-layer .left-col .clickable-keys .keys ul li.action');



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
    let step3NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] .btn');
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

    // step2 next btn onclick handler 
    step2NextSectionBtn.click(function () {
        slideDownHandler();
        cmdKeyHightlight();
        redArmIndicationOFF(Step3RedArmedIndicator);
    });

    // step3 next btn onclick handler 
    step3NextSectionBtn.click(function () {
        slideDownHandler();
        redArmIndicationON(Step4RedArmedIndicator);
        step4CmdKeyHightlight();
    });

    // step3 list item onclick handler 
    step3ListItem.click(function () {
        step3DisplayStatus.attr('src', fridayDisplayImgSrc);
        cmdKeyHightlight();
        redArmIndicationOFF(Step3RedArmedIndicator);
    });
    // step4 list item onclick handler 
    step4ListItem.click(function () {
        redArmIndicationON(Step4RedArmedIndicator);
        step4CmdKeyHightlight();
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
    });

    // Below functions will run once user reach to step3 
    // clear all fun 
    // function clearAllFunctions() {
    //     step3TopRowFirstKeyItem.off('click');
    //     step3FirstNumKey.off('click');
    //     step3FirstNumKey.next().off('click');
    //     step3FirstNumKey.next().next().off('click');
    //     step3FirstNumKey.next().next().next().off('click');
    // }
    function cmdKeyHightlight() {
        step3NextList.nextAll().hide();
        step3NextSectionBtn.hide();
        cmdKey.addClass('playing');
        cmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        cmdKey.click(firstTimeCmdKeyHandler);
    }

    function firstTimeCmdKeyHandler() {
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
            step3NextSectionBtn.slideDown(500);
            const num1 = 1, num2 = 3;
            let exitArray = ['https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-10.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-9.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Exit-8.png'];
            for (let i = num1; i <= num2; i++) {
                setTimeout(() => {
                    let currentImage = exitArray[i - 1];
                    step3DisplayStatus.attr('src', currentImage);
                    // console.log(currentImage);
                    // d();
                }, i * 1000);
                // d();
            }
            // function d() {
            //     console.log('hello D');
            //     step3DisplayStatus.attr('src', fridayDisplayImgSrc);
            // }

        });
    }
    // Replay Button for step3 Onclick Action
    replayDivForStep3.click(function () {
        step3DisplayStatus.attr('src', fridayDisplayImgSrc);
        slideDownHandler();
        keys.removeClass('playing');
        cmdKeyHightlight();
        redArmIndicationOFF(Step3RedArmedIndicator);

    });




});


