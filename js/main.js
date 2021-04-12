const click = document.getElementById("click").onclick = golfScore;

function golfScore (par,strokes){
    par = Math.floor(Math.random()*10);
    document.getElementById("par").innerHTML = par;
    strokes = Math.floor(Math.random()*10);
    document.getElementById("strokes").innerHTML = strokes;

    return (strokes ==1)? 
        document.getElementById("return").innerText = "Hole-in-one!":
    (strokes<= par -2)? 
        document.getElementById ("return").innerText = "Eagle":
    (strokes == par -1)? 
        document.getElementById ("return").innerText = "Birdie":
    (strokes == 0 || par == 0)? 
        document.getElementById ("return").innerText = "None":
    (strokes == par)? 
        document.getElementById ("return").innerText = "Par":
    (strokes == par +1)? 
        document.getElementById ("return").innerText = "Bogey":
    (strokes == par +2)?
        document.getElementById ("return").innerText = "Double Bogey":
    document.getElementById ("return").innerText = "Go-Home";
}