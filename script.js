const game = document.querySelector('#game-area')
var direction = '';
let posx = 0;
let posy = 0;
var currentPos = 0;
let id = null;
var score = 0;
const scoreBoard = document.querySelector('#score-board');
const points = document.createElement('div');
points.setAttribute('id','points');

for (var i=0; i<100; i++){
  const blocks = document.createElement('div');
  blocks.setAttribute('id', 'box'+(i+1));
  blocks.setAttribute('class', 'blocks');
  blocks.style.display = 'flex';
  blocks.style.justifyContent = 'center';
  blocks.style.alignItems = 'center';
  blocks.style.width = '50px';
  blocks.style.height = '50px';

  const food = document.createElement('div');
  food.style.width = '10px';
  food.style.height = '10px';
  food.style.backgroundColor = '#ffcc00';
  food.style.borderRadius = '10px';
    
  blocks.appendChild(food);
  game.appendChild(blocks);

  window.addEventListener('load', () => {
    if (document.querySelector('#box15').hasChildNodes(food)) {
      document.querySelector('#box15').removeChild(document.querySelector('#box15').firstChild)
    }
    if (document.querySelector('#box16').hasChildNodes(food)) {
      document.querySelector('#box16').removeChild(document.querySelector('#box16').firstChild)
    }
    if (document.querySelector('#box25').hasChildNodes(food)) {
      document.querySelector('#box25').removeChild(document.querySelector('#box25').firstChild)
    }
    if (document.querySelector('#box26').hasChildNodes(food)) {
      document.querySelector('#box26').removeChild(document.querySelector('#box26').firstChild)
    }
    if (document.querySelector('#box42').hasChildNodes(food)) {
      document.querySelector('#box42').removeChild(document.querySelector('#box42').firstChild)
    }
    if (document.querySelector('#box43').hasChildNodes(food)) {
      document.querySelector('#box43').removeChild(document.querySelector('#box43').firstChild)
    }
    if (document.querySelector('#box52').hasChildNodes(food)) {
      document.querySelector('#box52').removeChild(document.querySelector('#box52').firstChild)
    }
    if (document.querySelector('#box53').hasChildNodes(food)) {
      document.querySelector('#box53').removeChild(document.querySelector('#box53').firstChild)
    }
    if (document.querySelector('#box48').hasChildNodes(food)) {
      document.querySelector('#box48').removeChild(document.querySelector('#box48').firstChild)
    }
    if (document.querySelector('#box49').hasChildNodes(food)) {
      document.querySelector('#box49').removeChild(document.querySelector('#box49').firstChild)
    }
    if (document.querySelector('#box58').hasChildNodes(food)) {
      document.querySelector('#box58').removeChild(document.querySelector('#box58').firstChild)
    }
    if (document.querySelector('#box59').hasChildNodes(food)) {
      document.querySelector('#box59').removeChild(document.querySelector('#box59').firstChild)
    }
    if (document.querySelector('#box75').hasChildNodes(food)) {
      document.querySelector('#box75').removeChild(document.querySelector('#box75').firstChild)
    }
    if (document.querySelector('#box76').hasChildNodes(food)) {
      document.querySelector('#box76').removeChild(document.querySelector('#box76').firstChild)
    }
    if (document.querySelector('#box85').hasChildNodes(food)) {
      document.querySelector('#box85').removeChild(document.querySelector('#box85').firstChild)
    }
    if (document.querySelector('#box86').hasChildNodes(food)) {
      document.querySelector('#box86').removeChild(document.querySelector('#box86').firstChild)
    }
  })

  id = setInterval(test, 10);
  function test() {
    currentPos = '#box'+(10*Math.floor(posy/50) + Math.floor(posx/50 + 1));
    const testBox = document.querySelector(currentPos);
    if (testBox.hasChildNodes(food)) {
      testBox.removeChild(testBox.firstChild);
      score++;
      //console.log(score-1);
      points.innerText = score-1;
    }
    //testBox.style.backgroundColor = 'green';
    //testBox.removeChild(food);
    //console.log(blocks.id)
    //testBox.appendChild(food)
    //blocks.removeChild(food);
  }
  //const obs = document.querySelector('#box20');
  //obs.style.backgroundColor = 'blue';
}

