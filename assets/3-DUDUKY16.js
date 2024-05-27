import{S as e,a as t}from"./sprite-DO8_xoiY.js";import{S as r}from"./index-D9-5Cedq.js";const i=3;const s="Numbers";function a(){loadSprite(e.player,"sprites/bean.png");loadSprite(e.exit,"sprites/door.png");t(add([sprite(e.player),pos(500,500),area(),e.player]));onCollide(e.player,e.exit,()=>{go(r.game,i+1)});add([text("Exit is not in view?")])}const n=`
/**
 * Numbers represent floating-point numbers like 42 or -13.37.
 */

add([
  sprite('exit'),
  area(),
  'exit',
  pos(-9999, -9999),
])
`;function l(){}export{i as level,l as postscript,a as prescript,n as script,s as title};
