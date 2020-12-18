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
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .description').slideDown(1500);
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .description').slideDown(1500);
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .btn').slideDown(1500);
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .btn').slideDown(1500);
    }
    // Replay Button Oncick Action
    function replayDivHandler() {
        alert('Replay Action');
    }
    let replayDiv = $('.three-col-outer-layer .replay');
    replayDiv.click(replayDivHandler);

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
    let topOptionKeyImgSrc = './Assets/images/Key-btn.png';
    let cmdKeySrc = './Assets/images/Key-1.png';
    let cmdHigKeyImgSrc = './Assets/images/CMD-btn.png';
    let armDisArmImgSrc = './Assets/images/Arm-disarm.png';
    let enterCodeKeyImgSrc = './Assets/images/Enter-code.png';
    let enterCodeKey1ImgSrc = './Assets/images/Enter-code-1.png';
    let enterCodeKey2ImgSrc = './Assets/images/Enter-code-2.png';
    let exitImgSrc = './Assets/images/Enter-code-2.png';

    let cmdKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:last-child');
    let step3NextList = $('.three-col-outer-layer .center-col ol li:nth-child(2)');

    let topRowFirstKeyItem = $('.three-col-outer-layer .left-col .keypad3  ul.top-keys li:first-child');
    let firstNumKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:first-child');
    let displayStatus = $('.three-col-outer-layer .left-col .display-stauts img');

    function firstTimeCmdKeyHandler() {
        // alert('test');
        displayStatus.attr('src', armDisArmImgSrc);
        cmdKey.find('img').attr('src', cmdKeySrc);
        step3NextList.slideDown(500);
        topRowFirstKeyItem.parent().addClass('playing');
        topRowFirstKeyItem.find('img').attr('src', cmdHigKeyImgSrc);
        topLeftKeyHightlight();
    }
    function cmdKeyHightlight() {
        cmdKey.addClass('playing');
        cmdKey.find('img').attr('src', cmdHigKeyImgSrc);
        cmdKey.click(firstTimeCmdKeyHandler);
    }
    function topLeftKeyHightlight() {
        // cmdKey.parent().removeClass('.playing');
        topRowFirstKeyItem.click(function () {
            topRowFirstKeyItem.removeClass('playing');
            displayStatus.attr('src', enterCodeKeyImgSrc);
            topRowFirstKeyItem.find('img').attr('src', topOptionKeyImgSrc);
            step3NextList.next().slideDown(500);
            firstNumKey.addClass('playing');
            firstNumKey.find('img').attr('src', cmdHigKeyImgSrc);
            firstKeyHightlight();
        });

    }
    function firstKeyHightlight() {
        firstNumKey.click(function () {
            $(this).removeClass('playing');
            displayStatus.attr('src', enterCodeKey1ImgSrc);
            $(this).find('img').attr('src', cmdKeySrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', cmdHigKeyImgSrc);
            secondKeyHightlight();
        });

    }
    function secondKeyHightlight() {
        firstNumKey.next().click(function () {
            $(this).removeClass('playing');
            displayStatus.attr('src', enterCodeKey2ImgSrc);
            $(this).find('img').attr('src', cmdKeySrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', cmdHigKeyImgSrc);
            thirdKeyHightlight();
        });
    }
    function thirdKeyHightlight() {
        firstNumKey.next().next().click(function () {
            $(this).removeClass('playing');
            displayStatus.attr('src', enterCodeKey2ImgSrc);
            $(this).find('img').attr('src', cmdKeySrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', cmdHigKeyImgSrc);
            fourthKeyHightlight();
        });

    }
    function fourthKeyHightlight() {
        firstNumKey.next().next().next().click(function () {
            $(this).removeClass('playing');
            $(this).find('img').attr('src', cmdKeySrc);
            console.log('Sequence done.');
            step3NextList.next().next().slideDown(500);
            cmdKey.addClass('playing');
            cmdKey.find('img').attr('src', cmdHigKeyImgSrc);
            finalCmdKeyHightlight();
        });

    }
    let step3NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] .btn');

    function finalCmdKeyHightlight() {
        cmdKey.off('click');
        cmdKey.click(function () {
            $(this).find('img').attr('src', cmdKeySrc);
            console.log('test');
            displayStatus.attr('src', exitImgSrc);
            $(this).removeClass('playing');
            step3NextList.next().next().next().slideDown(500);
            step3NextSectionBtn.slideDown(500);

        });
        // cmdKey.click(function () {
        //     firstTimeCmdKeyHandler.stop();

        // });
        // cmdKey.removeClass('playing');
        // cmdKey.find('img').attr('src', cmdKeySrc);
    }
    let step2NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] button');
    step2NextSectionBtn.click(function () {
        alert('click');

        slideDownHandler();
        cmdKeyHightlight();
    });
    // if ($('.three-col-outer-layer .tabber-sec ul li:nth-child(3).current')) {
    //     console.log('true');
    // }
    const keys = $('.three-col-outer-layer .left-col .clickable-keys .keys ul li');

    keys.click(playSound);


});


