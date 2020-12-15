$(document).ready(function () {
    // get the elements
    let tutorialList = $('.three-col-outer-layer .tabber-sec ul li');
    let tutorialConent = $('.three-col-outer-layer .center-col .demo-content');

    function tutorialListItemsHandler(e) {
        var tab_id = $(this).attr('data-tab');
        tutorialList.removeClass('current');
        tutorialConent.removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
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
        key.addClass('playing');
    }
    // function removeTransition(e) {
    //     if (e.propertyName !== "transform") return;
    //     // console.log(this);
    //     this.removeClass('playing');
    // }
    const keys = $('.three-col-outer-layer .left-col .keys ul li');
    // console.log(keys);
    // keys.each(key => {
    //     console.log(key);
    //     // key.on('transitionend', removeTransition);

    // });
    keys.click(playSound);
});