scoreBoard.appendChild(points);


const pacman = document.querySelector('#pacman');
window.addEventListener('keydown', () => {
  if (event.key == 'ArrowRight') {
    pacman.style.transform = 'rotate(0deg)';
    direction = 'right';
  }
  if (event.key == 'ArrowDown') {
    pacman.style.transform = 'rotate(90deg)';
    direction = 'down';
  }
  if (event.key == 'ArrowLeft') {
    pacman.style.transform = 'rotate(180deg)';
    direction = 'left';
  }
  if (event.key == 'ArrowUp') {
    pacman.style.transform = 'rotate(270deg)';
    direction = 'up';
  }
});

function rightAnimation () {
  if (posy%50 == 0) {
    posx += 5;
    pacman.style.left = posx + 'px';
  }
  else{
    if (posy%50 >= 25) {
      posy += 5;
      pacman.style.top = posy + 'px';
    }
    else {
      posy -= 5;
      pacman.style.top = posy + 'px';
    }
  }
}

function leftAnimation () {
  if (posy%50 == 0) {
    posx -= 5;
    pacman.style.left = posx + 'px';
  }
  else{
    if (posy%50 >= 25) {
      posy += 5;
      pacman.style.top = posy + 'px';
    }
    else {
      posy -= 5;
      pacman.style.top = posy + 'px';
    }
  }
}

function downAnimation() {
  if (posx%50 == 0) {
    posy += 5;
    pacman.style.top = posy + 'px';
  }
  else{
    if (posx%50 >= 25) {
      posx += 5;
      pacman.style.left = posx + 'px';
    }
    else {
      posx -= 5;
      pacman.style.left = posx + 'px';
    }
  }
}

function upAnimation() {
  if (posx%50 == 0) {
    posy -= 5;
    pacman.style.top = posy + 'px';
  }
  else{
    if (posx%50 >= 25) {
      posx += 5;
      pacman.style.left = posx + 'px';
    }
    else {
      posx -= 5;
      pacman.style.left = posx + 'px';
    }
  }
}

function move() {
  if (direction == 'right' && posx < 450) {
    if (currentPos != '#box14' && currentPos != '#box24' && currentPos != '#box41' && currentPos != '#box51' && currentPos != '#box47' && currentPos != '#box57' && currentPos != '#box74' && currentPos != '#box84') {
      rightAnimation();
    }
  }
  if (direction == 'left' && posx > 0) {
    if (currentPos != '#box16' && currentPos != '#box26' && currentPos != '#box43' && currentPos != '#box53' && currentPos != '#box49' && currentPos != '#box59' && currentPos != '#box76' && currentPos != '#box86') {
      leftAnimation();
    }
    if (posx == 295 && posy == 100) {
      posx += 5;
      pacman.style.left = posx + 'px';
    }
    if (posx == 445 && posy == 250) {
      posx += 5;
      pacman.style.left = posx + 'px';
    }
    if (posx == 295 && posy == 400) {
      posx += 5;
      pacman.style.left = posx + 'px';
    }
    if (posx == 145 && posy == 250) {
      posx += 5;
      pacman.style.left = posx + 'px';
    } else {
      pacman.style.left = posx + 5 + 'px';
    }
  }
  if (direction == 'down' && posy < 450) {
    if (currentPos != '#box5' && currentPos != '#box6' && currentPos != '#box32' && currentPos != '#box33' && currentPos != '#box38' && currentPos != '#box39' && currentPos != '#box65' && currentPos != '#box66') {
      downAnimation();
    }
  }
  if (direction == 'up' && posy > 0) {
    if (currentPos != '#box25' && currentPos != '#box26' && currentPos != '#box52' && currentPos != '#box53' && currentPos != '#box58' && currentPos != '#box59' && currentPos != '#box85' && currentPos != '#box86') {
      upAnimation();
    }
    if (posx == 250 && posy == 145) {
      posy += 5;
      pacman.style.top = posy + 'px';
    }
    if (posx == 100 && posy == 295) {
      posy += 5;
      pacman.style.top = posy + 'px';
    }
    if (posx == 400 && posy == 295) {
      posy += 5;
      pacman.style.top = posy + 'px';
    }
    if (posx == 250 && posy == 445) {
      posy += 5;
      pacman.style.top = posy + 'px';
    } else {
      pacman.style.top = posy + 5 + 'px';
    }
  }
}

