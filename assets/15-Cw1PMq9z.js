import{a as i}from"./cursors-BIrzN-a5.js";import{i as n,S as e}from"./index-Ma2pAkcw.js";const o=15;const c="JSON.stringify";const s=[];function l(){n(o,s);loadSprite(e.key,"sprites/key.png");s.push(i(add([sprite(e.player),pos(100,100),area(),e.player])).cancel);const t=JSON.stringify({level:o,year:new Date().getFullYear()});add([sprite(e.key),pos(center()),area(),e.key,{password:t}]);const r=onCollide(e.key,e.player,a=>{if(a.password===t){r();a.destroy();add([sprite(e.exit),pos(500,500),area(),e.exit])}else{debug.log("Incorrect password")}}).cancel;s.push(r);add([text("Got the password?")])}const y=`
/**
 * JSON.stringify() is a method that converts data into a string
 */

const key = get('key')[0]

// password = JSON string of object containing 'level' and 'year'
let password

key.password = password
`;function g(){}export{o as level,g as postscript,l as prescript,y as script,c as title};
