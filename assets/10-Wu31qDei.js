import{a as n}from"./cursors-Ms_gDOeS.js";import{i as c,S as e}from"./index-B6QyTs1C.js";const l=10;const y="Loops 2";let p;const r=["          ","          ","^^^^^  ^^^","          ","^  ^^^^   ","^      ^^^","   ^      ","^^^^ ^^^  "];function h(){c(l,p);loadSprite(e.spike,"sprites/spike.png");n(add([sprite(e.player),pos(40,80),area(),body(),anchor("center"),e.player]));add([sprite(e.exit),pos(500,500),area(),e.exit]);const o=64;r.forEach((s,t)=>{s.split("").forEach((i,a)=>{if(i==="^"){add([sprite(e.spike),area(),pos(o*a,o*t),opacity(0),e.spike])}})});onCollide(e.player,e.spike,(s,t)=>{t.opacity=1;s.destroy();addKaboom(s.pos)});add([text("Invisible spikes")])}const f=`
/**
 * forEach loops iterates over an array
 */

const spikes = get('spike')
spikes[0].opacity = 0
`;function m(){const o=r.join("").split(" ").join("").length;const s=get("player")[0];p=onUpdate(()=>{const{x:t,y:i}=s.pos;if(t<0||i<0||t>width()||i>height()){s.moveTo(40,80)}if(get(e.spike).length<o){throw new Error(`There must be ${o} spikes!`)}}).cancel}export{l as level,m as postscript,h as prescript,f as script,y as title};
