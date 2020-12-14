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
        setTimeout(function () {
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
});


