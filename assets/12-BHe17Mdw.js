import{a as e}from"./cursors-Ms_gDOeS.js";import{i,S as t}from"./index-C5zdgeo5.js";import{c as r}from"./timer-CARbKUYj.js";const o=12;const p="Timer 1";function n(){i(o,[r]);e(add([sprite(t.player),pos(50,50),area(),t.player]));add([text("Wait for the exit")])}const m=`
/**
 * setTimeout() executes a function once the timer expires
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000
const MINUTE = SECOND * 60

setTimeout(() => {
  add([sprite('exit'), pos(center()), area(), 'exit'])
}, 5 * MINUTE)
`;function l(){}export{o as level,l as postscript,n as prescript,m as script,p as title};
