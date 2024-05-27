import{a as n}from"./cursors-Ms_gDOeS.js";import{i as c,S as e}from"./index-DigvHXSY.js";const l=10;const k="Loops 2";let p;const r=["          ","          ","^^^^^  ^^^","          ","^  ^^^^   ","^      ^^^","   ^      ","^^^^ ^^^  "];function y(){c(l,p);loadSprite(e.spike,"sprites/spike.png");n(add([sprite(e.player),pos(40,80),area(),body(),anchor("center"),e.player]));add([sprite(e.exit),pos(500,500),area(),e.exit]);const o=64;r.forEach((s,t)=>{s.split("").forEach((i,a)=>{if(i==="^"){add([sprite(e.spike),area(),pos(o*a,o*t),opacity(0),e.spike])}})});p.push(onCollide(e.player,e.spike,(s,t)=>{t.opacity=1;s.destroy();addKaboom(s.pos)}).cancel);add([text("Invisible spikes")])}const f=`
/**
 * forEach loops iterate over an array
 */

const spikes = get('spike')
spikes[0].opacity = 0
`;function m(){const o=r.join("").split(" ").join("").length;const s=get("player")[0];p.push(onUpdate(()=>{const{x:t,y:i}=s.pos;if(t<0||i<0||t>width()||i>height()){s.moveTo(40,80)}if(get(e.spike).length<o){throw new Error(`There must be ${o} spikes!`)}}).cancel)}export{l as level,m as postscript,y as prescript,f as script,k as title};
