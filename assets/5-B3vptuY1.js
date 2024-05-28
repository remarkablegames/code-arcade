import{a as s}from"./cursors-BIrzN-a5.js";import{i as a,S as e}from"./index-s47Hfpno.js";const r=5;const p="Arrays";const t=[];function o(){a(r,t);loadSprite(e.wall,"sprites/steel.png");t.push(s(add([sprite(e.player),pos(center()),area(),body(),e.player])).cancel);add([sprite(e.exit),pos(500,500),area(),e.exit]);add([text("Escape the walls")])}const c=`
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
`;function d(){}export{r as level,d as postscript,o as prescript,c as script,p as title};
