/*
        Author: Thi Nguyen
        ID: 301221756
*/

// Declare variables
var bug = document.getElementById('bug');
var playArea = document.getElementById('play-area');
var scoreSection = document.getElementById('scoreSection');
var resetScore = document.getElementById('resetScore');
var score = parseInt(scoreSection.innerText.slice(-1)); 
var resetSpeed = document.getElementById('resetSpeed');
var time = 1800; 
var interval = setInterval(setPosition, time); 

// Set first position for the bug
window.addEventListener("load", setupPage);
function setupPage(){
    setPosition(); 
}

// Set up first postion (randomly)
function setPosition(){
    var top = Math.floor(Math.random()*(playArea.clientHeight - bug.clientHeight));
    var left = Math.floor(Math.random()*(playArea.clientWidth - bug.clientHeight));
    bug.style.marginTop = top + "px";
    bug.style.marginLeft = left + "px"; 
    bug.style.visibility = "visible";
}

// When bug is clicked it dissappear and score incremented, interval is cleared and set a new interval with the time 100ms shorter
bug.addEventListener('click', addScore);
function addScore(){
    clearInterval(interval); 
    time-=100;
    interval = setInterval(setPosition, time);
    score++;                                                
    scoreSection.innerText = "SCORE: " + score.toString(); 
    bug.style.visibility = "hidden"; 
}

// Reset score to 0 and reset speed to 1800ms
resetScore.addEventListener('click', resetScoreToZero);
function resetScoreToZero(){
     score = 0;
     scoreSection.innerText = "SCORE: " + score.toString();
     resetSpeedToOriginal();
}

resetSpeed.addEventListener('click', resetSpeedToOriginal);
function resetSpeedToOriginal(){
    clearInterval(interval);
    time = 1800;
    interval = setInterval(setPosition, time);
}
