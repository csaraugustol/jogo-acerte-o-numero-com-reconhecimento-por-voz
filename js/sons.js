"use strict"

const gameOver = document.getElementById("gameOver");
const vitoria = document.getElementById("vitoria");

console.log(gameOver, vitoria, "dfsdf");

const audioGanhou = document.getElementById("som_ganhou")
const audioGameOver = document.getElementById("som_game-over")

function gameOver() {

    audioGameOver.play();
}

function vitoria() {

    audioGanhou.play();
}
