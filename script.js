'use strict';

let num = Math.floor(Math.random() * 20 + 1);
console.log(num);
let game_score = 20;
let highscore = 0;
function input_number() {
  let input_num = document.getElementById('guess').value;
  //alert(input_num.value);
  console.log(input_num);
  document.getElementById('guess').value = '';
  console.log(game_score);
  if (game_score > 0) {
    if (num == input_num) {
      document.querySelector('.message').innerHTML = 'Game Finished';
      document.getElementById('body').style.backgroundColor = 'green';
      document.querySelector('.number').innerHTML = num;
      if (highscore < game_score) {
        highscore = game_score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (num > input_num) {
      document.querySelector('.score').innerHTML = game_score - 1;
      document.querySelector('.message').innerHTML = 'Too Low';
      game_score = game_score - 1;
    } else if (num < input_num) {
      document.querySelector('.score').innerHTML = game_score - 1;
      document.querySelector('.message').innerHTML = 'Too High';
      game_score = game_score - 1;
    }
  } else {
    document.querySelector('.message').innerHTML = 'Game Finished';
    document.getElementById('body').style.backgroundColor = 'red';
    document.querySelector('.number').innerHTML = num;
  }
}

function refresh() {
  document.querySelector('.message').innerHTML = 'Start guessing...';
  game_score = 20;
  let num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = game_score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
}
