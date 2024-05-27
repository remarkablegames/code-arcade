import{S as e,a as t}from"./sprite-DO8_xoiY.js";import{S as r}from"./index-Ck-B1XVx.js";const s=1;const a="Comments";function p(){loadSprite(e.player,"sprites/bean.png");loadSprite(e.exit,"sprites/door.png");t(add([sprite(e.player),pos(50,50),area(),e.player]));onCollide(e.player,e.exit,()=>{go(r.game,s+1)});add([text("Where's the exit?")])}const n=`
/**
 * Single line comments start with two forward slashes //
 */

// add([sprite('exit'), pos(center()), area(), 'exit'])
`;function l(){}export{s as level,l as postscript,p as prescript,n as script,a as title};
