import{a as t}from"./cursors-Ms_gDOeS.js";import{i as r,S as e}from"./index-D-LkjMx9.js";const a=5;const l="Arrays";function o(){r(a);loadSprite(e.wall,"sprites/steel.png");t(add([sprite(e.player),pos(center()),area(),body(),e.player]));add([sprite(e.exit),pos(500,500),area(),e.exit]);add([text("Escape the walls")])}const p=`
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
`;function d(){}export{a as level,d as postscript,o as prescript,p as script,l as title};