//let id = null;
const icon = pacman.querySelector("svg");
const iconFrame = icon.querySelector('path');
icon.addEventListener('click', () => {
  console.log('hey')
})
let frameStat = 0;
clearInterval(id);
id = setInterval(frame, 75);
function frame() {
  if (frameStat == 3) {
    iconFrame.removeAttribute('d');
    iconFrame.setAttribute('d','M 48.177 38.015 C 39.984 53.493 17.205 54.752 7.173 40.282 C -2.858 25.811 7.383 6.464 25.606 5.456 C 35.107 4.931 44.019 9.847 48.24 17.94 L 26.989 27.918 L 48.177 38.015 Z')
    frameStat++;
  }
  if (frameStat == 2) {
    iconFrame.removeAttribute('d');
    iconFrame.setAttribute('d','M 48.297 32.76 C 52.173 50.716 17.798 57.669 7.423 40.668 C -2.952 23.667 9.356 5.723 25.574 5.405 C 36.422 5.192 49.158 12.409 48.111 22.893 L 26.936 28.149 L 48.297 32.76 Z')
    frameStat++;
  }
  if (frameStat == 1) {
    iconFrame.removeAttribute('d');
    iconFrame.setAttribute('d','M 46.434 37.777 C 38.615 53.142 16.886 55.094 7.303 40.027 C -2.279 24.961 7.896 6.784 24.894 5.455 C 47.543 3.685 52.012 29.378 46.434 37.777 Z')
    frameStat++;
  }
  if (frameStat == 0) {
    iconFrame.removeAttribute('d');
    iconFrame.setAttribute('d','M 48.297 32.76 C 52.173 50.716 17.798 57.669 7.423 40.668 C -2.952 23.667 9.356 5.723 25.574 5.405 C 36.422 5.192 49.158 12.409 48.111 22.893 L 26.936 28.149 L 48.297 32.76 Z')
    frameStat++;
  }
  if (frameStat == 4) {
    frameStat = 0;
  }
}

id = setInterval(speed, 15);
function speed() {
  move();
}
const block = document.querySelector('.blocks')
  block.addEventListener('click', () => {
    console.log('hey')
})

var w = 0;
var x = 1;
var y = 2;
var z = 3;

const ghost1 = document.querySelector('#ghost1');
let ghost1posx = 200;
let ghost1posy = 200;
let ghost1pos = 0;
ghost1.style.top = ghost1posx + 'px';
ghost1.style.left = ghost1posy + 'px';

const ghost2 = document.querySelector('#ghost2');
let ghost2posx = 250;
let ghost2posy = 200;
let ghost2pos = 0;
ghost2.style.top = ghost2posx + 'px';
ghost2.style.left = ghost2posy + 'px';

const ghost3 = document.querySelector('#ghost3');
let ghost3posx = 200;
let ghost3posy = 250;
let ghost3pos = 0;
ghost3.style.top = ghost3posx + 'px';
ghost3.style.left = ghost3posy + 'px';

