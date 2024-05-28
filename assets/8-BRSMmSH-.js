import{a as o}from"./cursors-BIrzN-a5.js";import{i as n,S as e}from"./index-DWpct6FG.js";const t=8;const c="Variables";let r=[];function p(){const s=new Date().getFullYear();return(s+t)*31337}function l(){r=[];n(t,r);loadSprite(e.key,"sprites/key.png");r.push(o(add([sprite(e.player),pos(100,100),area(),e.player])).cancel);const s=p();add([sprite(e.key),pos(center()),area(),e.key,{password:s}]);r.push(onCollide(e.key,e.player,a=>{if(a.password===s){a.destroy();add([sprite(e.exit),pos(500,500),area(),e.exit])}else{debug.log("Incorrect password")}}).cancel);add([text("What's the password?")])}const y=`
/**
 * Variables store data
 * 'const' cannot be reassigned, whereas 'let' can be reassigned
 */

const key = get('key')[0]

// password = (current_year + current_level_number) * 31337
let password

key.password = password
`;function u(){}export{t as level,u as postscript,l as prescript,y as script,c as title};
