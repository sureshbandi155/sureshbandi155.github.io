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

    let cmdKeySrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Cmd-key-inactive.png';
    let topOptionKeyImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Top-key-inactive.png';
    let topOptionHigKeyImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Top-key-active.png';
    let cmdKeyHigImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Cmd-key-active.png';
    let Key0ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key0-inactive.png';
    let Key1ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key1-inactive.png';
    let Key2ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key2-inactive.png';
    let Key3ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key3-inactive.png';
    let Key4ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key4-inactive.png';
    let Key5ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key5-inactive.png';
    let Key6ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key6-inactive.png';
    let Key7ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key7-inactive.png';
    let Key8ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key8-inactive.png';
    let Key9ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key9-inactive.png';
    let Key1HigImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key1-active.png';
    let Key2HigImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key2-active.png';
    let Key3HigImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key3-active.png';
    let Key4HigImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key4-active.png';
    let Key7HigImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key7-active.png';



    // Display status images
    let fridayDisplayImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-fri-6pm.png';
    let armDisArmImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-arm-disarm.png';
    let enterCodeKeyImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-enter-code.png';
    let enterCodeKey1ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-enter-code-1.png';
    let enterCodeKey2ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-enter-code-2.png';
    let enterCodeKey3ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-enter-code-3.png';
    let enterCodeKey4ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-enter-4.png';

    let exitImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-exit.png';

    //step1 elements
    let step1NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .btn img');

    // step2 elements 
    let step2PowerIndicatorImg = $('.three-col-outer-layer .left-col .keypad2 .power-btns img');

    // step3 elements 
    let cmdKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:last-child');
    let step3NextList = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] ol li:nth-child(2)');
    let step3NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] .btn img');
    let step3TopRowFirstKeyItem = $('.three-col-outer-layer .left-col .keypad3  ul.top-keys li:first-child');
    let step3FirstNumKey = $('.three-col-outer-layer .left-col .keypad3 ul.bottom-keys  li:first-child');
    let step3DisplayStatus = $('.three-col-outer-layer .left-col .keypad3 .display-stauts img');
    // let Step3RedArmedIndicator = $('.three-col-outer-layer .left-col .keypad3 .indicator .light.red');

    let step3PowerIndicatorImg = $('.three-col-outer-layer .left-col .keypad3 .power-btns img');
    let powerIndicatorImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Power-indicator.png';
    let armedIndicatorImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Power-armed-indicator.png';

    // step4 elements 
    let step4CmdKey = $('.three-col-outer-layer .left-col .keypad4 ul.bottom-keys  li:last-child');
    let step4NextList = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] ol li:nth-child(2)');
    let step4TopRowLastKeyItem = $('.three-col-outer-layer .left-col .keypad4  ul.top-keys li:nth-child(4)');
    let step4FirstNumKey = $('.three-col-outer-layer .left-col .keypad4 ul.bottom-keys  li:first-child');
    let step4DisplayStatus = $('.three-col-outer-layer .left-col .keypad4 .display-stauts img');
    // let Step4RedArmedIndicator = $('.three-col-outer-layer .left-col .keypad4 .indicator .light.red');

    let step4PowerIndicatorImg = $('.three-col-outer-layer .left-col .keypad4 .power-btns img');

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
    let step5Menucount = 0;
    let menuNoYesImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Menu-no-yes.png';
    let alaramSilenceImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Alaram-silence-new.png';
    let sensorResetImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Sensor-reset-new.png';
    let doorAccessImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Door-access-new.png';
    let armedAreasImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Armed-areas-new.png';
    let outputsOnOffImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Output-on-off-new.png';
    let zoneStatusImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Zone-status-new.png';
    let byPasszonesImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Bypass-zones-new.png';
    let byPasszoneRstBypImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Bypass-zone-rst-byp-new.png';
    let byPasszoneWith7RstBypImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Bypass-7-rst-byp-new.png';
    let backKeyImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Back-key-inactive.png';
    let backHigKeyImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Back-key-active.png';



    // Get step6 elements
    let step6CmdKey = $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:last-child');
    let step6NextList = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] ol li:nth-child(2)');
    let step6TopRowLastKeyItem = $('.three-col-outer-layer .left-col .keypad6  ul.top-keys li:nth-child(4)');
    let step6TopRowAllKeyItem = $('.three-col-outer-layer .left-col .keypad6  ul.top-keys li:nth-child(-n+4)');
    let step6FirstNumKey = $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:first-child');
    let step6DisplayStatus = $('.three-col-outer-layer .left-col .keypad6 .display-stauts img');
    let step6DescriptionPare = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] .description>p');
    let step6NextStepButton = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] .btn img');
    let step6FirstFiveListItems = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] ol li:nth-child(-n+5)');
    let replayDivForStep6 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] .replay');
    let step6CmdKeyCount = 0;

    // redcolor key buttons image src 

    let TopkeysRedImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Top-key-red.png';
    let key0redImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-0-red.png';
    let key1redImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-1-red.png';
    let key2redImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-2-red.png';
    let key3redImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-3-red.png';
    let key4redImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-4-red.png';
    let key5redImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-5-red.png';
    let key6redImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-6-red.png';
    let key7redImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-7-red.png';
    let key8redImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-8-red.png';
    let key9redImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Key-9-red.png';
    let cmdKeyRedImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Cmd-key-red.png';
    let backKeyRedImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Back-key-red.png';
    // step6 display status img src
    let sensorOffImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Sensor-off-new.png';
    let sensorOnImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Sensor-on-new.png';

    // Get step7 elements
    let step7CmdKey = $('.three-col-outer-layer .left-col .keypad7 ul.bottom-keys  li:last-child');
    let step7NextList = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] ol li:nth-child(2)');
    let step7TopRowLastKeyItem = $('.three-col-outer-layer .left-col .keypad7  ul.top-keys li:nth-child(4)');
    let step7TopRowAllKeyItem = $('.three-col-outer-layer .left-col .keypad7  ul.top-keys li:nth-child(-n+4)');
    let step7TopRowNBRKey = $('.three-col-outer-layer .left-col .keypad7  ul.top-keys li:nth-child(2)');
    let step7FirstNumKey = $('.three-col-outer-layer .left-col .keypad7 ul.bottom-keys  li:first-child');
    let step7BackKey = $('.three-col-outer-layer .left-col .keypad7 ul.bottom-keys  li:nth-last-child(2)');
    let step7DisplayStatus = $('.three-col-outer-layer .left-col .keypad7 .display-stauts img');
    let step7DescriptionPare = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] .description>p');
    let step7NextStepButton = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] .btn img');
    let step7FirstTwoListItems = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] ol li:nth-child(-n+3)');
    let step7Key7 = $('.three-col-outer-layer .left-col .keypad7  ul.bottom-keys li:nth-child(7)');
    let replayDivForStep7 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] .replay');
    let step7Upto7thList = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] ol li:nth-child(-n+7)');
    let step7CmdKeyCount = 0;
    let step7Menucount = 0;
    // step7 display status image src elements 
    let zoneMonitorImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Zone-monitor-Qmark.png';
    let zoneMonitorAllNbrImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Zone-monitor-all-nbr.png';
    let zoneMonitorAddRmvImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Zone-monitor-add-rmv.png';
    let zoneMonitorSevenAddRmvImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Zone-monitor-7-add-rmv.png';
    let zoneMonitorOn = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Zone-monitor-ON.png';


    // Get step8 elements
    let step8CmdKey = $('.three-col-outer-layer .left-col .keypad8 ul.bottom-keys  li:last-child');
    let step8DescriptionPare = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] .description>p');
    let step8DisplayStatus = $('.three-col-outer-layer .left-col .keypad8 .display-stauts img');
    let step8NextList = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] ol li:nth-child(2)');
    let step8TopRowLastKeyItem = $('.three-col-outer-layer .left-col .keypad8  ul.top-keys li:nth-child(4)');
    let step8TopRowAllKeyItem = $('.three-col-outer-layer .left-col .keypad8  ul.top-keys li:nth-child(-n+4)');
    let step8FirstNumKey = $('.three-col-outer-layer .left-col .keypad8 ul.bottom-keys  li:first-child');
    let step8TopRowFirstKeyItem = $('.three-col-outer-layer .left-col .keypad8  ul.top-keys li:nth-child(1)');
    let replayDivForStep8 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] .replay');
    let step8FirstFourListItems = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] ol li:nth-child(-n+4)');
    //    let step7Key7 = $('.three-col-outer-layer .left-col .keypad7  ul.bottom-keys li:nth-child(7)');
    //    let step7Upto7thList = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] ol li:nth-child(-n+7)');
    let step8CmdKeyCount = 0;
    let step8Menucount = 0;
    // step8 display status image src elements 
    let systemStatusImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/System-status.png';
    let systemTestImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/System-test.png';
    let systemPanicsImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/System-panics.png';
    let bellSoundingImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Bell-sounding.png';
    let keypadSoundingImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Keypad-sounding.png';
    let batteryOkayImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Battery-okay.png';
    let transmitTestImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Transmit-test.png';
    let transmitOkayImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Transmit-okay.png';
    let testEndImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Test-end.png';



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
        // if ($(this).hasClass('current')) {
        //     $(this).off('click');
        // }
        // else return;
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
        // step6 slideDown 
        step6DescriptionPare.show();
        step6NextStepButton.hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] li:first-child').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] li:nth-child(n+2)').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] ol p').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] li:first-child').slideDown(1500);
        // step7 slideDown 
        step7DescriptionPare.show();
        step7NextStepButton.hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] li:first-child').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] li:nth-child(n+2)').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] ol p').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] li:first-child').slideDown(1500);
        // step8 slideDown 
        step8DescriptionPare.show();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] li:first-child').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] li:nth-child(n+2)').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] ol p').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] li:first-child').slideDown(1500);
    }


    // data key 1 beep sound play
    function keyPressBeepSound() {
        let audio = $('audio[data-key="1"]');
        if (!audio) return; //stop the fun all together
        audio.currentTime = 0; //rewind to the start
        audio.get(0).play();
    }
    // data key 1 beep sound pause
    function pauseBeepSound() {
        let audio = $('audio[data-key="1"]');
        if (!audio) return; //stop the fun all together
        audio.currentTime = 0; //rewind to the start
        audio.get(0).pause();
    }

    // below function will is related to step2 armed indicatior light
    // step1 next btn onclick handler 
    step1NextSectionBtn.click(function () {
        step2RedArmedIndicator();
    });

    step2ListItem.click(function () {
        step2RedArmedIndicator();
    });
    function step2RedArmedIndicator() {
        setTimeout(() => {
            redArmIndicationON(step2PowerIndicatorImg);
        }, 1000);
    }
    // step2 next btn onclick handler 
    step2NextSectionBtn.click(function () {
        cmdKeyHightlight();
        redArmIndicationOFF(step3PowerIndicatorImg);
        step3ResetExistingStateActions();

    });


    // step3 list item onclick handler 
    step3ListItem.click(function () {
        cmdKeyHightlight();
        redArmIndicationOFF(step3PowerIndicatorImg);
        step3ResetExistingStateActions();

    });
    function cmdKeyHightlight() {
        step3NextList.nextAll().hide();
        step3NextSectionBtn.hide();
        cmdKey.addClass('playing');
        cmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        cmdKey.click(firstTimeCmdKeyHandler);
    }

    function firstTimeCmdKeyHandler() {
        keyPressBeepSound();
        $(this).removeClass('playing');
        cmdKey.off('click');
        redArmIndicationOFF(step3PowerIndicatorImg);
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
            keyPressBeepSound();
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
            keyPressBeepSound();
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
            keyPressBeepSound();
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
            keyPressBeepSound();
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
            keyPressBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            step3DisplayStatus.attr('src', enterCodeKey4ImgSrc);
            $(this).find('img').attr('src', Key4ImgSrc);
            step3NextList.next().next().slideDown(500);
            cmdKey.addClass('playing');
            cmdKey.find('img').attr('src', cmdKeyHigImgSrc);
            finalCmdKeyHightlight();
        });

    }


    function finalCmdKeyHightlight() {
        cmdKey.off('click');
        cmdKey.click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).find('img').attr('src', cmdKeySrc);
            step3DisplayStatus.attr('src', exitImgSrc);
            $(this).removeClass('playing');
            step3NextList.next().next().next().slideDown(500);
            const num1 = 1, num2 = 11;
            let exitArray = ['https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-exit-10.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-exit-9.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-exit-8.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-exit-7.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-exit-6.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-exit-5.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-exit-4.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-exit-3.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-exit-2.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-exit-1.png', 'https://f.hubspotusercontent00.net/hubfs/2432204/Keypad-user-tutorial-assets/Images/Display-fri-6pm.png'];
            for (let i = num1; i <= num2; i++) {
                setTimeout(() => {
                    let currentImage = exitArray[i - 1];
                    step3DisplayStatus.attr('src', currentImage);
                    if (i === 2) {
                        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] ol p').show();
                    }
                    else if (i === 11) {
                        redArmIndicationON(step3PowerIndicatorImg);
                        let longKeyAudio = $('audio[data-key="2"]'); //step3 long beep sound
                        longKeyAudio.get(0).play();
                        step3NextSectionBtn.slideDown(500);
                    }
                }, i * 500);
            }

        });
    }
    // Replay Button for step3 Onclick Action
    replayDivForStep3.click(function () {
        slideDownHandler();
        keys.removeClass('playing');
        cmdKeyHightlight();
        redArmIndicationOFF(step3PowerIndicatorImg);
        step3ResetExistingStateActions();

    });

    // clear all functions and actions once you click step2 and step3 next btn and replaybutton
    function step3ResetExistingStateActions() {
        step3DisplayStatus.attr('src', fridayDisplayImgSrc);
        cmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        step3TopRowFirstKeyItem.find('img').attr('src', topOptionKeyImgSrc);
        step3FirstNumKey.find('img').attr('src', Key1ImgSrc);
        step3FirstNumKey.next().find('img').attr('src', Key2ImgSrc);
        step3FirstNumKey.next().next().find('img').attr('src', Key3ImgSrc);
        step3FirstNumKey.next().next().next().find('img').attr('src', Key4ImgSrc);

    }


    // step3 next btn onclick handler 
    step3NextSectionBtn.click(function () {
        redArmIndicationON(step4PowerIndicatorImg);
        step4CmdKeyHightlight();
        step4ResetExistingStateActions();

    });
    // step4 list item onclick handler 
    step4ListItem.click(function () {
        redArmIndicationON(step4PowerIndicatorImg);
        step4CmdKeyHightlight();
        step4ResetExistingStateActions();
    });

    function redArmIndicationON(indicatorImgSrc) {
        indicatorImgSrc.attr('src', armedIndicatorImgSrc);

    }
    function redArmIndicationOFF(indicatorImgSrc) {
        indicatorImgSrc.attr('src', powerIndicatorImgSrc);

    }
    // Below functions will run once user reach to step4 
    function step4CmdKeyHightlight() {
        step4NextList.nextAll().hide();
        step4CmdKey.addClass('playing');
        step4CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        step4CmdKey.click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
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
            keyPressBeepSound();
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
            keyPressBeepSound();
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
            keyPressBeepSound();
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
            keyPressBeepSound();
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
            keyPressBeepSound();
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
        // step4CmdKey.off('click');
        step4CmdKey.click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).find('img').attr('src', cmdKeySrc);
            step4DisplayStatus.attr('src', fridayDisplayImgSrc);
            $(this).removeClass('playing');
            redArmIndicationOFF(step4PowerIndicatorImg);
            step4NextList.next().next().next().slideDown(500);
        });
    }
    replayDivForStep4.click(function () {
        redArmIndicationON(step4PowerIndicatorImg);
        slideDownHandler();
        keys.removeClass('playing');
        step4CmdKeyHightlight();
        step4ResetExistingStateActions();
    });


    // clear all functions and actions once you click step3 next btn and step4replaybutton
    function step4ResetExistingStateActions() {
        step4DisplayStatus.attr('src', fridayDisplayImgSrc);
        step4CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        step4TopRowLastKeyItem.find('img').attr('src', topOptionKeyImgSrc);
        step4FirstNumKey.find('img').attr('src', Key1ImgSrc);
        step4FirstNumKey.next().find('img').attr('src', Key2ImgSrc);
        step4FirstNumKey.next().next().find('img').attr('src', Key3ImgSrc);
        step4FirstNumKey.next().next().next().find('img').attr('src', Key4ImgSrc);
    }

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
            keyPressBeepSound();
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
            keyPressBeepSound();
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
            keyPressBeepSound();
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
            keyPressBeepSound();
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
            keyPressBeepSound();
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
            keyPressBeepSound();
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
        step5CmdKey.click(function () {
            keyPressBeepSound();
            step5Menucount += 1;
            switch (step5Menucount) {
                case 1:
                    step5DisplayStatus.attr('src', alaramSilenceImgSrc);
                    step5NextList.next().next().slideDown(500);
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
                    // step5BackBtnHelpText.hide();
                    step5FirstFourListItems.hide();
                    // step5NextList.next().next().next().hide();
                    $(this).off('click');
                    $(this).removeClass('playing');
                    $(this).find('img').attr('src', cmdKeySrc);
                    step5NextList.next().next().next().slideDown(500);
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
            keyPressBeepSound();
            step5TopRowAllKeyItem.off('click');
            step5TopRowAllKeyItem.find('img').attr('src', topOptionKeyImgSrc);
            step5TopRowAllKeyItem.removeClass('playing');
            step5NextList.next().next().next().next().slideDown(500);
            step5DisplayStatus.attr('src', byPasszoneRstBypImgSrc);
            step5Key7Key.addClass('playing');
            step5Key7Key.find('img').attr('src', Key7HigImgSrc);
            step5Key7Handler();
        })
    }
    function step5Key7Handler() {
        step5Key7Key.click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            $(this).find('img').attr('src', Key7ImgSrc);
            step5DisplayStatus.attr('src', byPasszoneWith7RstBypImgSrc);
            step5NextList.next().next().next().next().next().slideDown(500);
            step5BypKeyItem.addClass('playing');
            step5BypKeyItem.find('img').attr('src', topOptionHigKeyImgSrc);
            bypassZoneConfirmsHandler();
        })
    }
    function bypassZoneConfirmsHandler() {
        step5BypKeyItem.click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).find('img').attr('src', topOptionKeyImgSrc);
            $(this).removeClass('playing');
            step5NextList.next().next().next().next().next().next().slideDown(500);
            step5NextList.next().next().next().next().next().next().next().slideDown(500);
            step5DisplayStatus.attr('src', byPasszoneRstBypImgSrc);
            step5BackKey.addClass('playing');
            step5BackKey.find('img').attr('src', backHigKeyImgSrc);
            step5BackkeyHandler();
        })
    }
    function step5BackkeyHandler() {
        step5BackKey.click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            $(this).find('img').attr('src', backKeyImgSrc);
            step5NextList.next().next().next().next().next().next().next().next().slideDown(500);
            step5NextStepButton.slideDown(500);
            step5DisplayStatus.attr('src', fridayDisplayImgSrc);

        })
    }
    // Replay Button for step5 Onclick Action
    replayDivForStep5.click(function () {
        slideDownHandler();
        keys.removeClass('playing');
        step5ResetExistingStateActions();
        step5CmdKeyHightlight();

    });
    // clear all functions and actions once you click replaybutton
    function step5ResetExistingStateActions() {
        step5DisplayStatus.attr('src', fridayDisplayImgSrc);
        step5CmdKeyCount = 0;
        step5Menucount = 0;
        step5CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        step5TopRowAllKeyItem.find('img').attr('src', topOptionKeyImgSrc);
        step5Key7Key.find('img').attr('src', Key7ImgSrc);
        step5BackKey.find('img').attr('src', backKeyImgSrc);
        step5FirstNumKey.find('img').attr('src', Key1ImgSrc);
        step5FirstNumKey.next().find('img').attr('src', Key2ImgSrc);
        step5FirstNumKey.next().next().find('img').attr('src', Key3ImgSrc);
        step5FirstNumKey.next().next().next().find('img').attr('src', Key4ImgSrc);
        step5CmdKey.off('click');//clear step5 cmd key click action.

    }




    // Below functions will run once user reach to step6
    step5NextStepButton.click(function () {
        step6ResetExistingStateActions();
        step6CmdKeyHightlight();
    });
    // step6 list item onclick handler 
    step6ListItem.click(function () {
        step6ResetExistingStateActions();
        step6CmdKeyHightlight();
    });

    function step6CmdKeyHightlight() {
        step6CmdKey.addClass('playing');
        step6CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        step6CmdKey.click(function () {
            keyPressBeepSound();
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
            keyPressBeepSound();
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
            keyPressBeepSound();
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
            keyPressBeepSound();
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
            keyPressBeepSound();
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
            keyPressBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            step6DisplayStatus.attr('src', enterCodeKey4ImgSrc);
            $(this).find('img').attr('src', Key4ImgSrc);
            step6NextList.next().slideDown(500);
            step6CmdKey.addClass('playing');
            step6CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
            step6MenuImgShowsHandler();
        });
    }

    function step6MenuImgShowsHandler() {
        let step6Menucount = 0;
        step6CmdKey.click(function () {
            keyPressBeepSound();
            step6Menucount += 1;
            switch (step6Menucount) {
                case 1:
                    step6DisplayStatus.attr('src', alaramSilenceImgSrc);
                    step6NextList.next().next().slideDown(500);
                    break;
                case 2:
                    step6DisplayStatus.attr('src', sensorResetImgSrc);
                    step6NextList.next().next().next().slideDown(500);
                    $(this).removeClass('playing');
                    $(this).off('click');
                    $(this).find('img').attr('src', cmdKeySrc);
                    step6TopRowAllKeyItem.find('img').attr('src', topOptionHigKeyImgSrc);
                    step6TopRowAllKeyItem.addClass('playing');
                    step6SensorResetHandler();
                    break;
                default:
                    break;
            }
        })

    }
    function step6SensorResetHandler() {
        step6TopRowAllKeyItem.click(function () {
            keyPressBeepSound();
            step6TopRowAllKeyItem.off('click');
            step6TopRowAllKeyItem.removeClass('playing');
            step6TopRowAllKeyItem.find('img').attr('src', topOptionKeyImgSrc);
            step6DisplayStatus.attr('src', sensorOffImgSrc);
            setTimeout(() => {
                step6TopRowAllKeyItem.find('img').attr('src', TopkeysRedImgSrc);
                step6FirstNumKey.find('img').attr('src', key1redImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(2)').find('img').attr('src', key2redImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(3)').find('img').attr('src', key3redImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(4)').find('img').attr('src', key4redImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(5)').find('img').attr('src', key5redImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(6)').find('img').attr('src', key6redImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(7)').find('img').attr('src', key7redImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(8)').find('img').attr('src', key8redImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(9)').find('img').attr('src', key9redImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(10)').find('img').attr('src', key0redImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(11)').find('img').attr('src', backKeyRedImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(12)').find('img').attr('src', cmdKeyRedImgSrc);
            }, 1000);

            setTimeout(() => {
                step6DisplayStatus.attr('src', sensorOnImgSrc);
                step6TopRowAllKeyItem.find('img').attr('src', topOptionKeyImgSrc);
                step6FirstNumKey.find('img').attr('src', Key1ImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(2)').find('img').attr('src', Key2ImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(3)').find('img').attr('src', Key3ImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(4)').find('img').attr('src', Key4ImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(5)').find('img').attr('src', Key5ImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(6)').find('img').attr('src', Key6ImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(7)').find('img').attr('src', Key7ImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(8)').find('img').attr('src', Key8ImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(9)').find('img').attr('src', Key9ImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(10)').find('img').attr('src', Key0ImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(11)').find('img').attr('src', backKeyImgSrc);
                $('.three-col-outer-layer .left-col .keypad6 ul.bottom-keys  li:nth-child(12)').find('img').attr('src', cmdKeySrc);
            }, 2000);
            setTimeout(() => {
                step6FirstFiveListItems.hide();
                step6DescriptionPare.hide();
                $('.three-col-outer-layer .center-col').addClass('bottom-btn');
                $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] ol li:nth-child(6)').show();
                $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] ol p').show();
                step6NextStepButton.show();
                step6DisplayStatus.attr('src', fridayDisplayImgSrc);
            }, 3000);

        })
    }
    // Replay Button for step6 Onclick Action
    replayDivForStep6.click(function () {
        slideDownHandler();
        keys.removeClass('playing');
        step6ResetExistingStateActions();
        step6CmdKeyHightlight();

    });
    // clear all functions and actions for step6 once you click nextbutton and replaybutton
    function step6ResetExistingStateActions() {
        step6DisplayStatus.attr('src', fridayDisplayImgSrc);
        step6CmdKeyCount = 0;
        step6CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        step6TopRowAllKeyItem.find('img').attr('src', topOptionKeyImgSrc);
        $('.three-col-outer-layer .center-col').removeClass('bottom-btn');
        step6FirstNumKey.find('img').attr('src', Key1ImgSrc);
        step6FirstNumKey.next().find('img').attr('src', Key2ImgSrc);
        step6FirstNumKey.next().next().find('img').attr('src', Key3ImgSrc);
        step6FirstNumKey.next().next().next().find('img').attr('src', Key4ImgSrc);
        step6CmdKey.off('click');
    }

    // Below function will run for step7 keypad 
    step6NextStepButton.click(function () {
        step7ResetExistingStateActions();
        step7CmdKeyHightlight();
    });
    // step7 list item onclick handler 
    step7ListItem.click(function () {
        step7ResetExistingStateActions();
        step7CmdKeyHightlight();
    });

    function step7CmdKeyHightlight() {
        step7CmdKey.addClass('playing');
        step7CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        step7CmdKey.click(function () {
            keyPressBeepSound();
            step7CmdKeyCount++;
            step7DisplayStatus.attr('src', armDisArmImgSrc);
            // display menu image 
            if (step7CmdKeyCount === 2) {
                step7DisplayStatus.attr('src', menuNoYesImgSrc);
                $(this).off('click');
                step7CmdKey.find('img').attr('src', cmdKeySrc);
                step7NextList.slideDown(500);
                $(this).removeClass('playing');
                $(this).off('click');
                step7TopRowLastKeyItem.addClass('playing');
                step7TopRowLastKeyItem.find('img').attr('src', topOptionHigKeyImgSrc);
                step7TopRowRightKeyHightlight();
            }
        });
    }

    function step7TopRowRightKeyHightlight() {
        step7TopRowLastKeyItem.click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            step7DisplayStatus.attr('src', enterCodeKeyImgSrc);
            $(this).find('img').attr('src', topOptionKeyImgSrc);
            step7FirstNumKey.addClass('playing');
            step7FirstNumKey.find('img').attr('src', Key1HigImgSrc);
            step7FirstKeyHightlight();
        });
    }
    function step7FirstKeyHightlight() {
        step7FirstNumKey.click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            step7DisplayStatus.attr('src', enterCodeKey1ImgSrc);
            $(this).find('img').attr('src', Key1ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key2HigImgSrc);
            step7SecondKeyHightlight();
        });

    }
    function step7SecondKeyHightlight() {
        step7FirstNumKey.next().click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            step7DisplayStatus.attr('src', enterCodeKey2ImgSrc);
            $(this).find('img').attr('src', Key2ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key3HigImgSrc);
            step7ThirdKeyHightlight();
        });
    }
    function step7ThirdKeyHightlight() {
        step7FirstNumKey.next().next().click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            step7DisplayStatus.attr('src', enterCodeKey3ImgSrc);
            $(this).find('img').attr('src', Key3ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key4HigImgSrc);
            step7FourthKeyHightlight();
        });

    }
    function step7FourthKeyHightlight() {
        step7FirstNumKey.next().next().next().click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            step7DisplayStatus.attr('src', enterCodeKey4ImgSrc);
            $(this).find('img').attr('src', Key4ImgSrc);
            step7DescriptionPare.hide();
            step7FirstTwoListItems.hide();
            step7NextList.next().slideDown(500);
            step7CmdKey.addClass('playing');
            step7CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
            step7MenuImgShowsHandler();
        });
    }
    function step7MenuImgShowsHandler() {
        step7CmdKey.click(function () {
            keyPressBeepSound();
            step7Menucount += 1;
            switch (step7Menucount) {
                case 1:
                    step7DisplayStatus.attr('src', alaramSilenceImgSrc);
                    step7NextList.next().next().slideDown(500);
                    break;
                case 2:
                    step7DisplayStatus.attr('src', sensorResetImgSrc);
                    break;
                case 2:
                    step7DisplayStatus.attr('src', sensorResetImgSrc);
                    break;
                case 3:
                    step7DisplayStatus.attr('src', doorAccessImgSrc);
                    break;
                case 4:
                    step7DisplayStatus.attr('src', armedAreasImgSrc);
                    break;
                case 5:
                    step7DisplayStatus.attr('src', outputsOnOffImgSrc);
                    break;
                case 6:
                    step7DisplayStatus.attr('src', zoneStatusImgSrc);
                    break;
                case 7:
                    step7DisplayStatus.attr('src', byPasszonesImgSrc);
                    break;
                case 8:
                    step7DisplayStatus.attr('src', zoneMonitorImgSrc);
                    $(this).off('click');
                    $(this).removeClass('playing');
                    $(this).find('img').attr('src', cmdKeySrc);
                    step7NextList.next().next().next().slideDown(500);
                    step7TopRowAllKeyItem.addClass('playing');
                    step7TopRowAllKeyItem.find('img').attr('src', topOptionHigKeyImgSrc);
                    step7ZoneMonitorHandler();
                    break;
                default:
                    break;
            }
        })
    }
    function step7ZoneMonitorHandler() {
        step7TopRowAllKeyItem.click(function () {
            keyPressBeepSound();
            step7TopRowAllKeyItem.off('click');
            step7TopRowAllKeyItem.find('img').attr('src', topOptionKeyImgSrc);
            step7TopRowAllKeyItem.removeClass('playing');
            step7NextList.next().next().next().next().slideDown(500);
            step7DisplayStatus.attr('src', zoneMonitorAllNbrImgSrc);
            step7TopRowNBRKey.addClass('playing');
            step7TopRowNBRKey.find('img').attr('src', topOptionHigKeyImgSrc);
            step7NBRKeyHandler();
        })
    }
    function step7NBRKeyHandler() {
        step7TopRowNBRKey.click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).find('img').attr('src', topOptionKeyImgSrc);
            $(this).removeClass('playing');
            step7NextList.next().next().next().next().next().slideDown(500);
            step7DisplayStatus.attr('src', zoneMonitorAddRmvImgSrc);
            step7Key7.find('img').attr('src', Key7HigImgSrc);
            step7Key7.addClass('playing');
            step7Key7Handler();
        })
    }
    function step7Key7Handler() {
        step7Key7.click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).find('img').attr('src', Key7ImgSrc);
            $(this).removeClass('playing');
            step7DisplayStatus.attr('src', zoneMonitorSevenAddRmvImgSrc);
            step7TopRowNBRKey.addClass('playing');
            step7TopRowNBRKey.find('img').attr('src', topOptionHigKeyImgSrc);
            step7AddZoneMonitorHandler();
        });
    }
    function step7AddZoneMonitorHandler() {
        step7TopRowNBRKey.click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).find('img').attr('src', topOptionKeyImgSrc);
            $(this).removeClass('playing');
            step7DisplayStatus.attr('src', zoneMonitorOn);
            $(`audio[data-key="3"]`).get(0).play();
            setTimeout(() => {
                step7DisplayStatus.attr('src', zoneMonitorAddRmvImgSrc);
                step7BackKey.addClass('playing');
                step7BackKey.find('img').attr('src', backHigKeyImgSrc);
                step7BackKeyHandler();
            }, 1500);
            step7DescriptionPare.hide();
            step7Upto7thList.hide();
            step7NextList.next().next().next().next().next().next().show();
            step7NextList.next().next().next().next().next().next().next().show();

        })
    }

    let step7BackKeyCount = 0;
    function step7BackKeyHandler() {
        step7BackKey.click(function () {
            keyPressBeepSound();
            step7BackKeyCount++;
            step7DisplayStatus.attr('src', zoneMonitorAllNbrImgSrc);
            if (step7BackKeyCount === 2) {
                $(this).removeClass('playing');
                $(this).off('click');
                step7DisplayStatus.attr('src', fridayDisplayImgSrc);
                $(this).find('img').attr('src', backKeyImgSrc);
                step7NextList.next().next().next().next().next().next().next().next().slideDown(500);
                step7NextList.next().next().next().next().next().next().next().next().next().slideDown(500);
                step7NextStepButton.slideDown(500);
                $('.three-col-outer-layer .center-col').addClass('bottom-btn');
            }
        })
    }
    // Replay Button for step7 Onclick Action
    replayDivForStep7.click(function () {
        slideDownHandler();
        keys.removeClass('playing');
        step7ResetExistingStateActions();
        step7CmdKeyHightlight();

    });
    // clear all functions and actions for the step7 once you click nextbutton and replaybutton
    function step7ResetExistingStateActions() {
        step7CmdKeyCount = 0;
        step7Menucount = 0;
        step7BackKeyCount = 0;
        step7DisplayStatus.attr('src', fridayDisplayImgSrc);
        step7CmdKey.find('img').attr('src', cmdKeySrc);
        step7TopRowAllKeyItem.find('img').attr('src', topOptionKeyImgSrc);
        step7FirstNumKey.find('img').attr('src', Key1ImgSrc);
        step7FirstNumKey.next().find('img').attr('src', Key2ImgSrc);
        step7FirstNumKey.next().next().find('img').attr('src', Key3ImgSrc);
        step7FirstNumKey.next().next().next().find('img').attr('src', Key4ImgSrc);
        step7Key7.find('img').attr('src', Key7ImgSrc);
        step7BackKey.find('img').attr('src', backKeyImgSrc);
        $('.three-col-outer-layer .center-col').removeClass('bottom-btn');
        step7CmdKey.off('click'); //clear step7 cmd key click action.
    }


    // Below function will run for step8 keypad 
    // step8 list item onclick handler 
    step7NextStepButton.click(function () {
        step8ResetExistingStateActions();
        step8CmdKeyHightlight();
    });
    step8ListItem.click(function () {
        step8ResetExistingStateActions();
        step8CmdKeyHightlight();
    });

    function step8CmdKeyHightlight() {
        step8CmdKey.addClass('playing');
        step8CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
        step8CmdKey.click(function () {
            keyPressBeepSound();
            step8CmdKeyCount++;
            step8DisplayStatus.attr('src', armDisArmImgSrc);
            // display menu image 
            if (step8CmdKeyCount === 2) {
                step8DisplayStatus.attr('src', menuNoYesImgSrc);
                $(this).off('click');
                step8CmdKey.find('img').attr('src', cmdKeySrc);
                step8NextList.slideDown(500);
                $(this).removeClass('playing');
                $(this).off('click');
                step8TopRowLastKeyItem.addClass('playing');
                step8TopRowLastKeyItem.find('img').attr('src', topOptionHigKeyImgSrc);
                step8TopRowRightKeyHightlight();
            }
        });
    }

    function step8TopRowRightKeyHightlight() {
        step8TopRowLastKeyItem.click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            step8DisplayStatus.attr('src', enterCodeKeyImgSrc);
            $(this).find('img').attr('src', topOptionKeyImgSrc);
            step8FirstNumKey.addClass('playing');
            step8FirstNumKey.find('img').attr('src', Key1HigImgSrc);
            step8FirstKeyHightlight();
        });
    }
    function step8FirstKeyHightlight() {
        step8FirstNumKey.click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            step8DisplayStatus.attr('src', enterCodeKey1ImgSrc);
            $(this).find('img').attr('src', Key1ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key2HigImgSrc);
            step8SecondKeyHightlight();
        });

    }
    function step8SecondKeyHightlight() {
        step8FirstNumKey.next().click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            step8DisplayStatus.attr('src', enterCodeKey2ImgSrc);
            $(this).find('img').attr('src', Key2ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key3HigImgSrc);
            step8ThirdKeyHightlight();
        });
    }
    function step8ThirdKeyHightlight() {
        step8FirstNumKey.next().next().click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            step8DisplayStatus.attr('src', enterCodeKey3ImgSrc);
            $(this).find('img').attr('src', Key3ImgSrc);
            $(this).next().addClass('playing');
            $(this).next().find('img').attr('src', Key4HigImgSrc);
            step8FourthKeyHightlight();
        });

    }
    function step8FourthKeyHightlight() {
        step8FirstNumKey.next().next().next().click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            step8DisplayStatus.attr('src', enterCodeKey4ImgSrc);
            $(this).find('img').attr('src', Key4ImgSrc);
            step8NextList.next().slideDown(500);
            step8CmdKey.addClass('playing');
            step8CmdKey.find('img').attr('src', cmdKeyHigImgSrc);
            step8MenuImgShowsHandler();
        });
    }
    function step8MenuImgShowsHandler() {
        step8CmdKey.click(function () {
            keyPressBeepSound();
            step8Menucount += 1;
            switch (step8Menucount) {
                case 1:
                    step8DisplayStatus.attr('src', alaramSilenceImgSrc);
                    step8NextList.next().next().slideDown(500);
                    break;
                case 2:
                    step8DisplayStatus.attr('src', sensorResetImgSrc);
                    break;
                case 2:
                    step8DisplayStatus.attr('src', sensorResetImgSrc);
                    break;
                case 3:
                    step8DisplayStatus.attr('src', doorAccessImgSrc);
                    break;
                case 4:
                    step8DisplayStatus.attr('src', armedAreasImgSrc);
                    break;
                case 5:
                    step8DisplayStatus.attr('src', outputsOnOffImgSrc);
                    break;
                case 6:
                    step8DisplayStatus.attr('src', zoneStatusImgSrc);
                    break;
                case 7:
                    step8DisplayStatus.attr('src', byPasszonesImgSrc);
                    break;
                case 8:
                    step8DisplayStatus.attr('src', zoneMonitorImgSrc);
                    break;
                case 9:
                    step8DisplayStatus.attr('src', systemStatusImgSrc);
                    break;
                case 10:
                    step8DisplayStatus.attr('src', systemTestImgSrc);
                    $(this).off('click');
                    $(this).removeClass('playing');
                    $(this).find('img').attr('src', cmdKeySrc);
                    step8DescriptionPare.hide();
                    step8FirstFourListItems.hide();
                    step8NextList.next().next().next().slideDown(500);
                    step8TopRowAllKeyItem.addClass('playing');
                    step8TopRowAllKeyItem.find('img').attr('src', topOptionHigKeyImgSrc);
                    step8SystemTestHandler();
                    break;
                default:
                    break;
            }
        })
    }
    function step8SystemTestHandler() {
        step8TopRowAllKeyItem.click(function () {
            keyPressBeepSound();
            step8TopRowAllKeyItem.off('click');
            step8TopRowAllKeyItem.removeClass('playing');
            step8TopRowAllKeyItem.find('img').attr('src', topOptionKeyImgSrc);
            step8DisplayStatus.attr('src', systemPanicsImgSrc);
            step8NextList.next().next().next().next().slideDown(500);
            step8TopRowFirstKeyItem.addClass('playing');
            step8TopRowFirstKeyItem.find('img').attr('src', topOptionHigKeyImgSrc);
            step8SystemPanicHandler();
        })
    }
    function step8SystemPanicHandler() {
        step8TopRowFirstKeyItem.click(function () {
            keyPressBeepSound();
            $(this).off('click');
            $(this).addClass('playing');
            $(this).find('img').attr('src', topOptionKeyImgSrc);
            $(`audio[data-key="4"]`).get(0).play(); //play step8 audio file
            step8DisplayStatus.attr('src', bellSoundingImgSrc);
            const step8Num1 = 1, step8Num2 = 8;
            let step8DisplayTestImgSrc = [bellSoundingImgSrc, keypadSoundingImgSrc, batteryOkayImgSrc, transmitTestImgSrc, transmitOkayImgSrc, testEndImgSrc, fridayDisplayImgSrc];
            for (let i = step8Num1; i <= step8Num2; i++) {
                setTimeout(() => {
                    let currentImage = step8DisplayTestImgSrc[i - 1];
                    step8DisplayStatus.attr('src', currentImage);
                    if (i === 7) {
                        step8NextList.next().next().next().next().next().slideDown(500);
                    }
                }, i * 2000);
            }

        })
    }

    // Replay Button for step7 Onclick Action
    replayDivForStep8.click(function () {
        slideDownHandler();
        keys.removeClass('playing');
        step8ResetExistingStateActions();
        step8CmdKeyHightlight();

    });
    // clear all functions and actions for the step7 once you click nextbutton and replaybutton
    function step8ResetExistingStateActions() {
        step8CmdKeyCount = 0;
        step8Menucount = 0;
        step8DisplayStatus.attr('src', fridayDisplayImgSrc);
        step8CmdKey.find('img').attr('src', cmdKeySrc);
        step8TopRowAllKeyItem.find('img').attr('src', topOptionKeyImgSrc);
        step8FirstNumKey.find('img').attr('src', Key1ImgSrc);
        step8FirstNumKey.next().find('img').attr('src', Key2ImgSrc);
        step8FirstNumKey.next().next().find('img').attr('src', Key3ImgSrc);
        step8FirstNumKey.next().next().next().find('img').attr('src', Key4ImgSrc);
        step8CmdKey.off('click'); //clear step8 cmd key click action.
    }
});


