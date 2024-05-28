import{a as r}from"./cursors-BIrzN-a5.js";import{i as a,S as e}from"./index-DWpct6FG.js";import{a as i}from"./timer-CARbKUYj.js";const s=13;const c="Timer 2";let t=[];function l(){t=[i];a(s,t);t.push(r(add([sprite(e.player),pos(50,80),area(),anchor("center"),e.player])).cancel);add([sprite(e.exit),pos(center()),area(),anchor("center"),e.exit]);add([text("Exit in a loop")])}const d=`
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
`;function x(){}export{s as level,x as postscript,l as prescript,d as script,c as title};
