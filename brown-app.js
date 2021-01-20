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
    // display Status Img Src
    let oneStarImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Star-1.png';
    let twoStarsImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Star-2.png';
    let threeStarsImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Star-3.png';
    let fourStarsImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Star-4.png';
    let readyToArmImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Ready-to-arm.png';
    let armingImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Arming.png';
    let exitNow60ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Exit-now-60.png';
    let exitNow45ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Exit-now-45.png';
    let exitNow30ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Exit-now-30.png';
    let exitNow15ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Exit-now-15.png';
    let systemArmedImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/System-armed.png';
    // step4 display status images
    let disarmNowImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Disarm-now.png';
    let a1AlarmImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/A1-alarm.png';
    let z1FDoorImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Z1-f-door.png';
    let alarmSilencedImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Alarm-silenced.png';

    const keys = $('.three-col-outer-layer .left-col .keys ul li');
    // step2 elements 
    let step2NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .btn img');

    // step3 elements 
    let step3FirstNumKey = $('.three-col-outer-layer .left-col .keypad3 ul.number-keys  li:first-child');
    let step3DisplayStatus = $('.three-col-outer-layer .left-col .keypad3 .display-status img');
    let step3EntKey = $('.three-col-outer-layer .left-col .keypad3 ul.menu-keys  li:last-child');
    let step3NextList = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] ol li:nth-child(2)');
    let step3DescriptionPara = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] ol p');
    let step3NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] .btn img');
    let step3ReplayButton = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] .replay');

    // step4 elements 
    let step4FirstNumKey = $('.three-col-outer-layer .left-col .keypad4 ul.number-keys  li:first-child');
    let step4DisplayStatus = $('.three-col-outer-layer .left-col .keypad4 .display-status img');
    let step4EntKey = $('.three-col-outer-layer .left-col .keypad4 ul.menu-keys  li:last-child');
    let step4FirstListItem = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] ol li:nth-child(1)');
    let step4NextList = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] ol li:nth-child(2)');
    let step4OrderList = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] ol');
    let step4InitialDes = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] .description .initial-text');
    let step4NextSlideDes = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] .description .next-slide-txt');
    let step4NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] .btn img');
    let step4ReplayButton = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] .replay');


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
        $('.three-col-outer-layer .center-col .heading').slideDown(1500);
        $('.three-col-outer-layer .center-col .description').slideDown(1500);
        // step1 
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .btn').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .btn').slideDown(1500);
        // step2
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .btn').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .btn').slideDown(1500);
        // step3 
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] li:first-child').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] li:nth-child(2)').hide();
        step3DescriptionPara.hide();
        step3NextSectionBtn.hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] li:first-child').slideDown(1000);
        // step4 slideDown 
        // $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] li:first-child').hide();
        // $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] li:nth-child(2)').hide();
        // $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] li:first-child').slideDown(1500);

    }

    // data key 1 default beep sound play
    function playDefaultBeepSound() {
        let audio = $('audio[data-key="1"]');
        if (!audio) return; //stop the fun all together
        audio.currentTime = 0; //rewind to the start
        audio.get(0).play();
    }
    // data key 1 default beep sound play
    function playLongBeepSound() {
        let audio = $('audio[data-key="2"]');
        if (!audio) return; //stop the fun all together
        audio.currentTime = 0; //rewind to the start
        audio.get(0).play();
    }
    // steps 1-2-3 keys handler 
    function commonNumKeyHandler(numberKeyEle, prevKeyInactiveImgSrc, nextKeyActiveImgSrc, displayStatusEle, displayStatusImgSrcEle) {
        // debugger;
        // console.log(numberKeyEle);
        playDefaultBeepSound();
        numberKeyEle.off('click');
        numberKeyEle.removeClass('playing');
        displayStatusEle.attr('src', displayStatusImgSrcEle);
        numberKeyEle.find('img').attr('src', prevKeyInactiveImgSrc);
        numberKeyEle.next().addClass('playing');
        numberKeyEle.next().find('img').attr('src', nextKeyActiveImgSrc);
    }
    // intial key active handler 
    function initialKeyActiveHandler(initialKeyEle, initialKeyImgActiveSrc) {
        initialKeyEle.addClass('playing');
        initialKeyEle.find('img').attr('src', initialKeyImgActiveSrc);
    }
    //  Enter kay handler 
    function entActiveKeyHandler(enterKeyEle) {
        playDefaultBeepSound();
        enterKeyEle.off('click');
        enterKeyEle.removeClass('playing');
        enterKeyEle.find('img').attr('src', entInactiveImgSrc);
    }

    // ==============================================
    //  Below fun will run once user reach to step3 
    // ==============================================
    step2NextSectionBtn.click(function () {
        step3ResetExistingStateActions();
        initialKeyActiveHandler(step3FirstNumKey, key1ActiveImgSrc);
        step3FirstNumKeyHandler();
    });
    // step3 list item onclick handler 
    step3ListItem.click(function () {
        step3ResetExistingStateActions();
        initialKeyActiveHandler(step3FirstNumKey, key1ActiveImgSrc);
        step3FirstNumKeyHandler();
    });
    // step3replay btn handler 
    step3ReplayButton.click(function () {
        step3ResetExistingStateActions();
        initialKeyActiveHandler(step3FirstNumKey, key1ActiveImgSrc);
        slideDownHandler();
        step3FirstNumKeyHandler();
    });
    function step3FirstNumKeyHandler() {
        step3FirstNumKey.click(function () {
            commonNumKeyHandler($(this), key1InactiveImgSrc, key2ActiveImgSrc, step3DisplayStatus, oneStarImgSrc);
            step3SecondNumKeyHandler();
        });
    }
    function step3SecondNumKeyHandler() {
        step3FirstNumKey.next().click(function () {
            commonNumKeyHandler($(this), key2InactiveImgSrc, key3ActiveImgSrc, step3DisplayStatus, twoStarsImgSrc);
            step3ThirdNumKeyHandler();
        });
    }
    function step3ThirdNumKeyHandler() {
        step3FirstNumKey.next().next().click(function () {
            commonNumKeyHandler($(this), key3InactiveImgSrc, key4ActiveImgSrc, step3DisplayStatus, threeStarsImgSrc);
            step3FourthNumKeyHandler();
        });
    }
    function step3FourthNumKeyHandler() {
        step3FirstNumKey.next().next().next().click(function () {
            commonNumKeyHandler($(this), key4InactiveImgSrc, null, step3DisplayStatus, fourStarsImgSrc);
            $(this).next().find('img').attr('src', key5InactiveImgSrc);
            $(this).next().removeClass('playing');
            step3NextList.slideDown(500);
            step3EntKey.addClass('playing');
            step3EntKey.find('img').attr('src', entActiveImgSrc);
            step3EnterKeyHandler();
        });
    }
    function step3EnterKeyHandler() {
        step3EntKey.click(function () {
            entActiveKeyHandler($(this));
            $(this).off('click');
            step3NextList.next().slideDown(500);
            const step3ImgLoop1 = 0, step3ImgLoop2 = 5;
            let step3ExitLoopImgs = [armingImgSrc, exitNow60ImgSrc, exitNow45ImgSrc, exitNow30ImgSrc, exitNow15ImgSrc, systemArmedImgSrc];
            for (let i = step3ImgLoop1; i <= step3ImgLoop2; i++) {
                setTimeout(() => { //step3SetTimeOut =
                    let currentImg = step3ExitLoopImgs[i];
                    step3DisplayStatus.attr('src', currentImg);
                    if (i === 5) {
                        step3NextList.next().next().slideDown(500);
                        step3NextSectionBtn.slideDown(500);
                        playLongBeepSound();
                    }
                    else playDefaultBeepSound();
                }, i * 1500);
            }
        });
    }

    // step3 clear all functions and actions once you click on replay or next-section button
    function step3ResetExistingStateActions() {
        // clearTimeout(step3SetTimeOut);
        step3DisplayStatus.attr('src', readyToArmImgSrc);
        resetAllKeysToInactiveImages(step3FirstNumKey, step3EntKey);
    }
    // All the keys and btn reset handler 
    function resetAllKeysToInactiveImages(resetNumKeyImgSrc, resetEnterKeyImgSrc) {
        resetNumKeyImgSrc.find('img').attr('src', key1InactiveImgSrc);
        resetNumKeyImgSrc.next().find('img').attr('src', key2InactiveImgSrc);
        resetNumKeyImgSrc.next().next().find('img').attr('src', key3InactiveImgSrc);
        resetNumKeyImgSrc.next().next().next().find('img').attr('src', key4InactiveImgSrc);
        resetEnterKeyImgSrc.find('img').attr('src', entInactiveImgSrc);
        keys.removeClass('playing');
        keys.off('click');

    }

    // ==============================================
    //  Below fun will run once user reach to step4 
    // ==============================================
    function step4DisarmInitialImagesLoadHandler() {
        const step4DisarmNum1 = 0, step4DisarmNum2 = 4;
        let disarmInitialImgSrcArray = [disarmNowImgSrc, a1AlarmImgSrc, z1FDoorImgSrc, disarmNowImgSrc];
        for (let i = step4DisarmNum1; i <= step4DisarmNum2; i++) {
            setTimeout(() => {
                let currentImg = disarmInitialImgSrcArray[i];
                step4DisplayStatus.attr('src', currentImg);
                if (i === 3) {
                    initialKeyActiveHandler(step4FirstNumKey, key1ActiveImgSrc);
                    step4FirstListItem.slideDown(500);
                }
            }, i * 1000);
        }
    }

    step3NextSectionBtn.click(function () {
        step4DisarmInitialImagesLoadHandler();
        // step3ResetExistingStateActions();
        initialKeyActiveHandler(step3FirstNumKey, key1ActiveImgSrc);
        step4FirstNumKeyHandler();
    });
    // step3 list item onclick handler 
    step4ListItem.click(function () {
        // step3ResetExistingStateActions();
        step4DisarmInitialImagesLoadHandler();
        initialKeyActiveHandler(step3FirstNumKey, key1ActiveImgSrc);
        step4FirstNumKeyHandler();
    });
    // step3replay btn handler 
    step4ReplayButton.click(function () {
        console.log('replay btn click');
        step4DisarmInitialImagesLoadHandler();
        // step4ResetExistingStateActions();
        // initialKeyActiveHandler(step4FirstNumKey, key1ActiveImgSrc);
        // slideDownHandler();
        // step4FirstNumKeyHandler();
    });
    function step4FirstNumKeyHandler() {
        step4FirstNumKey.click(function () {
            commonNumKeyHandler($(this), key1InactiveImgSrc, key2ActiveImgSrc, step4DisplayStatus, oneStarImgSrc);
            step4SecondNumKeyHandler();
        });
    }
    function step4SecondNumKeyHandler() {
        step4FirstNumKey.next().click(function () {
            commonNumKeyHandler($(this), key2InactiveImgSrc, key3ActiveImgSrc, step4DisplayStatus, twoStarsImgSrc);
            step4ThirdNumKeyHandler();
        });
    }
    function step4ThirdNumKeyHandler() {
        step4FirstNumKey.next().next().click(function () {
            commonNumKeyHandler($(this), key3InactiveImgSrc, key4ActiveImgSrc, step4DisplayStatus, threeStarsImgSrc);
            step4FourthNumKeyHandler();
        });
    }
    function step4FourthNumKeyHandler() {
        step4FirstNumKey.next().next().next().click(function () {
            commonNumKeyHandler($(this), key4InactiveImgSrc, null, step4DisplayStatus, fourStarsImgSrc);
            $(this).next().find('img').attr('src', key5InactiveImgSrc);
            $(this).next().removeClass('playing');
            step4NextList.slideDown(500);
            step4EntKey.addClass('playing');
            step4EntKey.find('img').attr('src', entActiveImgSrc);
            step4EnterKeyHandler();
        });
    }
    function step4EnterKeyHandler() {
        step4EntKey.click(function () {
            entActiveKeyHandler($(this));
            $(this).off('click');
            step4DisplayStatus.attr('src', alarmSilencedImgSrc);
            step4InitialDes.hide();
            step4OrderList.hide();
            playLongBeepSound();
            step4NextSlideDes.slideDown(500);
            // const step4ImgLoop1 = 0, step4ImgLoop2 = 5;
            // let step3ExitLoopImgs = [armingImgSrc, exitNow60ImgSrc, exitNow45ImgSrc, exitNow30ImgSrc, exitNow15ImgSrc, systemArmedImgSrc];
            // for (let i = step3ImgLoop1; i <= step3ImgLoop2; i++) {
            //     setTimeout(() => { //step3SetTimeOut =
            //         let currentImg = step3ExitLoopImgs[i];
            //         step3DisplayStatus.attr('src', currentImg);
            //         if (i === 5) {
            //             step3NextList.next().next().slideDown(500);
            //             step3NextSectionBtn.slideDown(500);
            //             playLongBeepSound();
            //         }
            //         else playDefaultBeepSound();
            //     }, i * 1500);
            // }
        });
    }
});