const ghost4 = document.querySelector('#ghost4');
let ghost4posx = 250;
let ghost4posy = 250;
let ghost4pos = 0;
ghost4.style.top = ghost4posx + 'px';
ghost4.style.left = ghost4posy + 'px';

id = setInterval(gDir, 255);
function gDir() {
  w = Math.floor(4*Math.random());
  x = Math.floor(4*Math.random());
  y = Math.floor(4*Math.random());
  z = Math.floor(4*Math.random());
}

id = setInterval(ghost1move, 15);
function ghost1move() {
  ghost1pos = '#box'+(10*Math.floor(ghost1posy/50) + Math.floor(ghost1posx/50 + 1));
  //console.log(ghost1pos)
  if (w == 0 && ghost1posx < 450) {
    if (ghost1pos != '#box14' && ghost1pos != '#box24' && ghost1pos != '#box41' && ghost1pos != '#box51' && ghost1pos != '#box47' && ghost1pos != '#box57' && ghost1pos != '#box74' && ghost1pos != '#box84') {
      if (ghost1posy%50 == 0) {
        ghost1posx += 5;
        ghost1.style.left = ghost1posx + 'px';
      }
      else{
        if (ghost1posy%50 >= 25) {
          ghost1posy += 5;
          ghost1.style.top = ghost1posy + 'px';
        }
        else {
          ghost1posy -= 5;
          ghost1.style.top = ghost1posy + 'px';
        }
      }
    }
  }
  if (w == 1 && ghost1posx > 0) {
    if (ghost1pos != '#box16' && ghost1pos != '#box26' && ghost1pos != '#box43' && ghost1pos != '#box53' && ghost1pos != '#box49' && ghost1pos != '#box59' && ghost1pos != '#box76' && ghost1pos != '#box86') {
      if (ghost1posy%50 == 0) {
        ghost1posx -= 5;
        ghost1.style.left = ghost1posx + 'px';
      }
      else{
        if (ghost1posy%50 >= 25) {
          ghost1posy += 5;
          ghost1.style.top = ghost1posy + 'px';
        }
        else {
          ghost1posy -= 5;
          ghost1.style.top = ghost1posy + 'px';
        }
      }
    }
    if (ghost1posx == 295 && ghost1posy == 100) {
      ghost1posx += 5;
      ghost1.style.left = ghost1posx + 'px';
    }
    if (ghost1posx == 445 && ghost1posy == 250) {
      ghost1posx += 5;
      ghost1.style.left = ghost1posx + 'px';
    }
    if (ghost1posx == 295 && ghost1posy == 400) {
      ghost1posx += 5;
      ghost1.style.left = ghost1posx + 'px';
    }
    if (ghost1posx == 145 && ghost1posy == 250) {
      ghost1posx += 5;
      ghost1.style.left = ghost1posx + 'px';
    } else {
      ghost1.style.left = ghost1posx + 5 + 'px';
    }
  }
  if (w == 2 && ghost1posy < 450) {
    if (ghost1posx%50 == 0) {
      if (ghost1pos != '#box5' && ghost1pos != '#box6' && ghost1pos != '#box32' && ghost1pos != '#box33' && ghost1pos != '#box38' && ghost1pos != '#box39' && ghost1pos != '#box65' && ghost1pos != '#box66') {
        ghost1posy += 5;
        ghost1.style.top = ghost1posy + 'px';
      }
    }
    else{
      if (ghost1posx%50 >= 25) {
        ghost1posx += 5;
        ghost1.style.left = ghost1posx + 'px';
      }
      else {
        ghost1posx -= 5;
        ghost1.style.left = ghost1posx + 'px';
      }
    }
  }
  if (w == 3 && ghost1posy > 0) {
    if (ghost1pos != '#box25' && ghost1pos != '#box26' && ghost1pos != '#box52' && ghost1pos != '#box53' && ghost1pos != '#box58' && ghost1pos != '#box59' && ghost1pos != '#box85' && ghost1pos != '#box86') {
      if (ghost1posx%50 == 0) {
        ghost1posy -= 5;
        ghost1.style.top = ghost1posy + 'px';
      }
      else{
        if (ghost1posx%50 >= 25) {
          ghost1posx += 5;
          ghost1.style.left = ghost1posx + 'px';
        }
        else {
          ghost1posx -= 5;
          ghost1.style.left = ghost1posx + 'px';
        }
      }
      if (ghost1posx == 250 && ghost1posy == 145) {
        ghost1posy += 5;
        ghost1.style.top = ghost1posy + 'px';
      }
      if (ghost1posx == 100 && ghost1posy == 295) {
        ghost1posy += 5;
        ghost1.style.top = ghost1posy + 'px';
      }
      if (ghost1posx == 400 && ghost1posy == 295) {
        ghost1posy += 5;
        ghost1.style.top = ghost1posy + 'px';
      }
      if (ghost1posx == 250 && ghost1posy == 445) {
        ghost1posy += 5;
        ghost1.style.top = ghost1posy + 'px';
      } else {
        ghost1.style.top = ghost1posy + 5 + 'px';
      }
    }
  }
}

