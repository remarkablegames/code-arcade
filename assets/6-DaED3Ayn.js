import{i as p,S as e}from"./index-DVVOSnAK.js";const s=6;const o="Objects";let t;function a(){p(s,t);add([sprite(e.player),pos(0,36),area(),body(),e.player]);add([sprite(e.exit),pos(516,516),area(),e.exit]);add([text("Reposition me")])}const i=`
/**
 * Objects are a collection of properties or key-value pairs
 */

const player = get('player')[0]
player.pos.x = 0
player.pos.y = 36
`;function l(){t=onKeyPress(()=>{debug.log("Keypress disabled!")}).cancel}export{s as level,l as postscript,a as prescript,i as script,o as title};
