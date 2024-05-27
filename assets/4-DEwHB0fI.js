import{S as e,a as t}from"./sprite-Bu2Ba-Pv.js";import{S as r}from"./index-B1eJjGLG.js";const o=4;const s="Booleans";function p(){loadSprite(e.player,"sprites/bean.png");loadSprite(e.exit,"sprites/door.png");t(add([sprite(e.player),pos(center()),area(),e.player]));onCollide(e.player,e.exit,()=>{go(r.game,o+1)});add([text("Exit is not truthy")])}const n=`
/**
 * Booleans can either be true or false
 */

if (false) {
  add([
    sprite('exit'),
    area(),
    'exit',
  ])
}
`;function l(){}export{o as level,l as postscript,p as prescript,n as script,s as title};
