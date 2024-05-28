import{a as t}from"./cursors-BIrzN-a5.js";import{i as p,S as e}from"./index-B5iiC36u.js";const n=9;const i="Loops";const s=[];const a=Array.from(Array(42).keys()).map(()=>"answer").join("");function l(){p(n,s);loadSprite(e.key,"sprites/key.png");s.push(t(add([sprite(e.player),pos(100,100),area(),e.player])).cancel);add([sprite(e.key),pos(center()),area(),e.key,{password:a}]);const r=onCollide(e.key,e.player,o=>{if(o.password===a){r();o.destroy();add([sprite(e.exit),pos(500,500),area(),e.exit])}else{debug.log("Incorrect password")}}).cancel;s.push(r);add([text("Another password?")])}const y=`
/**
 * For loops repeat a block of code
 */

const key = get('key')[0]

// password = 'answer' repeated 42 times
let password = 'answer' + 'answer'

key.password = password
`;function w(){}export{n as level,w as postscript,l as prescript,y as script,i as title};
