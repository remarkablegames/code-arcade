import{a as o}from"./cursors-Ms_gDOeS.js";import{i as a,S as e}from"./index-C5zdgeo5.js";const t=9;const i="Loops";const r=Array.from(Array(42).keys()).map(()=>"answer").join("");function n(){a(t);loadSprite(e.key,"sprites/key.png");o(add([sprite(e.player),pos(100,100),area(),e.player]));add([sprite(e.key),pos(center()),area(),e.key,{password:r}]);onCollide(e.key,e.player,s=>{if(s.password===r){s.destroy();add([sprite(e.exit),pos(500,500),area(),e.exit])}else{debug.log("Incorrect password")}});add([text("Another password?")])}const c=`
/**
 * Loops repeat a block of code
 */

const key = get('key')[0]

// password = 'answer' repeated 42 times
let password = 'answer' + 'answer'

key.password = password
`;function y(){}export{t as level,y as postscript,n as prescript,c as script,i as title};
