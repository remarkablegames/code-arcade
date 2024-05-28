import{a as n}from"./cursors-BIrzN-a5.js";import{i as p,S as e}from"./index-B5iiC36u.js";const o=8;const l="Variables";const r=[];function c(){const s=new Date().getFullYear();return(s+o)*31337}function y(){p(o,r);loadSprite(e.key,"sprites/key.png");r.push(n(add([sprite(e.player),pos(100,100),area(),e.player])).cancel);const s=c();add([sprite(e.key),pos(center()),area(),e.key,{password:s}]);const t=onCollide(e.key,e.player,a=>{if(a.password===s){t();a.destroy();add([sprite(e.exit),pos(500,500),area(),e.exit])}else{debug.log("Incorrect password")}}).cancel;r.push(t);add([text("What's the password?")])}const u=`
/**
 * Variables store data
 * 'const' cannot be reassigned, whereas 'let' can be reassigned
 */

const key = get('key')[0]

// password = (current_year + current_level_number) * 31337
let password

key.password = password
`;function w(){}export{o as level,w as postscript,y as prescript,u as script,l as title};
