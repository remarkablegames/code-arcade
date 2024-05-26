import"./index-CKRkUUhD.js";const o=320;function a(e){onKeyDown(t=>{switch(t){case"up":case"w":e.move(0,-o);break;case"left":case"a":e.move(-o,0);break;case"down":case"s":e.move(0,o);break;case"right":case"d":e.move(o,0);break}})}const s="Level 0: Hello, World!";function c(){loadSprite("player","sprites/bean.png");const e=add([sprite("player"),pos(80,40),area()]);a(e)}const n=`
add([
  text('WASD or arrow keys to move', { width: 600 })
])
`;function i(){}export{i as afterScript,c as beforeScript,n as script,s as title};
