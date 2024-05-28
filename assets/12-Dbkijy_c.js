import{a as s}from"./cursors-BIrzN-a5.js";import{i,S as e}from"./index-CttJsVe2.js";import{c as o}from"./timer-CARbKUYj.js";const r=12;const n="Timer 1";const t=[];function l(){i(r,t);t.push(o);t.push(s(add([sprite(e.player),pos(50,50),area(),e.player])).cancel);add([text("Wait for the exit")])}const m=`
/**
 * setTimeout() executes a function once the timer expires
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000
const MINUTE = SECOND * 60

setTimeout(() => {
  add([sprite('exit'), pos(center()), area(), 'exit'])
}, 5 * MINUTE)
`;function u(){}export{r as level,u as postscript,l as prescript,m as script,n as title};
