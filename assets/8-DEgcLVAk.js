import{a}from"./cursors-Ms_gDOeS.js";import{i as o,S as e}from"./index-BsM6gm8t.js";const t=8;const i="Variables";function n(){const r=new Date().getFullYear();return(r+t)*31337}function c(){o(t);loadSprite(e.key,"sprites/key.png");a(add([sprite(e.player),pos(100,100),area(),e.player]));const r=n();add([sprite(e.key),pos(center()),area(),e.key,{password:r}]);onCollide(e.key,e.player,s=>{if(s.password===r){s.destroy();add([sprite(e.exit),pos(500,500),area(),e.exit])}else{debug.log("Incorrect password")}});add([text("What's the password?")])}const l=`
/**
 * Variables store data
 * 'const' cannot be reassigned, whereas 'let' can be reassigned
 */

const key = get('key')[0]

// password = (current_year + current_level_number) * 31337
let password

key.password = password
`;function y(){}export{t as level,y as postscript,c as prescript,l as script,i as title};
