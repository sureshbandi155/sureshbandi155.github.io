// var submit = $('.submit').click( ()=> {
//     console.log(submit.text());
//     submit.css({'background-color': 'blue', text: 'black', padding: '14px 25px'});
//
// });
// var register = $('.register').click( ()=> {
//     console.log(register.text());
//     register.css({'background-color': 'lightsalmon', text: 'black', padding: '14px 25px'});
//
// });

var submit = $('.submit').click( ()=> {
    console.log(submit.text());
    // submit.css({'background-color': 'blue', text: 'black', padding: '14px 25px'});
    submit.addClass('extra').siblings().removeClass('extra');

});
var register = $('.register').click( ()=> {
    console.log(register.text());
    // register.css({'background-color': 'lightsalmon', text: 'black', padding: '14px 25px'});
    register.addClass('extra').siblings().removeClass('extra')  ;


});
var button = $('.button').dblclick(() => {
    console.log('clicked');
    button.text('LoginHere');

});
var user = $('.username');
var submitButton = $('.submit-button');
var display = $('.d-user');
var displayPass = $('.display-pass');
var password = $('.password');
submitButton.click( (e) => {
    e.preventDefault();
    console.log(user.val());
    display.text(user.val());
    displayPass.text(password.val());

});



var autoUser = $('.auto-username');
var autoDisplay = $('.auto-user');
var autoDisplayPass = $('.auto-pass');
var autoPassword = $('.auto-password');
autoUser.keyup(() => {
    autoDisplay.text(autoUser.val());
    console.log(autoUser.val());
});
autoPassword.keyup(() => {
    autoDisplayPass.text(autoPassword.val());
    console.log(autoPassword.val());
});


var hideCount = 0;
var hide = $('.hide');
var hideText = $('.hide-text');
hide.click(() => {
    if (hideCount %2 === 0) {
        hideText.hide(1000);
        hide.text('SHOW');
        hide.css({backgroundColor: 'black', color: 'white'});
        hideCount++;
    }
    else {
        hideText.show(1000);
        hide.text('HIDE');
        hide.css({backgroundColor: 'green', color: 'white'});
        hideCount++;
    }
});

var slideCount = 0;
var slide = $('.slide');
var slideText = $('.slide-text');
slide.click(() => {
    if (slideCount %2 === 0) {
        slideText.slideUp(1000);
        slide.text('SlideUP');
        slide.css({backgroundColor: 'black', color: 'white'});
        slideCount++;
    }
    else {
        slideText.slideDown(1000);
        slide.text('slideDown');
        slide.css({backgroundColor: 'lightsalmon', color: 'white'});
        slideCount++;
    }
});

// SlideUp & SlideDown Effects
// var slideCount = 0;
// $('#buttonFour').click(function() {
//     if(slideCount % 2 === 0){
//         $('#cardFour').slideUp(1000);
//         $(this).text('SLIDEDOWN');
//         slideCount++;
//     }
//     else{
//         $('#cardFour').slideDown(1000);
//         $(this).text('SLIDEUP');
//         slideCount++;
//     }
// });



