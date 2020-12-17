$(document).ready(function () {
    // get the elements
    let tutorialList = $('.three-col-outer-layer .tabber-sec ul li');
    let tutorialConent = $('.three-col-outer-layer .center-col .demo-content');
    let keypadSteps = $('.three-col-outer-layer .left-col .keypad-step');
    let step3ListItem = $('.three-col-outer-layer .tabber-sec ul li:nth-child(3)');

    step3ListItem.click(initialKeyHightlight);

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
        console.log(nextFilter);
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
        console.log(keyCode);
        const audio = $(`audio[data-key="${keyCode}"]`);
        console.log(audio);
        const key = $(`.key[data-key="${keyCode}"]`);
        console.log(key);
        if (!audio) return; //stop the fun all together
        audio.currentTime = 0; //rewind to the start
        audio.get(0).play();

    }
    function initialKeyHightlight() {
        let cmdKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:last-child');
        cmdKey.addClass('playing');
        topLetKeyHightlight();
    }
    function topLetKeyHightlight() {
        let cmdKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:last-child');
        cmdKey.click(function () {
            cmdKey.removeClass('playing');
            let topRowFirstKeyItem = $('.three-col-outer-layer .left-col .keypad3  ul.top-keys li:first-child');
            topRowFirstKeyItem.addClass('playing');
            firstKeyHightlight();
        });

    }
    function firstKeyHightlight() {
        let topRowFirstKeyItem = $('.three-col-outer-layer .left-col .keypad3 ul.top-keys li:first-child');
        topRowFirstKeyItem.click(function () {
            topRowFirstKeyItem.removeClass('playing');
            let firstNumKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:first-child');
            firstNumKey.addClass('playing');
            secondKeyHightlight();
        });

    }
    function secondKeyHightlight() {
        let firstNumKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:first-child');
        firstNumKey.click(function () {
            $(this).removeClass('playing');
            let secondNumKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:nth-child(2)');
            secondNumKey.addClass('playing');
            thirdKeyHightlight();
        });

    }
    function thirdKeyHightlight() {
        let secondNumKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:nth-child(2)');
        secondNumKey.click(function () {
            $(this).removeClass('playing');
            let thirdNumKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:nth-child(3)');
            thirdNumKey.addClass('playing');
            fourthKeyHightlight();
        });

    }
    function fourthKeyHightlight() {
        let thirdNumKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:nth-child(3)');
        thirdNumKey.click(function () {
            $(this).removeClass('playing');
            let FourthNumKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:nth-child(4)');
            FourthNumKey.addClass('playing');
        });

    }
    // function firstKeyHightlight() {
    //     let topRowFirstKeyItem = $('.three-col-outer-layer .left-col .keypad3 ul.top-keys li:first-child');
    //     topRowFirstKeyItem.click(function () {
    //         topRowFirstKeyItem.removeClass('playing');
    //         let firstNumKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:first-child');
    //         firstNumKey.addClass('playing');
    //     });

    // }
    // function topRightKeyHightlight() {
    //     let cmdKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:last-child');
    //     cmdKey.addClass('playing');
    // }

    const keys = $('.three-col-outer-layer .left-col .clickable-keys .keys ul li');

    keys.click(playSound);


    $("p").slideDown("slow");
});


