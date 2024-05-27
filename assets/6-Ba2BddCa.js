import{i as r,S as e}from"./index-BsM6gm8t.js";const s=6;const a="Objects";let t;function i(){r(s,t);add([sprite(e.player),pos(0,36),area(),body(),e.player]);add([sprite(e.exit),pos(516,516),area(),e.exit]);add([text("Reposition me")])}const l=`
/**
 * Objects are a collection of properties or key-value pairs
 */

const player = get('player')[0]
player.pos.x = 0
player.pos.y = 36
`;function c(){const o=onKeyPress(()=>{debug.log("Keypress disabled!")});t=o.cancel}export{s as level,c as postscript,i as prescript,l as script,a as title};
