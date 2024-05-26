import{S as a}from"./index--SI4NskU.js";const t=320;function s(o){onKeyDown(r=>{switch(r){case"up":case"w":o.move(0,-t);break;case"left":case"a":o.move(-t,0);break;case"down":case"s":o.move(0,t);break;case"right":case"d":o.move(t,0);break}})}var e=(o=>{o["exit"]="exit";o["player"]="player";return o})(e||{});const i=0;const p="Hello, World!";function n(){loadSprite(e.player,"sprites/bean.png");loadSprite(e.exit,"sprites/door.png");s(add([sprite(e.player),pos(50,50),area(),e.player]));add([sprite(e.exit),pos(500,500),area(),e.exit]);onCollide(e.player,e.exit,()=>{go(a.game,i)})}const d=`
add([
  text('WASD or arrow keys to move', { width: 600 })
])
`;function l(){}export{i as level,l as postscript,n as prescript,d as script,p as title};
