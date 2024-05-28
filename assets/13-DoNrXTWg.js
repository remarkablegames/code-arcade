import{a as e}from"./cursors-Ms_gDOeS.js";import{i as r,S as t}from"./index-C5zdgeo5.js";import{a}from"./timer-CARbKUYj.js";const i=13;const p="Timer 2";function c(){r(i,[a]);e(add([sprite(t.player),pos(50,80),area(),anchor("center"),t.player]));add([sprite(t.exit),pos(center()),area(),anchor("center"),t.exit]);add([text("Exit in a loop")])}const l=`
/**
 * setInterval() calls a function at specified intervals
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000

const player = get('player')[0]
const exit = get('exit')[0]

setInterval(() => {
  exit.moveTo(
    randi(player.pos.x, width()),
    randi(player.pos.y, height()),
  )
}, SECOND)
`;function d(){}export{i as level,d as postscript,c as prescript,l as script,p as title};
