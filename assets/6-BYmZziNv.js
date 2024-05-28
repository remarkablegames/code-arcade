import{i as s,S as e}from"./index-DWpct6FG.js";const p=6;const o="Objects";let t=[];function a(){t=[];s(p,t);add([sprite(e.player),pos(0,36),area(),body(),e.player]);add([sprite(e.exit),pos(516,516),area(),e.exit]);t.push(onKeyPress(()=>{debug.log("Keypress disabled!")}).cancel);add([text("Reposition me")])}const i=`
/**
 * Objects are a collection of properties or key-value pairs
 */

const player = get('player')[0]
player.pos.x = 0
player.pos.y = 36
`;function l(){}export{p as level,l as postscript,a as prescript,i as script,o as title};
