var isTrue = false;
var name;
var theWheel = new Winwheel({
    'numSegments'  : 8,     // Specify number of segments.
    'outerRadius'  : 212,   // Set outer radius so wheel fits inside the background.
    'textFontSize' : 28,    // Set font size as desired.
    'segments'     :
        [
            {'fillStyle' : '#eae56f', 'text' : '$1'},
            {'fillStyle' : '#89f26e', 'text' : '$2'},
            {'fillStyle' : '#7de6ef', 'text' : '$3'},
            {'fillStyle' : '#e7706f', 'text' : '$4'},
            {'fillStyle' : '#eae56f', 'text' : '$5'},
            {'fillStyle' : '#89f26e', 'text' : '$6'},
            {'fillStyle' : '#7de6ef', 'text' : '$7'},
            {'fillStyle' : '#e7706f', 'text' : '$8'}
        ],
    'animation' :           // Specify the animation to use.
        {
            'type'     : 'spinToStop',
            'duration' : 15,
            'spins'    : 8,
            'callbackFinished' : alertPrize,
            'callbackSound'    : playSound,   // Function to call when the tick sound is to be triggered.
            'soundTrigger'     : 'pin'        // Specify pins are to trigger the sound, the other option is 'segment'.
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
    // Do basic alert of the segment text.
    // You would probably want to do something more interesting with this information.
    alert("Hay " + name + " You won " + indicatedSegment.text);
}
var wheelPower    = 0;
var wheelSpinning = false;

// -------------------------------------------------------
// Function to handle the onClick on the power buttons.
// -------------------------------------------------------
// function powerSelected(powerLevel)
// {
//     // Ensure that power can't be changed while wheel is spinning.
//     if (wheelSpinning == false)
//     {
//         // Reset all to grey incase this is not the first time the user has selected the power.
//         document.getElementById('pw1').className = "";
//         document.getElementById('pw2').className = "";
//         document.getElementById('pw3').className = "";
//
//         // Now light up all cells below-and-including the one selected by changing the class.
//         if (powerLevel >= 1)
//         {
//             document.getElementById('pw1').className = "pw1";
//         }
//
//         if (powerLevel >= 2)
//         {
//             document.getElementById('pw2').className = "pw2";
//         }
//
//         if (powerLevel >= 3)
//         {
//             document.getElementById('pw3').className = "pw3";
//         }
//
//         // Set wheelPower var used when spin button is clicked.
//         wheelPower = powerLevel;
//
//         // Light up the spin button by changing it's source image and adding a clickable class to it.
//         document.getElementById('spin_button').src = "spin_on.png";
//         document.getElementById('spin_button').className = "clickable";
//     }
// }

// -------------------------------------------------------
// Click handler for spin button.
// -------------------------------------------------------
function startSpin()
{
    name = prompt('Enter User Name', 'User');
    // Ensure that spinning can't be clicked again while already running.
    if (wheelSpinning == false)
    {
        // Based on the power level selected adjust the number of spins for the wheel, the more times is has
        // to rotate with the duration of the animation the quicker the wheel spins.
        // if (wheelPower == 1)
        // {
        //     theWheel.animation.spins = 3;
        // }
        // else if (wheelPower == 2)
        // {
        //     theWheel.animation.spins = 8;
        // }
        // else if (wheelPower == 3)
        // {
        //     theWheel.animation.spins = 15;
        // }

        // Disable the spin button so can't click again while wheel is spinning.
        // document.getElementById('spin_button').setAttribute('disabled');
         isTrue = true;
        // document.getElementById('spin_button').className = "";

        // Begin the spin animation by calling startAnimation on the wheel object.
        theWheel.startAnimation();

        // Set to true so that power can't be changed and spin button re-enabled during
        // the current animation. The user will have to reset before spinning again.
        wheelSpinning = true;
    }
}

// -------------------------------------------------------
// Function for reset button.
// -------------------------------------------------------
function resetWheel()
{
    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    theWheel.draw();                // Call draw to render changes to the wheel.
    wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
}
