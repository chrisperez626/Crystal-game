// variables set prior
var wins = 0;
var losses = 0;
var score = 0;

// produces random number to try and get to
var scoreGoal = 18 + Math.floor(Math.random() * 120 )

// produces random value for each jewel
var blueJewel = 1 + Math.floor(Math.random() * 12);
var redJewel = 1 + Math.floor(Math.random() * 12);
var greenJewel = 1 + Math.floor(Math.random() * 12);
var yellowJewel = 1 + Math.floor(Math.random() * 12);

var winsLosses = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>";

// function to reset game
var reset = function() {
    score = 0;
    scoreGoal = 18 + Math.floor(Math.random() * 120);
    blueJewel = 1 + Math.floor(Math.random() * 12);
    redJewel = 1 + Math.floor(Math.random() * 12);
    greenJewel = 1 + Math.floor(Math.random() * 12);
    yellowJewel = 1 + Math.floor(Math.random() * 12);
    $("#scoreGoal").html(scoreGoal);
    $(".totalScore").html(score);
    $("#wins").html(wins);
    $("#losses").html(losses);
}
    
    
// function to see if the user won
var winCheck = function() {
    if (score == scoreGoal) {
        wins++;
        alert("Hooray! You won!");
        $("#wins").html(wins);
        reset();
        
    } else if (score > scoreGoal) {
        losses++;
        alert("Boo, you did not win! Try Again!");
        $("#losses").html(losses);
        reset();
    }
};

// embeds variables into DOM
$("#scoreGoal").html(scoreGoal);

$("#winsLosses").html(winsLosses);

$(".totalScore").html(score);

// click functions for each jewel
$("#blue-jewel").on("click", function(){
    score = score + blueJewel;
    $(".totalScore").html(score);
    winCheck();
})

$("#red-jewel").on("click", function(){
    score = score + redJewel;
    $(".totalScore").html(score);
    winCheck();

})

$("#green-jewel").on("click", function(){
    score = score + greenJewel;
    $(".totalScore").html(score);
    winCheck();

})
$("#yellow-jewel").on("click", function(){
    score = score + yellowJewel;
    $(".totalScore").html(score);
    winCheck();

})
   