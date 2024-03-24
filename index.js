
    var player1=Math.floor(Math.random()*6)+1;
    var player2=Math.floor(Math.random()*6)+1;
    if(player1>player2){
        document.querySelector("h2").innerHTML="player 1 wins";
    }
    else{
        document.querySelector("h2").innerHTML="player 2 wins";
    }
    
        document.querySelector(".img1").setAttribute("src","images/dice"+ player1+".png");
        document.querySelector(".img2").setAttribute("src","images/dice" + player2+".png");

