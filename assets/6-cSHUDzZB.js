import{i as t,S as e}from"./index-D0m1McmU.js";const p=6;const o="Objects";function a(){t(p);add([sprite(e.player),pos(0,36),area(),body(),e.player]);add([sprite(e.exit),pos(516,516),area(),e.exit]);add([text("Cannot move, reposition me")])}const s=`
/**
 * Objects are a collection of properties or key-value pairs
 */

const player = get('player')[0]
player.scale = 0.5
player.pos.x = 0
player.pos.y = 36
`;function i(){}export{p as level,i as postscript,a as prescript,s as script,o as title};
