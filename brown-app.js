$(document).ready(function () {
    // get the elements
    //Right Col List items
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
    // step5 display status 
    let systemCmdImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/System-command.png';
    let enterPasscodeImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Enter-passcode.png';
    let enterPtNumImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Enter-pt-number.png';
    let enterPtNum7ImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Enter-pt-num-7.png';
    let hallwayMtnImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Hallway-mtn.png';
    let pt7BypassedImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Pt7-bypassed.png';
    // step6 display status 
    let sensorResettingImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Sensors-resetting.png';
    let emptyDisplayStatusImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Empty-display-status.png';
    // step7 display status 
    let watchIsNowOffImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Watch-is-now-off.png';
    let watchIsNowOnImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Watch-is-now-on.png';
    // step8 display status 
    let fourPtsToTestImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Four-pts-to-test.png';
    let z1FrontDoorImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Z1-front-door.png';
    let z2HalwayMTNImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Z2-Halway-Mtn.png';
    let z3ShowRoomMTNImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Z%233-Showroom-MTN.png';
    let z4UntillRoomMTNImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Z4-Util-Room-Mtn.png';
    let sendingReportImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Sending-Report.png';
    let reportSentImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Report-Sent.png';
    // step9 display status 
    let entNewAgainImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Enter-new-again.png';
    let enterNewCodeImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Enter-new-code.png';
    let passCodeChangedImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Passcode-changed.png';
    // step10 display status 
    let areaFaultImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/Area-fault.png';
    let chkAreaImgSrc = 'https://f.hubspotusercontent00.net/hubfs/2432204/Brown-keypad-tutorial-assets/Images/CHK-area.png';

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
    let step4SecondListItem = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] ol li:nth-child(2)');
    let step4OrderListItems = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] ol li');
    let step4InitialDes = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] .description .initial-text');
    let step4NextSlideDes = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] .description .next-slide-txt');
    let step4NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] .btn img');
    let step4ReplayButton = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step4"] .replay');
    // step5 elements 
    let step5FirstNumKey = $('.three-col-outer-layer .left-col .keypad5 ul.number-keys  li:first-child');
    let step5DisplayStatus = $('.three-col-outer-layer .left-col .keypad5 .display-status img');
    let step5EntKey = $('.three-col-outer-layer .left-col .keypad5 ul.menu-keys  li:last-child');
    let step5CmdKeyEle = $('.three-col-outer-layer .left-col .keypad5 ul.number-keys li:last-child');
    let step5ZeroKeyEle = $('.three-col-outer-layer .left-col .keypad5 ul.number-keys li:nth-last-child(2)');
    let step5Key7Ele = $('.three-col-outer-layer .left-col .keypad5 ul.number-keys li:nth-child(7)');
    let step5FirstListItem = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol li:nth-child(1)');
    let step5SecondListItem = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol li:nth-child(2)');
    let step5RemOrderedListItems = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol li:nth-child(n+2)');
    let step5InitialDes = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] .description .step5-initial-text');
    let step5NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] .btn img');
    let step5Point5Div = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol .step5-point7');
    let step5Point8Div = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol .step5-list8');
    let step5ListItem5 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol li.list5');
    let step5ListItem6 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol li.list6');
    let step5ListItem7 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol li.list7');
    let step5ListItem8 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol li.list8');
    let step5NextSecText = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol .step5-next-section');
    let step5ReplayButton = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] .replay');

    // step6 elements 
    let step6CmdKeyEle = $('.three-col-outer-layer .left-col .keypad6 ul.number-keys li:last-child');
    let step6Key4Ele = $('.three-col-outer-layer .left-col .keypad6 ul.number-keys li:nth-child(4)');
    let step6Key7Ele = $('.three-col-outer-layer .left-col .keypad6 ul.number-keys li:nth-child(7)');
    let step6DisplayStatus = $('.three-col-outer-layer .left-col .keypad6 .display-status img');
    let step6NextListItem = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] ol li:nth-child(2)');
    let step6NextSecText = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] ol .step6-next-sec-div');
    let step6NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] .btn img');
    let step6ReplayButton = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step6"] .replay');

    // step7 elements
    let step7CmdKeyEle = $('.three-col-outer-layer .left-col .keypad7 ul.number-keys li:last-child');
    let step7Key6Ele = $('.three-col-outer-layer .left-col .keypad7 ul.number-keys li:nth-child(6)');
    let step7DisplayStatus = $('.three-col-outer-layer .left-col .keypad7 .display-status img');
    let step7ListItem2 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] ol li.step7-list2');
    let step7WatchModeTxt = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] ol p.step7-watch-mode-txt');
    let step7WatchModeBoldTxt = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] ol p.step7-watch-mode-bold');
    let step7NextSecText = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] ol p.step7-next-sec-tex');
    let step7NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] .btn img');
    let step7ReplayButton = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] .replay');
    let step7FirstListItem = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] ol li:first-child');
    let step7DescriptionPara = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step7"] .description>p');
    // step8 elements
    let step8CmdKeyEle = $('.three-col-outer-layer .left-col .keypad8 ul.number-keys li:last-child');
    let step8Key1Ele = $('.three-col-outer-layer .left-col .keypad8 ul.number-keys li:nth-child(1)');
    let step8Key4Ele = $('.three-col-outer-layer .left-col .keypad8 ul.number-keys li:nth-child(4)');
    let step8DisplayStatus = $('.three-col-outer-layer .left-col .keypad8 .display-status img');
    let step8NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] .btn img');
    let step8ReplayButton = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] .replay');
    let step8DescriptionPara = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] .description>p');
    let step8ListItem1 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] ol li:first-child');
    let step8ListItem2 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] ol p.step8-list2');
    let step8SensorsParaEle = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] ol p.step8-sensors');
    let step8ListItem3 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] ol li.step8-list3');
    let step8ReportTxtEle = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] ol p.step8-report-txt');
    let step8LastSecTxtEle = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step8"] ol .step8-last-sec-txt');
    // step9 elements
    let step9CmdKeyEle = $('.three-col-outer-layer .left-col .keypad9 ul.number-keys li:last-child');
    let step9Key1Ele = $('.three-col-outer-layer .left-col .keypad9 ul.number-keys li:first-child');
    let step9Key2Ele = $('.three-col-outer-layer .left-col .keypad9 ul.number-keys li:nth-child(2)');
    let step9Key3Ele = $('.three-col-outer-layer .left-col .keypad9 ul.number-keys li:nth-child(3)');
    let step9Key4Ele = $('.three-col-outer-layer .left-col .keypad9 ul.number-keys li:nth-child(4)');
    let step9Key5Ele = $('.three-col-outer-layer .left-col .keypad9 ul.number-keys li:nth-child(5)');
    let step9Key6Ele = $('.three-col-outer-layer .left-col .keypad9 ul.number-keys li:nth-child(6)');
    let step9Key7Ele = $('.three-col-outer-layer .left-col .keypad9 ul.number-keys li:nth-child(7)');
    let step9Key8Ele = $('.three-col-outer-layer .left-col .keypad9 ul.number-keys li:nth-child(8)');
    let step9EntKeyEle = $('.three-col-outer-layer .left-col .keypad9 ul.menu-keys  li:last-child');
    let step9DisplayStatus = $('.three-col-outer-layer .left-col .keypad9 .display-status img');
    let step9DescriptionPara = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step9"] .description>p');
    let step9ListItem1 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step9"] ol li:first-child');
    let step9FirstFourListItems = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step9"] ol li:nth-child(-n+4)');
    let step9ListItem2 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step9"] ol li:nth-child(2)');
    let step9ListItem3 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step9"] ol li:nth-child(3)');
    let step9ListItem4 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step9"] ol li:nth-child(4)');
    let step9NextSectionTxt = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step9"] ol p');
    let step9NextSectionBtn = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step9"] .btn img');
    let step9ReplayButton = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step9"] .replay');

    // step10 elements
    let step10CmdKeyEle = $('.three-col-outer-layer .left-col .keypad10 ul.number-keys li:last-child');
    let step10EntKeyEle = $('.three-col-outer-layer .left-col .keypad10 ul.menu-keys  li:last-child');
    let step10Key1Ele = $('.three-col-outer-layer .left-col .keypad10 ul.number-keys li:first-child');
    let step10Key2Ele = $('.three-col-outer-layer .left-col .keypad10 ul.number-keys li:nth-child(2)');
    let step10Key3Ele = $('.three-col-outer-layer .left-col .keypad10 ul.number-keys li:nth-child(3)');
    let step10Key4Ele = $('.three-col-outer-layer .left-col .keypad10 ul.number-keys li:nth-child(4)');
    let step10DisplayStatus = $('.three-col-outer-layer .left-col .keypad10 .display-status img');
    let step10DescriptionPara = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step10"] .description>p');
    let step10ListItem1 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step10"] ol li:first-child');
    let step10ListItem2 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step10"] ol li:nth-child(2)');
    let step10SysNotReadyTxt = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step10"] ol p.step10-sys-not-txt');
    let step10ListItem3 = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step10"] ol div.step10-list3');
    let step10CountTxt = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step10"] ol p.step10-count-txt');
    let step10UnarmedTxt = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step10"] ol p.step10-unarmed-txt');
    let step10ReplayButton = $('.three-col-outer-layer .center-col .demo-content[data-filter=".step10"] .replay');
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
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step1"] .btn').fadeIn(2000);
        // step2
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .btn').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step2"] .btn').fadeIn(1500);
        // step3 
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] li:first-child').hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] li:nth-child(2)').hide();
        step3DescriptionPara.hide();
        step3NextSectionBtn.hide();
        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step3"] li:first-child').slideDown(1000);
        // step4 
        step4FirstListItem.hide();
        step4SecondListItem.hide();
        step4NextSlideDes.hide();
        step4NextSectionBtn.hide();
        step4InitialDes.slideDown(1500);
        // step5 
        step5RemOrderedListItems.hide();
        step5Point5Div.hide();
        step5Point8Div.hide();
        step5NextSectionBtn.hide();
        step5NextSecText.hide();
        step5InitialDes.slideDown(1500);
        step5FirstListItem.slideDown(1500);
        //step6
        step6NextListItem.hide();
        step6NextSecText.hide();
        step6NextSectionBtn.hide();
        // step7 
        step7FirstListItem.slideDown(1500);
        step7DescriptionPara.slideDown(1500);
        step7ListItem2.hide();
        step7WatchModeTxt.hide();
        step7WatchModeBoldTxt.hide();
        step7NextSecText.hide();
        step7NextSectionBtn.hide();
        // step8 
        step8DescriptionPara.slideDown(1500);
        step8ListItem1.slideDown(1500);
        step8ListItem2.hide();
        step8SensorsParaEle.hide();
        step8ListItem3.hide();
        step8SensorsParaEle.hide();
        step8ReportTxtEle.hide();
        step8LastSecTxtEle.hide();
        step8NextSectionBtn.hide();
        // step9 
        step9FirstFourListItems.hide();
        step9DescriptionPara.slideDown(1500);
        step9ListItem1.slideDown(1500);
        step9NextSectionBtn.hide();
        step9NextSectionTxt.hide();
        // step10
        step10DescriptionPara.slideDown(1500);
        step10ListItem1.slideDown(1500);
        step10ListItem2.hide();
        step10ListItem3.hide();
        step10SysNotReadyTxt.hide();
        step10CountTxt.hide();
        step10UnarmedTxt.hide();
    }

    // data key 1 default beep sound play
    function playDefaultBeepSound() {
        let audio = $('audio[data-key="1"]');
        if (!audio) return; //stop the fun all together
        audio.currentTime = 0; //rewind to the start
        audio.get(0).play();
    }
    // Long beep sound play
    function playLongBeepSound() {
        let audio = $('audio[data-key="2"]');
        if (!audio) return; //stop the fun all together
        audio.currentTime = 0; //rewind to the start
        audio.get(0).play();
    }
    // Siren Audio play
    function playSirenSound() {
        let audio = $('audio[data-key="3"]');
        if (!audio) return; //stop the fun all together
        audio.currentTime = 0; //rewind to the start
        audio.get(0).play();
    }
    // chirp Audio play
    function playChirpSound() {
        let audio = $('audio[data-key="4"]');
        if (!audio) return; //stop the fun all together
        audio.currentTime = 0; //rewind to the start
        audio.get(0).play();
    }
    // steps 1-2-3 keys handler 
    function commonNumKeyHandler(numberKeyEle, prevKeyInactiveImgSrc, nextKeyActiveImgSrc, displayStatusEle, displayStatusImgSrcEle) {
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
                    // else playDefaultBeepSound();
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
                    step4FirstNumKeyHandler(); //call step4 first num key
                }
            }, i * 1000);
        }
    }
    // step3 next btn onclick handler 
    step3NextSectionBtn.click(function () {
        step4ResetExistingStateActions();
        step4DisarmInitialImagesLoadHandler();
    });
    // step4 list item onclick handler 
    step4ListItem.click(function () {
        step4ResetExistingStateActions();
        step4DisarmInitialImagesLoadHandler();
    });
    // step4replay btn handler 
    step4ReplayButton.click(function () {
        step4ResetExistingStateActions();
        step4DisarmInitialImagesLoadHandler();
        slideDownHandler();
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
            step4SecondListItem.slideDown(500);
            step4EntKey.addClass('playing');
            step4EntKey.find('img').attr('src', entActiveImgSrc);
            step4EnterKeyHandler();
        });
    }
    function step4EnterKeyHandler() {
        step4EntKey.click(function () {
            entActiveKeyHandler($(this));
            $(this).off('click');
            step4ShowReadyToArmDisplayHandler();
            setTimeout(() => {
                step4InitialDes.hide();
                step4OrderListItems.hide();
                step4NextSlideDes.slideDown(500);
                step4NextSectionBtn.slideDown(500);
            }, 1000);


        });
    }
    function step4ShowReadyToArmDisplayHandler() {
        const step4ImgLoop1 = 0, step4ImgLoop2 = 2;
        let step4ExitLoopImgs = [alarmSilencedImgSrc, a1AlarmImgSrc, readyToArmImgSrc];
        for (let i = step4ImgLoop1; i <= step4ImgLoop2; i++) {
            setTimeout(() => {
                if (i === 2) {
                    playLongBeepSound();
                }
                let currentImg = step4ExitLoopImgs[i];
                step4DisplayStatus.attr('src', currentImg);
            }, i * 800);
        }
    }
    // step4 clear all functions and actions once you click on replay or next-section button
    function step4ResetExistingStateActions() {
        step4DisplayStatus.attr('src', disarmNowImgSrc);
        resetAllKeysToInactiveImages(step4FirstNumKey, step4EntKey);
    }


    // ==============================================
    //  Below fun will run once user reach to step5 
    // ==============================================
    step4NextSectionBtn.click(function () {
        step5ResetExistingStateActions();
        initialKeyActiveHandler(step5CmdKeyEle, cmdActiveImgSrc);
        step5InitialCmdKeyHandler();
    });
    // step5 list item onclick handler 
    step5ListItem.click(function () {
        step5ResetExistingStateActions();
        initialKeyActiveHandler(step5CmdKeyEle, cmdActiveImgSrc);
        step5InitialCmdKeyHandler();
    });
    // step5replay btn handler 
    step5ReplayButton.click(function () {
        step5ResetExistingStateActions();
        initialKeyActiveHandler(step5CmdKeyEle, cmdActiveImgSrc);
        slideDownHandler();
        step5InitialCmdKeyHandler();
    });
    // step5 clear all functions and actions once you click on replay or next-section button
    function step5ResetExistingStateActions() {
        step5DisplayStatus.attr('src', readyToArmImgSrc);
        // reset first four num and ent keys 
        resetAllKeysToInactiveImages(step5FirstNumKey, step5EntKey);
        step5ZeroKeyEle.find('img').attr('src', key0InactiveImgSrc);
        step5Key7Ele.find('img').attr('src', key7InactiveImgSrc);
    }
    function nonSequenceKeyHandler(currentNumberKeyEle, prevKeyInactiveImgSrc, nextNumberKey, nextKeyActiveImgSrc, displayStatusEle, displayStatusImgSrcEle) {
        playDefaultBeepSound();
        currentNumberKeyEle.off('click');
        currentNumberKeyEle.removeClass('playing');
        displayStatusEle.attr('src', displayStatusImgSrcEle);
        currentNumberKeyEle.find('img').attr('src', prevKeyInactiveImgSrc);
        nextNumberKey.addClass('playing');
        nextNumberKey.find('img').attr('src', nextKeyActiveImgSrc);
    }
    function step5InitialCmdKeyHandler() {
        step5CmdKeyEle.click(function () {
            nonSequenceKeyHandler(step5CmdKeyEle, cmdInactiveImgSrc, step5ZeroKeyEle, key0ActiveImgSrc, step5DisplayStatus, systemCmdImgSrc);
            step5ZeroNumKeyHandler();
        });
    }
    function step5ZeroNumKeyHandler() {
        step5ZeroKeyEle.click(function () {
            nonSequenceKeyHandler(step5ZeroKeyEle, key0InactiveImgSrc, step5FirstNumKey, key1ActiveImgSrc, step5DisplayStatus, enterPasscodeImgSrc);
            step5SecondListItem.slideDown(500);
            step5FirstNumKeyHandler();
        });
    }
    function step5FirstNumKeyHandler() {
        step5FirstNumKey.click(function () {
            commonNumKeyHandler($(this), key1InactiveImgSrc, key2ActiveImgSrc, step5DisplayStatus, oneStarImgSrc);
            step5SecondNumKeyHandler();
        });
    }
    function step5SecondNumKeyHandler() {
        step5FirstNumKey.next().click(function () {
            commonNumKeyHandler($(this), key2InactiveImgSrc, key3ActiveImgSrc, step5DisplayStatus, twoStarsImgSrc);
            step5ThirdNumKeyHandler();
        });
    }
    function step5ThirdNumKeyHandler() {
        step5FirstNumKey.next().next().click(function () {
            commonNumKeyHandler($(this), key3InactiveImgSrc, key4ActiveImgSrc, step5DisplayStatus, threeStarsImgSrc);
            step5FourthNumKeyHandler();
        });
    }
    function step5FourthNumKeyHandler() {
        step5FirstNumKey.next().next().next().click(function () {
            commonNumKeyHandler($(this), key4InactiveImgSrc, null, step5DisplayStatus, fourStarsImgSrc);
            $(this).next().find('img').attr('src', key5InactiveImgSrc);
            $(this).next().removeClass('playing');
            step5EntKey.addClass('playing');
            step5EntKey.find('img').attr('src', entActiveImgSrc);
            step5EnterKeyHandler();
        });
    }
    function step5EnterKeyHandler() {
        step5EntKey.click(function () {
            step5SecondListItem.next().slideDown(500);
            nonSequenceKeyHandler(step5EntKey, entInactiveImgSrc, step5Key7Ele, key7ActiveImgSrc, step5DisplayStatus, enterPtNumImgSrc);
            step5Key7Handler();
        });
    }
    function step5Key7Handler() {
        step5Key7Ele.click(function () {
            nonSequenceKeyHandler(step5Key7Ele, key7InactiveImgSrc, step5EntKey, entActiveImgSrc, step5DisplayStatus, enterPtNum7ImgSrc);
            step5Click1EnterMenuHandler();
        });
    }
    function step5Click1EnterMenuHandler() {
        step5EntKey.click(function () {
            nonSequenceKeyHandler(step5EntKey, entInactiveImgSrc, step5EntKey, entActiveImgSrc, step5DisplayStatus, hallwayMtnImgSrc);
            step5InitialDes.hide();
            $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol>li:nth-child(-n+3)').hide();
            step5SecondListItem.next().next().slideDown(500);
            step5Click2EnterMenuHandler();
        });
    }
    function step5Click2EnterMenuHandler() {
        step5EntKey.click(function () {
            playDefaultBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            step5DisplayStatus.attr('src', pt7BypassedImgSrc);
            $(this).find('img').attr('src', entInactiveImgSrc);
            step5Point5Div.slideDown(500);
            setTimeout(() => {
                step5DisplayStatus.attr('src', readyToArmImgSrc);
                step5ListItem5.slideDown(500);
                nonSequenceKeyHandler(step5EntKey, entInactiveImgSrc, step5CmdKeyEle, cmdActiveImgSrc, step5DisplayStatus, readyToArmImgSrc);
                step5CmdClickToZeroKeyHandler();
            }, 2000);
        });
    }
    function step5CmdClickToZeroKeyHandler() {
        step5CmdKeyEle.click(function () {
            nonSequenceKeyHandler(step5CmdKeyEle, cmdInactiveImgSrc, step5ZeroKeyEle, key0ActiveImgSrc, step5DisplayStatus, systemCmdImgSrc);
            step5DoubleZeroKeyHandler();
        });
    }
    function step5DoubleZeroKeyHandler() {
        step5ZeroKeyEle.click(function () {
            playDefaultBeepSound();
            step5ZeroKeyEle.click(function () {
                playDefaultBeepSound();
                nonSequenceKeyHandler(step5ZeroKeyEle, key0InactiveImgSrc, step5FirstNumKey, key1ActiveImgSrc, step5DisplayStatus, enterPasscodeImgSrc);
                step5ListItem6.slideDown(500);
                step5AgainFirstNumKeyHandler();
            });
        });
    }
    function step5AgainFirstNumKeyHandler() {
        step5FirstNumKey.click(function () {
            commonNumKeyHandler($(this), key1InactiveImgSrc, key2ActiveImgSrc, step5DisplayStatus, oneStarImgSrc);
            step5AgainSecondNumKeyHandler();
        });
    }
    function step5AgainSecondNumKeyHandler() {
        step5FirstNumKey.next().click(function () {
            commonNumKeyHandler($(this), key2InactiveImgSrc, key3ActiveImgSrc, step5DisplayStatus, twoStarsImgSrc);
            step5AgainThirdNumKeyHandler();
        });
    }
    function step5AgainThirdNumKeyHandler() {
        step5FirstNumKey.next().next().click(function () {
            commonNumKeyHandler($(this), key3InactiveImgSrc, key4ActiveImgSrc, step5DisplayStatus, threeStarsImgSrc);
            step5AgainFourthNumKeyHandler();
        });
    }
    function step5AgainFourthNumKeyHandler() {
        step5FirstNumKey.next().next().next().click(function () {
            commonNumKeyHandler($(this), key4InactiveImgSrc, null, step5DisplayStatus, fourStarsImgSrc);
            $(this).next().find('img').attr('src', key5InactiveImgSrc);
            $(this).next().removeClass('playing');
            step5EntKey.addClass('playing');
            step5EntKey.find('img').attr('src', entActiveImgSrc);
            step5AgainEnterKeyHandler();
        });
    }
    function step5AgainEnterKeyHandler() {
        step5EntKey.click(function () {
            step5ListItem7.slideDown(500);
            nonSequenceKeyHandler(step5EntKey, entInactiveImgSrc, step5Key7Ele, key7ActiveImgSrc, step5DisplayStatus, enterPtNumImgSrc);
            step5AgainKey7Handler();
        });
    }
    function step5AgainKey7Handler() {
        step5Key7Ele.click(function () {
            nonSequenceKeyHandler(step5Key7Ele, key7InactiveImgSrc, step5EntKey, entActiveImgSrc, step5DisplayStatus, enterPtNum7ImgSrc);
            step5AgainClick1EnterKeyHandler();
        });
    }
    function step5AgainClick1EnterKeyHandler() {
        step5EntKey.click(function () {
            nonSequenceKeyHandler(step5EntKey, entInactiveImgSrc, step5EntKey, entActiveImgSrc, step5DisplayStatus, hallwayMtnImgSrc);
            $('.three-col-outer-layer .center-col .demo-content[data-filter=".step5"] ol>li:nth-child(-n+8)').hide();
            step5Point5Div.hide();
            step5InitialDes.hide();
            step5Point8Div.slideDown(500);
            step5AgainClick2EnterKeyHandler();
        });
    }
    function step5AgainClick2EnterKeyHandler() {
        step5EntKey.click(function () {
            playDefaultBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            step5DisplayStatus.attr('src', readyToArmImgSrc);
            $(this).find('img').attr('src', entInactiveImgSrc);
            step5NextSecText.slideDown(500);
            step5NextSectionBtn.slideDown(500);
        });
    }

    // ==============================================
    //  Below fun will run once user reach to step6 
    // ==============================================
    step5NextSectionBtn.click(function () {
        step6ResetExistingStateActions();
        initialKeyActiveHandler(step6CmdKeyEle, cmdActiveImgSrc);
        step6InitialCmdKeyHandler();
    });
    // step6 list item onclick handler 
    step6ListItem.click(function () {
        step6ResetExistingStateActions();
        initialKeyActiveHandler(step6CmdKeyEle, cmdActiveImgSrc);
        step6InitialCmdKeyHandler();
    });
    // step6 replay btn handler 
    step6ReplayButton.click(function () {
        step6ResetExistingStateActions();
        initialKeyActiveHandler(step6CmdKeyEle, cmdActiveImgSrc);
        slideDownHandler();
        step6InitialCmdKeyHandler();
    });
    // step6 clear all functions and actions once you click on replay or next-section button
    function step6ResetExistingStateActions() {
        clearTimeout(step6ClearTimeOut1);
        clearTimeout(step6ClearTimeOut2);
        step6DisplayStatus.attr('src', readyToArmImgSrc);
        step6Key4Ele.find('img').attr('src', key4InactiveImgSrc);
        step6Key7Ele.find('img').attr('src', key7InactiveImgSrc);
    }
    function step6InitialCmdKeyHandler() {
        step6CmdKeyEle.click(function () {
            nonSequenceKeyHandler(step6CmdKeyEle, cmdInactiveImgSrc, step6Key4Ele, key4ActiveImgSrc, step6DisplayStatus, systemCmdImgSrc);
            step6key4ClickHandler();
        });
    }
    function step6key4ClickHandler() {
        step6Key4Ele.click(function () {
            nonSequenceKeyHandler(step6Key4Ele, key4InactiveImgSrc, step6Key7Ele, key7ActiveImgSrc, step6DisplayStatus, systemCmdImgSrc);
            step6key7ClickHandler();
        });
    }
    let step6ClearTimeOut1, step6ClearTimeOut2;
    function step6key7ClickHandler() {
        step6Key7Ele.click(function () {
            playDefaultBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            step6DisplayStatus.attr('src', sensorResettingImgSrc);
            $(this).find('img').attr('src', key7InactiveImgSrc);
            step6NextListItem.slideDown(500);
            step6ClearTimeOut1 = setTimeout(() => {
                step6DisplayStatus.attr('src', emptyDisplayStatusImgSrc);
                step6ShowNextButtonHandler();
            }, 2000);
            function step6ShowNextButtonHandler() {
                step6ClearTimeOut2 = setTimeout(() => {
                    step6DisplayStatus.attr('src', readyToArmImgSrc);
                    step6NextSecText.slideDown(500);
                    step6NextSectionBtn.slideDown(500);
                }, 2000);
            }
        });
    }


    // ==============================================
    //  Below fun will run once user reach to step7 
    // ==============================================
    step6NextSectionBtn.click(function () {
        step7ResetExistingStateActions();
        initialKeyActiveHandler(step7CmdKeyEle, cmdActiveImgSrc);
        step7CmdKeyHandler();
    });
    // step7 list item onclick handler 
    step7ListItem.click(function () {
        step7ResetExistingStateActions();
        initialKeyActiveHandler(step7CmdKeyEle, cmdActiveImgSrc);
        step7CmdKeyHandler();
    });
    // step7 replay btn handler 
    step7ReplayButton.click(function () {
        step7ResetExistingStateActions();
        initialKeyActiveHandler(step7CmdKeyEle, cmdActiveImgSrc);
        slideDownHandler();
        step7CmdKeyHandler();
    });
    // step7 clear all functions and actions once you click on replay or next-section button
    function step7ResetExistingStateActions() {
        step7DisplayStatus.attr('src', readyToArmImgSrc);
        step7Key6Ele.find('img').attr('src', key6InactiveImgSrc);
        keys.off('click');
    }
    function step7CmdKeyHandler() {
        step7CmdKeyEle.click(function () {
            nonSequenceKeyHandler(step7CmdKeyEle, cmdInactiveImgSrc, step7Key6Ele, key6ActiveImgSrc, step7DisplayStatus, systemCmdImgSrc);
            step7key6Handler();
        });
    }
    function step7key6Handler() {
        step7Key6Ele.click(function () {
            playDefaultBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            $(this).find('img').attr('src', key6InactiveImgSrc);
            step7DisplayStatus.attr('src', watchIsNowOnImgSrc);
            step7WatchModeTxt.slideDown(500);
            setTimeout(() => {
                step7CmdKeyEle.addClass('playing');
                step7CmdKeyEle.find('img').attr('src', cmdActiveImgSrc);
                step7DisplayStatus.attr('src', readyToArmImgSrc);
                step7ListItem2.slideDown(500);
                step7CmdKeyMenuHandler();
            }, 1500);
        });
    }
    function step7CmdKeyMenuHandler() {
        step7CmdKeyEle.click(function () {
            nonSequenceKeyHandler(step7CmdKeyEle, cmdInactiveImgSrc, step7Key6Ele, key6ActiveImgSrc, step7DisplayStatus, systemCmdImgSrc);
            step7Key6MenuHandler();
        });
    }
    function step7Key6MenuHandler() {
        step7Key6Ele.click(function () {
            playDefaultBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            $(this).find('img').attr('src', key6InactiveImgSrc);
            step7DisplayStatus.attr('src', watchIsNowOffImgSrc);
            step7ListItem2.hide();
            step7FirstListItem.hide();
            step7DescriptionPara.hide();
            step7WatchModeTxt.hide();
            step7WatchModeBoldTxt.show();
            setTimeout(() => {
                step7DisplayStatus.attr('src', readyToArmImgSrc);
                step7NextSecText.slideDown(500);
                step7NextSectionBtn.slideDown(500);
            }, 1500);
        });
    }


    // ==============================================
    //  Below fun will run once user reach to step8 
    // ==============================================
    step7NextSectionBtn.click(function () {
        step8ResetExistingStateActions();
        initialKeyActiveHandler(step8CmdKeyEle, cmdActiveImgSrc);
        step8InitialCmdKeyHandler();
    });
    // step8 list item onclick handler 
    step8ListItem.click(function () {
        step8ResetExistingStateActions();
        initialKeyActiveHandler(step8CmdKeyEle, cmdActiveImgSrc);
        step8InitialCmdKeyHandler();
    });
    // step8 replay btn handler 
    step8ReplayButton.click(function () {
        step8ResetExistingStateActions();
        initialKeyActiveHandler(step8CmdKeyEle, cmdActiveImgSrc);
        slideDownHandler();
        step8InitialCmdKeyHandler();
    });
    // step8 clear all functions and actions once click on replay or next-section button
    function step8ResetExistingStateActions() {
        clearTimeout(step8ClearTimeOut);
        clearTimeout(step8ClearTimeOut1);
        step8DisplayStatus.attr('src', readyToArmImgSrc);
        step8Key1Ele.find('img').attr('src', key1InactiveImgSrc);
        step8Key4Ele.find('img').attr('src', key4InactiveImgSrc);
        keys.off('click');
    }
    function step8InitialCmdKeyHandler() {
        step8CmdKeyEle.click(function () {
            nonSequenceKeyHandler(step8CmdKeyEle, cmdInactiveImgSrc, step8Key4Ele, key4ActiveImgSrc, step8DisplayStatus, systemCmdImgSrc);
            step8Key4DoubleClickHandler();
        });
    }
    let step8ClearTimeOut;
    function step8Key4DoubleClickHandler() {
        step8Key4Ele.click(function () {
            playDefaultBeepSound();
            step8Key4Ele.click(function () {
                $(this).off('click');
                $(this).removeClass('playing');
                step8ListItem2.slideDown(500);
                $(this).find('img').attr('src', key4InactiveImgSrc);
                let step8ImgsArray = [fourPtsToTestImgSrc, z1FrontDoorImgSrc, z2HalwayMTNImgSrc, z3ShowRoomMTNImgSrc, z4UntillRoomMTNImgSrc, readyToArmImgSrc];
                for (let i = 0; i < step8ImgsArray.length; i++) {
                    step8ClearTimeOut = setTimeout(() => {
                        let currentImage = step8ImgsArray[i];
                        step8DisplayStatus.attr('src', currentImage);
                        if (i === 0) {
                            playSirenSound();
                        }
                        else if (i === 5) {
                            step8DescriptionPara.hide();
                            step8ListItem1.hide();
                            step8ListItem2.hide();
                            step8SensorsParaEle.slideDown(500)
                            step8ListItem3.slideDown(500)
                            initialKeyActiveHandler(step8CmdKeyEle, cmdActiveImgSrc);
                            step8AgainCmdClickHandler();
                        }
                        else playChirpSound();

                    }, i * 2000);
                }
            })
        });
    }
    function step8AgainCmdClickHandler() {
        step8CmdKeyEle.click(function () {
            nonSequenceKeyHandler(step8CmdKeyEle, cmdInactiveImgSrc, step8Key4Ele, key4ActiveImgSrc, step5DisplayStatus, readyToArmImgSrc);
            step8Key4ClickHandler();
        });
    }
    function step8Key4ClickHandler() {
        step8Key4Ele.click(function () {
            nonSequenceKeyHandler(step8Key4Ele, key4InactiveImgSrc, step8Key1Ele, key1ActiveImgSrc, step5DisplayStatus, readyToArmImgSrc);
            step8Key1ClickHandler();
        });
    }
    let step8ClearTimeOut1;
    function step8Key1ClickHandler() {
        step8Key1Ele.click(function () {
            playDefaultBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            $(this).find('img').attr('src', key1InactiveImgSrc);
            step8ReportTxtEle.slideDown(500);
            let step8key1ClickImgSrc = [sendingReportImgSrc, reportSentImgSrc, readyToArmImgSrc];
            for (let i = 0; i < step8key1ClickImgSrc.length; i++) {
                step8ClearTimeOut1 = setTimeout(() => {
                    let currentImg = step8key1ClickImgSrc[i];
                    step8DisplayStatus.attr('src', currentImg);
                    if (i === 1) {
                        step8LastSecTxtEle.slideDown(500);
                    } else if (i === 2) {
                        step8NextSectionBtn.slideDown(500);
                    }
                }, i * 2000);
            }
        });
    }


    // ==============================================
    //  Below fun will run once user reach to step9 
    // ==============================================
    step8NextSectionBtn.click(function () {
        step9ResetExistingStateActions();
        initialKeyActiveHandler(step9CmdKeyEle, cmdActiveImgSrc);
        step9InitialCmdKeyHandler();
    });
    // step9 list item onclick handler 
    step9ListItem.click(function () {
        step9ResetExistingStateActions();
        initialKeyActiveHandler(step9CmdKeyEle, cmdActiveImgSrc);
        step9InitialCmdKeyHandler();
    });
    // step9 replay btn handler 
    step9ReplayButton.click(function () {
        step9ResetExistingStateActions();
        initialKeyActiveHandler(step9CmdKeyEle, cmdActiveImgSrc);
        slideDownHandler();
        step9InitialCmdKeyHandler();
    });
    // step9 clear all functions and actions once click on replay or next-section button
    function step9ResetExistingStateActions() {
        clearTimeout(step9ClearTimeOut1);
        step9DisplayStatus.attr('src', readyToArmImgSrc);
        resetAllKeysToInactiveImages(step9Key1Ele, step9EntKeyEle);
        step9Key5Ele.find('img').attr('src', key5InactiveImgSrc);
        step9Key6Ele.find('img').attr('src', key6InactiveImgSrc);
        step9Key7Ele.find('img').attr('src', key7InactiveImgSrc);
        step9Key8Ele.find('img').attr('src', key8InactiveImgSrc);
    }
    function step9InitialCmdKeyHandler() {
        step9CmdKeyEle.click(function () {
            nonSequenceKeyHandler(step9CmdKeyEle, cmdInactiveImgSrc, step9Key5Ele, key5ActiveImgSrc, step9DisplayStatus, systemCmdImgSrc);
            step9key5ClickHandler();
        });
    }
    function step9key5ClickHandler() {
        step9Key5Ele.click(function () {
            playDefaultBeepSound();
            step9Key5Ele.click(function () {
                $(this).off('click');
                step9ListItem2.slideDown(500);
                step9Key5Ele.removeClass('playing');
                step9Key5Ele.find('img').attr('src', key5InactiveImgSrc);
                step9DisplayStatus.attr('src', enterPasscodeImgSrc);
                initialKeyActiveHandler(step9Key1Ele, key1ActiveImgSrc);
                step9Key1ClickHandler();
            });
        });
    }
    function step9Key1ClickHandler() {
        step9Key1Ele.click(function () {
            commonNumKeyHandler($(this), key1InactiveImgSrc, key2ActiveImgSrc, step9DisplayStatus, oneStarImgSrc);
            step9Key2ClickHandler();
        });
    }
    function step9Key2ClickHandler() {
        step9Key2Ele.click(function () {
            commonNumKeyHandler($(this), key2InactiveImgSrc, key3ActiveImgSrc, step9DisplayStatus, twoStarsImgSrc);
            step9Key3ClickHandler();
        });
    }
    function step9Key3ClickHandler() {
        step9Key3Ele.click(function () {
            commonNumKeyHandler($(this), key3InactiveImgSrc, key4ActiveImgSrc, step9DisplayStatus, threeStarsImgSrc);
            step9Key4ClickHandler();
        });
    }
    function step9Key4ClickHandler() {
        step9Key4Ele.click(function () {
            nonSequenceKeyHandler($(this), key4InactiveImgSrc, step9EntKeyEle, entActiveImgSrc, step9DisplayStatus, fourStarsImgSrc);
            step9EntKeyClickHandler();
        });
    }
    function step9EntKeyClickHandler() {
        step9EntKeyEle.click(function () {
            step9ListItem3.slideDown(500);
            nonSequenceKeyHandler($(this), entInactiveImgSrc, step9Key5Ele, key5ActiveImgSrc, step9DisplayStatus, enterNewCodeImgSrc);
            step9Key5ClickHandler();
        });
    }
    // step9 key 5-6-7-8 click's handlers
    function step9Key5ClickHandler() {
        step9Key5Ele.click(function () {
            commonNumKeyHandler($(this), key5InactiveImgSrc, key6ActiveImgSrc, step9DisplayStatus, oneStarImgSrc);
            step9Key6ClickHandler();
        });
    }
    function step9Key6ClickHandler() {
        step9Key6Ele.click(function () {
            commonNumKeyHandler($(this), key6InactiveImgSrc, key7ActiveImgSrc, step9DisplayStatus, twoStarsImgSrc);
            step9Key7ClickHandler();
        });
    }
    function step9Key7ClickHandler() {
        step9Key7Ele.click(function () {
            commonNumKeyHandler($(this), key7InactiveImgSrc, key8ActiveImgSrc, step9DisplayStatus, threeStarsImgSrc);
            step9Key8ClickHandler();
        });
    }
    function step9Key8ClickHandler() {
        step9Key8Ele.click(function () {
            nonSequenceKeyHandler($(this), key8InactiveImgSrc, step9EntKeyEle, entActiveImgSrc, step9DisplayStatus, fourStarsImgSrc);
            step9EntKeySecondTimeClickHandler();
        });
    }
    // step9 enter Keys second time click handler
    function step9EntKeySecondTimeClickHandler() {
        step9EntKeyEle.click(function () {
            step9ListItem4.slideDown(500);
            nonSequenceKeyHandler($(this), entInactiveImgSrc, step9Key5Ele, key5ActiveImgSrc, step9DisplayStatus, entNewAgainImgSrc);
            step9Key5SecondTimeClickHandler();
        });
    }
    // step9 key 5-6-7-8 second time click handlers
    function step9Key5SecondTimeClickHandler() {
        step9Key5Ele.click(function () {
            commonNumKeyHandler($(this), key5InactiveImgSrc, key6ActiveImgSrc, step9DisplayStatus, oneStarImgSrc);
            step9Key6SecondTimeClickHandler();
        });
    }
    function step9Key6SecondTimeClickHandler() {
        step9Key6Ele.click(function () {
            commonNumKeyHandler($(this), key6InactiveImgSrc, key7ActiveImgSrc, step9DisplayStatus, twoStarsImgSrc);
            step9Key7SecondTimeClickHandler();
        });
    }
    function step9Key7SecondTimeClickHandler() {
        step9Key7Ele.click(function () {
            commonNumKeyHandler($(this), key7InactiveImgSrc, key8ActiveImgSrc, step9DisplayStatus, threeStarsImgSrc);
            step9Key8SecondTimeClickHandler();
        });
    }
    function step9Key8SecondTimeClickHandler() {
        step9Key8Ele.click(function () {
            nonSequenceKeyHandler($(this), key8InactiveImgSrc, step9EntKeyEle, entActiveImgSrc, step9DisplayStatus, fourStarsImgSrc);
            step9EntKeyThirdTimeClickHandler();
        });
    }
    let step9ClearTimeOut1;
    function step9EntKeyThirdTimeClickHandler() {
        step9EntKeyEle.click(function () {
            playDefaultBeepSound();
            $(this).off('click');
            $(this).find('img').attr('src', entInactiveImgSrc);
            step9DisplayStatus.attr('src', passCodeChangedImgSrc);
            step9FirstFourListItems.hide();
            step9DescriptionPara.hide();
            step9NextSectionTxt.slideDown(500);
            step9NextSectionBtn.slideDown(500);
            step9ClearTimeOut1 = setTimeout(() => {
                step9DisplayStatus.attr('src', readyToArmImgSrc);
            }, 1000);
        });
    }

    // ==============================================
    //  Below fun will run once user reach to step10 
    // ==============================================
    step9NextSectionBtn.click(function () {
        step10ResetExistingStateActions();
        initialKeyActiveHandler(step10Key1Ele, key1ActiveImgSrc);
        step10Key1ClickHandler()
    });
    // step10 list item onclick handler 
    step10ListItem.click(function () {
        step10ResetExistingStateActions();
        initialKeyActiveHandler(step10Key1Ele, key1ActiveImgSrc);
        step10Key1ClickHandler()
    });
    // step10 replay btn handler 
    step10ReplayButton.click(function () {
        step10ResetExistingStateActions();
        initialKeyActiveHandler(step10Key1Ele, key1ActiveImgSrc);
        slideDownHandler();
        step10Key1ClickHandler()
    });
    // step10 clear all functions and actions once click on replay or next-section button
    function step10ResetExistingStateActions() {
        clearTimeout(step10ClearTimeOut1);
        clearTimeout(step10ClearTimeOut2);
        resetAllKeysToInactiveImages(step10Key1Ele, step10EntKeyEle);
        step10DisplayStatus.attr('src', readyToArmImgSrc);
        step10CmdKeyEle.find('img').attr('src', cmdInactiveImgSrc);
    }
    function step10Key1ClickHandler() {
        step10Key1Ele.click(function () {
            commonNumKeyHandler($(this), key1InactiveImgSrc, key2ActiveImgSrc, step10DisplayStatus, oneStarImgSrc);
            step10Key2ClickHandler();
        });
    }
    function step10Key2ClickHandler() {
        step10Key2Ele.click(function () {
            commonNumKeyHandler($(this), key2InactiveImgSrc, key3ActiveImgSrc, step10DisplayStatus, twoStarsImgSrc);
            step10Key3ClickHandler();
        });
    }
    function step10Key3ClickHandler() {
        step10Key3Ele.click(function () {
            commonNumKeyHandler($(this), key3InactiveImgSrc, key4ActiveImgSrc, step10DisplayStatus, threeStarsImgSrc);
            step10Key4ClickHandler();
        });
    }
    function step10Key4ClickHandler() {
        step10Key4Ele.click(function () {
            step10ListItem2.slideDown(500);
            nonSequenceKeyHandler($(this), key4InactiveImgSrc, step10EntKeyEle, entActiveImgSrc, step10DisplayStatus, fourStarsImgSrc);
            step10EntKeyClickHandler();
        });
    }
    let step10ClearTimeOut1, step10ClearTimeOut2;
    function step10EntKeyClickHandler() {
        step10EntKeyEle.click(function () {
            playDefaultBeepSound();
            $(this).off('click');
            $(this).removeClass('playing');
            $(this).find('img').attr('src', entInactiveImgSrc);
            step10DescriptionPara.hide();
            step10ListItem1.hide();
            step10ListItem2.hide();
            step10SysNotReadyTxt.slideDown(500);
            let step10AreaImgSrc = [chkAreaImgSrc, areaFaultImgSrc];
            for (let i = 0; i < step10AreaImgSrc.length; i++) {
                step10ClearTimeOut1 = setTimeout(() => {
                    let currentImg = step10AreaImgSrc[i];
                    step10DisplayStatus.attr('src', currentImg);
                    if (i === 1) {
                        step10ListItem3.slideDown(500);
                        $('.three-col-outer-layer .center-col .demo-content[data-filter=".step10"] ol div.step10-list3 li').slideDown(500);
                        initialKeyActiveHandler(step10CmdKeyEle, cmdActiveImgSrc);
                        step10CmdClickHandler();
                    }
                }, i * 2000);
            }
        });
    }
    function step10CmdClickHandler() {
        step10CmdKeyEle.click(function () {
            nonSequenceKeyHandler($(this), cmdInactiveImgSrc, step10EntKeyEle, entActiveImgSrc, step10DisplayStatus, areaFaultImgSrc);
            step10EntKeySecondTimeClickHandler();
        });
    }
    function step10EntKeySecondTimeClickHandler() {
        step10EntKeyEle.click(function () {
            $(this).off('click');
            $(this).removeClass('playing');
            $(this).find('img').attr('src', entInactiveImgSrc);
            playDefaultBeepSound();
            step10CountTxt.slideDown(500);
            let step10ExitImgSrc = [armingImgSrc, exitNow60ImgSrc, exitNow45ImgSrc, exitNow30ImgSrc, exitNow15ImgSrc, systemArmedImgSrc];
            for (let i = 0; i < step10ExitImgSrc.length; i++) {
                step10ClearTimeOut2 = setTimeout(() => {
                    let currentImg = step10ExitImgSrc[i];
                    step10DisplayStatus.attr('src', currentImg);
                    if (i === 5) {
                        step10UnarmedTxt.slideDown(500);
                        playLongBeepSound();
                    }
                    // else playDefaultBeepSound();
                }, i * 2000);
            }
        });
    }



});


