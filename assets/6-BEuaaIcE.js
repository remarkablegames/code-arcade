import{i as t,S as e}from"./index-s47Hfpno.js";const p=6;const r="Objects";const s=[];function a(){t(p,s);add([sprite(e.player),pos(0,36),area(),body(),e.player]);add([sprite(e.exit),pos(516,516),area(),e.exit]);s.push(onKeyPress(()=>{debug.log("Keypress disabled!")}).cancel);add([text("Reposition me")])}const i=`
/**
 * Objects are a collection of properties or key-value pairs
 */

const player = get('player')[0]
player.pos.x = 0
player.pos.y = 36
`;function c(){}export{p as level,c as postscript,a as prescript,i as script,r as title};