id = setInterval(ghost2move, 15);
function ghost2move() {
  ghost2pos = '#box'+(10*Math.floor(ghost2posy/50) + Math.floor(ghost2posx/50 + 1));
  //console.log(ghost1pos)
  if (x == 0 && ghost2posx < 450) {
    if (ghost2pos != '#box14' && ghost2pos != '#box24' && ghost2pos != '#box41' && ghost2pos != '#box51' && ghost2pos != '#box47' && ghost2pos != '#box57' && ghost2pos != '#box74' && ghost2pos != '#box84') {
      if (ghost2posy%50 == 0) {
        ghost2posx += 5;
        ghost2.style.left = ghost2posx + 'px';
      }
      else{
        if (ghost2posy%50 >= 25) {
          ghost2posy += 5;
          ghost2.style.top = ghost2posy + 'px';
        }
        else {
          ghost2posy -= 5;
          ghost2.style.top = ghost2posy + 'px';
        }
      }
    }
  }
  if (x == 1 && ghost2posx > 0) {
    if (ghost2pos != '#box16' && ghost2pos != '#box26' && ghost2pos != '#box43' && ghost2pos != '#box53' && ghost2pos != '#box49' && ghost2pos != '#box59' && ghost2pos != '#box76' && ghost2pos != '#box86') {
      if (ghost2posy%50 == 0) {
        ghost2posx -= 5;
        ghost2.style.left = ghost2posx + 'px';
      }
      else{
        if (ghost2posy%50 >= 25) {
          ghost2posy += 5;
          ghost2.style.top = ghost2posy + 'px';
        }
        else {
          ghost2posy -= 5;
          ghost2.style.top = ghost2posy + 'px';
        }
      }
    }
    if (ghost2posx == 295 && ghost2posy == 100) {
      ghost2posx += 5;
      ghost2.style.left = ghost2posx + 'px';
    }
    if (ghost2posx == 445 && ghost2posy == 250) {
      ghost2posx += 5;
      ghost2.style.left = ghost2posx + 'px';
    }
    if (ghost2posx == 295 && ghost2posy == 400) {
      ghost2posx += 5;
      ghost2.style.left = ghost2posx + 'px';
    }
    if (ghost2posx == 145 && ghost2posy == 250) {
      ghost2posx += 5;
      ghost2.style.left = ghost2posx + 'px';
    } else {
      ghost2.style.left = ghost2posx + 5 + 'px';
    }
  }
  if (x == 2 && ghost2posy < 450) {
    if (ghost2posx%50 == 0) {
      if (ghost2pos != '#box5' && ghost2pos != '#box6' && ghost2pos != '#box32' && ghost2pos != '#box33' && ghost2pos != '#box38' && ghost2pos != '#box39' && ghost2pos != '#box65' && ghost2pos != '#box66') {
        ghost2posy += 5;
        ghost2.style.top = ghost2posy + 'px';
      }
    }
    else{
      if (ghost2posx%50 >= 25) {
        ghost2posx += 5;
        ghost2.style.left = ghost2posx + 'px';
      }
      else {
        ghost2posx -= 5;
        ghost2.style.left = ghost2posx + 'px';
      }
    }
  }
  if (x == 3 && ghost2posy > 0) {
    if (ghost2pos != '#box25' && ghost2pos != '#box26' && ghost2pos != '#box52' && ghost2pos != '#box53' && ghost2pos != '#box58' && ghost2pos != '#box59' && ghost2pos != '#box85' && ghost2pos != '#box86') {
      if (ghost2posx%50 == 0) {
        ghost2posy -= 5;
        ghost2.style.top = ghost2posy + 'px';
      }
      else{
        if (ghost2posx%50 >= 25) {
          ghost2posx += 5;
          ghost2.style.left = ghost2posx + 'px';
        }
        else {
          ghost2posx -= 5;
          ghost2.style.left = ghost2posx + 'px';
        }
      }
      if (ghost2posx == 250 && ghost2posy == 145) {
        ghost2posy += 5;
        ghost2.style.top = ghost2posy + 'px';
      }
      if (ghost2posx == 100 && ghost2posy == 295) {
        ghost2posy += 5;
        ghost2.style.top = ghost2posy + 'px';
      }
      if (ghost2posx == 400 && ghost2posy == 295) {
        ghost2posy += 5;
        ghost2.style.top = ghost2posy + 'px';
      }
      if (ghost2posx == 250 && ghost2posy == 445) {
        ghost2posy += 5;
        ghost2.style.top = ghost2posy + 'px';
      } else {
        ghost2.style.top = ghost2posy + 5 + 'px';
      }
    }
  }
}

