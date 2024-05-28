import{a}from"./cursors-BIrzN-a5.js";import{i as p,S as e}from"./index-DWpct6FG.js";const t=9;const n="Loops";let s=[];const o=Array.from(Array(42).keys()).map(()=>"answer").join("");function c(){s=[];p(t,s);loadSprite(e.key,"sprites/key.png");s.push(a(add([sprite(e.player),pos(100,100),area(),e.player])).cancel);add([sprite(e.key),pos(center()),area(),e.key,{password:o}]);s.push(onCollide(e.key,e.player,r=>{if(r.password===o){r.destroy();add([sprite(e.exit),pos(500,500),area(),e.exit])}else{debug.log("Incorrect password")}}).cancel);add([text("Another password?")])}const l=`
/**
 * For loops repeat a block of code
 */

const key = get('key')[0]

// password = 'answer' repeated 42 times
let password = 'answer' + 'answer'

key.password = password
`;function y(){}export{t as level,y as postscript,c as prescript,l as script,n as title};
