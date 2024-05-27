import{S as e,a as t}from"./sprite-Bu2Ba-Pv.js";import{S as r}from"./index-B1eJjGLG.js";const i=5;const p="Arrays";function l(){loadSprite(e.player,"sprites/bean.png");loadSprite(e.exit,"sprites/door.png");loadSprite(e.wall,"sprites/steel.png");t(add([sprite(e.player),pos(center()),area(),body(),e.player]));add([sprite(e.exit),pos(500,500),area(),e.exit]);onCollide(e.player,e.exit,()=>{go(r.game,0)});add([text("Escape the walls")])}const o=`
/**
 * Arrays are an ordered list of data
 */

const level = [
  '#######',
  '#     #',
  '#     #',
  '#     #',
  '#     #',
  '#######',
]

addLevel(level, {
  tileWidth: 64,
  tileHeight: 64,
  pos: vec2(64, 64),
  tiles: {
    '#': () => [
      sprite('wall'),
      area(),
      body({ isStatic: true }),
    ],
  }
})
`;function d(){}export{i as level,d as postscript,l as prescript,o as script,p as title};
