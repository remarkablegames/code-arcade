import{i as t,S as e}from"./index-MopmPZdm.js";const o=6;const r="Objects";function s(){t(o);add([sprite(e.player),pos(0,36),area(),body(),e.player]);add([sprite(e.exit),pos(516,516),area(),e.exit]);add([text("Cannot move, reposition me")])}const a=`
/**
 * Objects are a collection of properties or key-value pairs
 */

const player = get('player')[0]
player.pos.x = 0
player.pos.y = 36
`;function i(){}export{o as level,i as postscript,s as prescript,a as script,r as title};
