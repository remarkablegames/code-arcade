import{a}from"./cursors-BIrzN-a5.js";import{i as r,S as e}from"./index-DWpct6FG.js";const s=5;const p="Arrays";let t=[];function o(){t=[];r(s,t);loadSprite(e.wall,"sprites/steel.png");t.push(a(add([sprite(e.player),pos(center()),area(),body(),e.player])).cancel);add([sprite(e.exit),pos(500,500),area(),e.exit]);add([text("Escape the walls")])}const d=`
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
`;function c(){}export{s as level,c as postscript,o as prescript,d as script,p as title};
