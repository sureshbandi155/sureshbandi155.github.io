var chartListArea = document.querySelector('#chat-list-area');
console.log(chartListArea);
var messageArea = document.querySelector('#message-area');
console.log(messageArea);

// if(window.innerWidth <= 575) {
//     messageArea.removeClass('d-flex').addClass('d-none');
// }

// if (window.innerWidth <= 575) {
//     mClassList(DOM.chatListArea).remove("d-flex").add("d-none");
//     mClassList(DOM.messageArea).remove("d-none").add("d-flex");
//     areaSwapped = true;
// } 
if (window.innerWidth <= 575) {
    messageArea.style.display = 'none';
}
else{
    chartListArea.style.display = 'block';
    messageArea.style.display = 'block';

}