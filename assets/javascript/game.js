var wins = 0;
var losses = 0;
var score = 0;

var scoreGoal = 19 + Math.floor(Math.random() * 120 )

var blueJewel = 1 + Math.floor(Math.random() * 12);
var redJewel = 1 + Math.floor(Math.random() * 12);
var greenJewel = 1 + Math.floor(Math.random() * 12);
var yellowJewel = 1 + Math.floor(Math.random() * 12);
    
var winsLosses = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>";
        
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

    
$("#scoreGoal").html(scoreGoal);

$("#winsLosses").html(winsLosses);

$(".totalScore").html(score);

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
   