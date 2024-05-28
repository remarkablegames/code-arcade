import{a as s}from"./cursors-BIrzN-a5.js";import{i,S as t}from"./index-DWpct6FG.js";import{c as r}from"./timer-CARbKUYj.js";const o=12;const n="Timer 1";let e=[];function l(){e=[r];i(o,e);e.push(s(add([sprite(t.player),pos(50,50),area(),t.player])).cancel);add([text("Wait for the exit")])}const m=`
/**
 * setTimeout() executes a function once the timer expires
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000
const MINUTE = SECOND * 60

setTimeout(() => {
  add([sprite('exit'), pos(center()), area(), 'exit'])
}, 5 * MINUTE)
`;function u(){}export{o as level,u as postscript,l as prescript,m as script,n as title};
