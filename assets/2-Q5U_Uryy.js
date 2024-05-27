import{S as e,a as t}from"./sprite-DO8_xoiY.js";import{S as r}from"./index-DpqzKoDp.js";const i=2;const p="Strings";function a(){loadSprite(e.player,"sprites/bean.png");loadSprite(e.exit,"sprites/door.png");t(add([sprite(e.player),pos(center()),area(),e.player]));onCollide(e.player,e.exit,()=>{go(r.game,i+1)})}const n=`
/**
 * Strings are text inside single or double quotes
 */

add([
  sprite('exite'),
  area(),
  "exit",
])
`;function l(){}export{i as level,l as postscript,a as prescript,n as script,p as title};
