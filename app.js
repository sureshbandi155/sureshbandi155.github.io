var isTrue = false;
var name;
var theWheel = new Winwheel({
    'numSegments'  : 8,     // Specify number of segments.
    'outerRadius'  : 212,   // Set outer radius so wheel fits inside the background.
    'textFontSize' : 20,    // Set font size as desired.
    'segments'     :
        [
            {'fillStyle' : '#eae56f', 'text' : '$1'},
            {'fillStyle' : '#89f26e', 'text' : '$2'},
            {'fillStyle' : '#7de6ef', 'text' : '$3'},
            {'fillStyle' : '#e7706f', 'text' : '$4'},
            {'fillStyle' : '#eae56f', 'text' : '$5'},
            {'fillStyle' : '#89f26e', 'text' : '$6'},
            {'fillStyle' : '#7de6ef', 'text' : '$7'},
            {'fillStyle' : '#e7706f', 'text' : 'LOOSE TURN'}
        ],
    'animation' :           // Specify the animation to use.
        {
            'type'     : 'spinToStop',
            'duration' : 15,
            'spins'    : 8,
            'callbackFinished' : alertPrize,
            'callbackSound'    : playSound,
            'soundTrigger'     : 'pin'
        },
    'pins' :
        {
            'number' : 16   // Number of pins. They space evenly around the wheel.
        }
});

// -----------------------------------------------------------------
// This function is called when the segment under the prize pointer changes
// we can play a small tick sound here like you would expect on real prizewheels.
// -----------------------------------------------------------------
var audio = new Audio('tick.mp3');  // Create audio object and load tick.mp3 file.

function playSound()
{
    // Stop and rewind the sound if it already happens to be playing.
    audio.pause();
    audio.currentTime = 0;

    // Play the sound.
    audio.play();
}
function alertPrize(indicatedSegment)
{

    alert("Hay " + name + " You won " + indicatedSegment.text);
}
var wheelPower    = 0;
var wheelSpinning = false;

// -------------------------------------------------------
// Click handler for spin button.
// -------------------------------------------------------
function startSpin()
{
    name = prompt('Enter User Name', 'User');
    // Ensure that spinning can't be clicked again while already running.
    if (wheelSpinning == false)
    {

         isTrue = true;
        // document.getElementById('spin_button').className = "";

        // Begin the spin animation by calling startAnimation on the wheel object.
        theWheel.startAnimation();
        wheelSpinning = true;
    }
}

// -------------------------------------------------------
// Function for reset button.
// -------------------------------------------------------
function resetWheel()
{
    theWheel.stopAnimation(false);
    theWheel.rotationAngle = 0;
    theWheel.draw();                // Call draw to render changes to the wheel.
    wheelSpinning = false;
}
