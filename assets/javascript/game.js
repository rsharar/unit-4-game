//---------------------------VARIABLES------------------------------------//

// score as sum of crystals
var currentScore;

// randomly generated score between 19-120 user is aiming for
var targetScore;

// number of wins
var wins = 0;

// nuumber of losses
var losses = 0;

// empty array to store values 1-12 to assign to crystals
var list=[];

// crystal-one object with property of randomly assigned value
var crystalOneValue;

// crystal-two object with property of randomly assigned value
var crystalTwoValue;

// crystal-three object with property of randomly assigned value
var crystalThreeValue;

// crystal-four object with property of randomly assigned value
var crystalFourValue;

// array of crystal values to check for duplicates
var crystalValues = [];

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

    for (var i = 1; i < 13; i++) {
        list.push(i);
    }
    // shuttle the list array to create first four random digits from 1-12
    function shuffle(list) {
        var ctr = list.length, temp, index;
    
    // While there are elements in the array
        while (ctr > 0) {
    // Pick a random index
            index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
            ctr--;
    // And swap the last element with it
            temp = list[ctr];
            list[ctr] = list[index];
            list[index] = temp;
        }
        return list;
    }
    console.log(shuffle(list));

    // assign a value to crystalOne
    crystalOneValue = list[0];
    console.log("C1: " + crystalOneValue);

    // assign a value to crystalTwo
    crystalTwoValue = list[1];
    console.log("C2: " + crystalTwoValue);
   
    // assign a value to crystalThree
    crystalThreeValue = list[2];
    console.log("C3: " + crystalThreeValue);
    
    // assign a value to crystalFour
    crystalFourValue = list[3];
    console.log("C4: " + crystalFourValue);
    
}

// Adds value of crystal to currentScore when crystal is clicked and compares currentScore to targetScore to determine win, loss or continuation of game
function sum(){

// check if currentScore is < targetScore
if (currentScore < targetScore){

    //when user clicks on crystal one execute function below
    $("#crystal-one").on("click", function(){

        //add crystalOneValue to currentScore
        currentScore = currentScore + crystalOneValue;

        //push currentScore value to HTML
        $("#currentscore").text(currentScore);
        console.log(currentScore);
            
            if (currentScore > targetScore){
                alert("Game over! Try again.");
                losses++;
                console.log(losses);
                $("#losses").text(losses);
                init();        
            }
            else if (currentScore === targetScore){
                alert("Congratulations, you win!");
                wins++;
                console.log(wins);
                $("#wins").text(wins);
                init();
            }
    });
    // See comments starting in line 92. Same function but with crystal Two
    $("#crystal-two").on("click", function(){
        currentScore = currentScore + crystalTwoValue;
        $("#currentscore").text(currentScore);   
        console.log(currentScore);
            if (currentScore > targetScore){
                alert("Game over! Try again.");
                losses++;
                console.log(losses);
                $("#losses").text(losses);
                init(); 
            }
            else if (currentScore === targetScore){
                alert("Congratulations, you win!");
                wins++;
                console.log(wins);
                $("#wins").text(wins);
                init();
            } 
    });

    // See comments starting in line 92. Same function but with crystal Three
    $("#crystal-three").on("click", function(){
        currentScore = currentScore + crystalThreeValue;
        $("#currentscore").text(currentScore); 
        console.log(currentScore);
            if (currentScore > targetScore){
                alert("Game over! Try again.");
                losses++;
                console.log(losses);
                $("#losses").text(losses);  
                init();
            }
            else if (currentScore === targetScore){
                alert("Congratulations, you win!");
                wins++;
                console.log(wins);
                $("#wins").text(wins);
                init();
            }
    });

    // See comments starting in line 92. Same function but with crystal Four
    $("#crystal-four").on("click", function(){
        currentScore = currentScore + crystalFourValue;
        $("#currentscore").text(currentScore);  
        console.log(currentScore);
            if (currentScore > targetScore){
                alert("Game over! Try again.");
                losses++;
                console.log(losses);
                $("#losses").text(losses);
                init(); 
            }
            else if (currentScore === targetScore){
                alert("Congratulations, you win!");
                wins++;
                console.log(wins);
                $("#wins").text(wins);
                init();
            }
    });
}
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