id = setInterval(ghost3move, 15);
function ghost3move() {
  ghost3pos = '#box'+(10*Math.floor(ghost3posy/50) + Math.floor(ghost3posx/50 + 1));
  //console.log(ghost1pos)
  if (y == 0 && ghost3posx < 450) {
    if (ghost3pos != '#box14' && ghost3pos != '#box24' && ghost3pos != '#box41' && ghost3pos != '#box51' && ghost3pos != '#box47' && ghost3pos != '#box57' && ghost3pos != '#box74' && ghost3pos != '#box84') {
      if (ghost3posy%50 == 0) {
        ghost3posx += 5;
        ghost3.style.left = ghost3posx + 'px';
      }
      else{
        if (ghost3posy%50 >= 25) {
          ghost3posy += 5;
          ghost3.style.top = ghost3posy + 'px';
        }
        else {
          ghost3posy -= 5;
          ghost3.style.top = ghost3posy + 'px';
        }
      }
    }
  }
  if (y == 1 && ghost3posx > 0) {
    if (ghost3pos != '#box16' && ghost3pos != '#box26' && ghost3pos != '#box43' && ghost3pos != '#box53' && ghost3pos != '#box49' && ghost3pos != '#box59' && ghost3pos != '#box76' && ghost3pos != '#box86') {
      if (ghost3posy%50 == 0) {
        ghost3posx -= 5;
        ghost3.style.left = ghost3posx + 'px';
      }
      else{
        if (ghost3posy%50 >= 25) {
          ghost3posy += 5;
          ghost3.style.top = ghost3posy + 'px';
        }
        else {
          ghost3posy -= 5;
          ghost3.style.top = ghost3posy + 'px';
        }
      }
    }
    if (ghost3posx == 295 && ghost3posy == 100) {
      ghost3posx += 5;
      ghost3.style.left = ghost3posx + 'px';
    }
    if (ghost3posx == 445 && ghost3posy == 250) {
      ghost3posx += 5;
      ghost3.style.left = ghost3posx + 'px';
    }
    if (ghost3posx == 295 && ghost3posy == 400) {
      ghost3posx += 5;
      ghost3.style.left = ghost3posx + 'px';
    }
    if (ghost3posx == 145 && ghost3posy == 250) {
      ghost3posx += 5;
      ghost3.style.left = ghost3posx + 'px';
    } else {
      ghost3.style.left = ghost3posx + 5 + 'px';
    }
  }
  if (y == 2 && ghost3posy < 450) {
    if (ghost3posx%50 == 0) {
      if (ghost3pos != '#box5' && ghost3pos != '#box6' && ghost3pos != '#box32' && ghost3pos != '#box33' && ghost3pos != '#box38' && ghost3pos != '#box39' && ghost3pos != '#box65' && ghost3pos != '#box66') {
        ghost3posy += 5;
        ghost3.style.top = ghost3posy + 'px';
      }
    }
    else{
      if (ghost3posx%50 >= 25) {
        ghost3posx += 5;
        ghost3.style.left = ghost3posx + 'px';
      }
      else {
        ghost3posx -= 5;
        ghost3.style.left = ghost3posx + 'px';
      }
    }
  }
  if (y == 3 && ghost3posy > 0) {
    if (ghost3pos != '#box25' && ghost3pos != '#box26' && ghost3pos != '#box52' && ghost3pos != '#box53' && ghost3pos != '#box58' && ghost3pos != '#box59' && ghost3pos != '#box85' && ghost3pos != '#box86') {
      if (ghost3posx%50 == 0) {
        ghost3posy -= 5;
        ghost3.style.top = ghost3posy + 'px';
      }
      else{
        if (ghost3posx%50 >= 25) {
          ghost3posx += 5;
          ghost3.style.left = ghost3posx + 'px';
        }
        else {
          ghost3posx -= 5;
          ghost3.style.left = ghost3posx + 'px';
        }
      }
      if (ghost3posx == 250 && ghost3posy == 145) {
        ghost3posy += 5;
        ghost3.style.top = ghost3posy + 'px';
      }
      if (ghost3posx == 100 && ghost3posy == 295) {
        ghost3posy += 5;
        ghost3.style.top = ghost3posy + 'px';
      }
      if (ghost3posx == 400 && ghost3posy == 295) {
        ghost3posy += 5;
        ghost3.style.top = ghost3posy + 'px';
      }
      if (ghost3posx == 250 && ghost3posy == 445) {
        ghost3posy += 5;
        ghost3.style.top = ghost3posy + 'px';
      } else {
        ghost3.style.top = ghost3posy + 5 + 'px';
      }
    }
  }
}

