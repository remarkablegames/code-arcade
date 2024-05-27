import{S as e,a as r}from"./sprite-Bu2Ba-Pv.js";import{S as t}from"./index-B1eJjGLG.js";const o=0;const s="Hello, World!";function i(){loadSprite(e.player,"sprites/bean.png");loadSprite(e.exit,"sprites/door.png");r(add([sprite(e.player),pos(50,50),area(),e.player]));add([sprite(e.exit),pos(500,500),area(),e.exit]);onCollide(e.player,e.exit,()=>{go(t.game,o+1)})}const l=`
add([
  text('WASD or arrow keys to move')
])
`;function d(){}export{o as level,d as postscript,i as prescript,l as script,s as title};
