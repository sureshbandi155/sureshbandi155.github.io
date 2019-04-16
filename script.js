var chartListArea = document.querySelector('#chat-list-area');
// console.log(chartListArea);
var messageArea = document.querySelector('#message-area');
// console.log(messageArea);

if (window.innerWidth <= 575) {
    // window.onresize = function(){ location.reload(); }
    
    messageArea.style.display = 'none';
}
else{
    chartListArea.style.display = 'block';
    messageArea.style.display = 'block';

}
// if ($(window).width() <= 575) {
//     $('#message-area').removeClass('d-none');
// } else {
//     $('#chat-list-area').addClass('d-flex');
//     $('#message-area').addClass('d-flex');

// }