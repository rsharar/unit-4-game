//---------------------------VARIABLES------------------------------------//

// score as sum of crystals
var currentScore;

// randomly generated score between 19-120 user is aiming for
var targetScore;

// number of wins
var wins;

// nuumber of loses
var loses;

// crystal-one object with property of randomly assigned value
var crystalOneValue;

// crystal-two object with property of randomly assigned value
var crystalTwoValue;

// crystal-three object with property of randomly assigned value
var crystalThreeValue;

// crystal-four object with property of randomly assigned value
var crystalFourValue;


//---------------------------FUNCTIONS------------------------------------//
function init(){
    // set currentScore = 0
    currentScore = 0;
    console.log("current score: " + currentScore);

    // push currentScore to targetscore div in HTML
    $("#currentscore").text(currentScore);
    
    // set targetScore to random number betwen 19-120
    targetScore = 19 + (Math.floor(Math.random()*100));
    console.log("target score: " + targetScore);

    // push targetScore to targetscore div in HTML
    $("#targetscore").text(targetScore);

    // randomly assign number between 1-12 to crystalOne
    crystalOneValue = (Math.floor(Math.random()* 12) + 1);
    console.log("C1: " + crystalOneValue);

    // randomly assign number between 1-12 to crystalTwo
    crystalTwoValue = (Math.floor(Math.random()* 12) + 1);
    console.log("C2: " + crystalTwoValue);

    // randomly assign number between 1-12 to crystalThree
    crystalThreeValue = (Math.floor(Math.random()* 12) + 1);
    console.log("C3: " + crystalThreeValue);

    // randomly assign number between 1-12 to crystalFour
    crystalFourValue = (Math.floor(Math.random()* 12) + 1);
    console.log("C4: " + crystalFourValue);
}

function sum(){
    // when any of four crystals is clicked (give them same class)
    // add their value to the currentScore
    //push currentScore to HTML
    $(".crystal").on("click", function(){
        $("#totalscore").text(crystalOneValue);
});
}



//---------------------------EVENT LISTENERS------------------------------//

$(document).ready(function() {    
    init();
    sum();
})

//---------------------------PSEUDO CODE------------------------------------//

//func init(){
    // CONDITIONS
    // run when currentScore > target score
    // run on page load
    // run when currentScore = target score
        // increase wins by 1

    //DONE randomly assign numerical value between 1-12 to each crystal
    //DONE randomly generate a targetScore from 19-120
    //DONE set currentScore = 0
//}

//func sum(){
    //when user clicks on a crystal, add value of that crystal to currentScore
    //if value of currentScore = targetScore
        // run init()
    //if value of currentScore < targetScore
        // continue summing
    //if value of currentScore > targetScore
        // run init
//}