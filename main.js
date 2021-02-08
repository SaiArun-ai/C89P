score = 0;
function US(){
    score = score + 1;
    document.getElementById("score").innerHTML = "Score: " + score;   
}
function SS(){
    localStorage.setItem("score",score);
}
function NP(){
    window.location("activity2.html");
}