id = setInterval(ghost4move, 15);
function ghost4move() {
  ghost4pos = '#box'+(10*Math.floor(ghost4posy/50) + Math.floor(ghost4posx/50 + 1));
  //console.log(ghost1pos)
  if (z == 0 && ghost4posx < 450) {
    if (ghost4pos != '#box14' && ghost4pos != '#box24' && ghost4pos != '#box41' && ghost4pos != '#box51' && ghost4pos != '#box47' && ghost4pos != '#box57' && ghost4pos != '#box74' && ghost4pos != '#box84') {
      if (ghost4posy%50 == 0) {
        ghost4posx += 5;
        ghost4.style.left = ghost4posx + 'px';
      }
      else{
        if (ghost4posy%50 >= 25) {
          ghost4posy += 5;
          ghost4.style.top = ghost4posy + 'px';
        }
        else {
          ghost4posy -= 5;
          ghost4.style.top = ghost4posy + 'px';
        }
      }
    }
  }
  if (z == 1 && ghost4posx > 0) {
    if (ghost4pos != '#box16' && ghost4pos != '#box26' && ghost4pos != '#box43' && ghost4pos != '#box53' && ghost4pos != '#box49' && ghost4pos != '#box59' && ghost4pos != '#box76' && ghost4pos != '#box86') {
      if (ghost4posy%50 == 0) {
        ghost4posx -= 5;
        ghost4.style.left = ghost4posx + 'px';
      }
      else{
        if (ghost4posy%50 >= 25) {
          ghost4posy += 5;
          ghost4.style.top = ghost4posy + 'px';
        }
        else {
          ghost4posy -= 5;
          ghost4.style.top = ghost4posy + 'px';
        }
      }
    }
    if (ghost4posx == 295 && ghost4posy == 100) {
      ghost4posx += 5;
      ghost4.style.left = ghost4posx + 'px';
    }
    if (ghost4posx == 445 && ghost4posy == 250) {
      ghost4posx += 5;
      ghost4.style.left = ghost4posx + 'px';
    }
    if (ghost4posx == 295 && ghost4posy == 400) {
      ghost4posx += 5;
      ghost4.style.left = ghost4posx + 'px';
    }
    if (ghost4posx == 145 && ghost4posy == 250) {
      ghost4posx += 5;
      ghost4.style.left = ghost4posx + 'px';
    } else {
      ghost4.style.left = ghost4posx + 5 + 'px';
    }
  }
  if (z == 2 && ghost4posy < 450) {
    if (ghost4posx%50 == 0) {
      if (ghost4pos != '#box5' && ghost4pos != '#box6' && ghost4pos != '#box32' && ghost4pos != '#box33' && ghost4pos != '#box38' && ghost4pos != '#box39' && ghost4pos != '#box65' && ghost4pos != '#box66') {
        ghost4posy += 5;
        ghost4.style.top = ghost4posy + 'px';
      }
    }
    else{
      if (ghost4posx%50 >= 25) {
        ghost4posx += 5;
        ghost4.style.left = ghost4posx + 'px';
      }
      else {
        ghost4posx -= 5;
        ghost4.style.left = ghost4posx + 'px';
      }
    }
  }
  if (z == 3 && ghost4posy > 0) {
    if (ghost4pos != '#box25' && ghost4pos != '#box26' && ghost4pos != '#box52' && ghost4pos != '#box53' && ghost4pos != '#box58' && ghost4pos != '#box59' && ghost4pos != '#box85' && ghost4pos != '#box86') {
      if (ghost4posx%50 == 0) {
        ghost4posy -= 5;
        ghost4.style.top = ghost4posy + 'px';
      }
      else{
        if (ghost4posx%50 >= 25) {
          ghost4posx += 5;
          ghost4.style.left = ghost4posx + 'px';
        }
        else {
          ghost4posx -= 5;
          ghost4.style.left = ghost4posx + 'px';
        }
      }
      if (ghost4posx == 250 && ghost4posy == 145) {
        ghost4posy += 5;
        ghost4.style.top = ghost4posy + 'px';
      }
      if (ghost4posx == 100 && ghost4posy == 295) {
        ghost4posy += 5;
        ghost4.style.top = ghost4posy + 'px';
      }
      if (ghost4posx == 400 && ghost4posy == 295) {
        ghost4posy += 5;
        ghost4.style.top = ghost4posy + 'px';
      }
      if (ghost4posx == 250 && ghost4posy == 445) {
        ghost4posy += 5;
        ghost4.style.top = ghost4posy + 'px';
      } else {
        ghost4.style.top = ghost4posy + 5 + 'px';
      }
    }
  }
}

var myElement = document.getElementById('points');
myElement.addEventListener('DOMSubtreeModified', contentChanged, false);

function contentChanged() {
  if (points.innerText == 83) {
    setTimeout(function() {
      window.alert('Good Job! Click OK to reload the game');
      window.location.reload();
    }, 75);
  }
}

id = setInterval(gameOver, 10);
function gameOver() {
  if (currentPos == ghost1pos || currentPos == ghost2pos || currentPos == ghost3pos || currentPos == ghost4pos) {
    window.location.reload();
    window.alert('Game Over');
  }
}