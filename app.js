$(document).ready(function () {
    // get the elements
    let tutorialList = $('.three-col-outer-layer .tabber-sec ul li');
    let tutorialConent = $('.three-col-outer-layer .center-col .demo-content');
    let keypadSteps = $('.three-col-outer-layer .left-col .keypad-step');
    let step3ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(3)');




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
    }
    // tutorialListItems Click action - right col items
    tutorialList.click(tutorialListItemsHandler);

    // onClick of nextbutton Function Handler

    let nextButton = $('.three-col-outer-layer .center-col .demo-content .card button');
    nextButton.click(function () {
        let currentButton = $(this);
        let nextFilter = $(this).closest('.demo-content').attr('data-filter');
        // console.log(nextFilter);
        setTimeout(function () {
            $('.three-col-outer-layer .tabber-sec ul li' + nextFilter).removeClass('current');
            $('.three-col-outer-layer .tabber-sec ul li' + nextFilter).next().addClass('current');
            currentButton.closest('.demo-content').removeClass('current');
            currentButton.closest('.demo-content').next().addClass('current');
        }, 500);
    });

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

    let cmdKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:last-child');
    let step3NextList = $('.three-col-outer-layer .center-col ol li:nth-child(2)');

    let topRowFirstKeyItem = $('.three-col-outer-layer .left-col .keypad3  ul.top-keys li:first-child');
    let firstNumKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:first-child');

    function cmdKeyHightlight() {
        cmdKey.addClass('playing');
        cmdKey.find('img').attr('src', cmdHigKeyImgSrc);
        cmdKey.click(function () {
            cmdKey.find('img').attr('src', cmdKeySrc);
            step3NextList.slideDown(500);
            topRowFirstKeyItem.parent().addClass('playing');
            topRowFirstKeyItem.find('img').attr('src', cmdHigKeyImgSrc);
            topLeftKeyHightlight();
        });

    }
    function topLeftKeyHightlight() {
        // cmdKey.parent().removeClass('.playing');
        topRowFirstKeyItem.click(function () {
            topRowFirstKeyItem.removeClass('playing');
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
            $(this).find('img').attr('src', cmdKeySrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', cmdHigKeyImgSrc);
            secondKeyHightlight();
        });

    }
    function secondKeyHightlight() {
        firstNumKey.next().click(function () {
            $(this).removeClass('playing');
            $(this).find('img').attr('src', cmdKeySrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', cmdHigKeyImgSrc);
            thirdKeyHightlight();
        });
    }
    function thirdKeyHightlight() {
        firstNumKey.next().next().click(function () {
            $(this).removeClass('playing');
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
    function finalCmdKeyHightlight() {
        cmdKey.click(function () {
            alert('test');
            return;
        });
        // cmdKey.removeClass('playing');
        // cmdKey.find('img').attr('src', cmdKeySrc);
    }


    const keys = $('.three-col-outer-layer .left-col .clickable-keys .keys ul li');

    keys.click(playSound);


});


