import"./index-D6MjUEZa.js";const o=320;function t(e){onKeyDown(s=>{switch(s){case"up":case"w":e.move(0,-o);break;case"left":case"a":e.move(-o,0);break;case"down":case"s":e.move(0,o);break;case"right":case"d":e.move(o,0);break}})}const r="Level 0: Hello, World!";function c(){loadSprite("player","sprites/bean.png");const e=add([sprite("player"),pos(80,40),area()]);t(e)}const n=`
add([
  text('WASD or arrow keys to move', { width: 600 })
])
`;function i(){}export{i as postscript,c as prescript,n as script,r as title};
