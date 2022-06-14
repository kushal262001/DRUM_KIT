 // this is used as identity of an object

/*document.querySelector("button").addEventListener("click", clicked);*/

// NOTE --> clicked is passed as an argument so parenthesis not needed. If we add parenthesis then directly it will get called.


/*function clicked(){
    alert("I am clicked");
}*/

// We can add anonymous function also without any name after click


// document.querySelector(".set").addEventListener("click",function (){ alert("I am clicked");});   --> for all butttons

var numberOfDrums=document.querySelectorAll(".drum").length;
for( var i=0 ; i<numberOfDrums; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", clicked);
}



function clicked() {
   var buttonInner= this.innerHTML;
    makeSound(buttonInner);
    addAnimation(buttonInner);
   
}

document.addEventListener("keydown", function(Event){
    var pressed = Event.key;
    makeSound(pressed);
    addAnimation(pressed);
    
});


function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default:
            console.log(key);
    }


}

function addAnimation(currentKey)
{
    var pressedKey=document.querySelector("."+currentKey);
    pressedKey.classList.add("pressed");

    setTimeout(function (){
        pressedKey.classList.remove("pressed");
    }, 100);
}



/*
var string="dshdasxsadajc";
for(var i=0; i<string.length;i++)
    {
    var char = string[i];
    
    switch (char) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default:
            console.log(char);
    }

   

    
}
*/


/*

 because Google updated its Autoplay Policy, it is necessary for the user to make some
interaction first with the window in which the sound will be played.

if you just click also and then ctrl+s then sound will be played
*/