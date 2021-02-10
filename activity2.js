score;
num = 1;
function GS(){
    score = localStorage.getItem("score");
    document.getElementById("score").innerHTML = "Score: " + score;
}
function B(){
    localStorage.setItem("score",score);
    window.location = "index.html";
}