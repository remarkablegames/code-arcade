import{a as n}from"./cursors-Ms_gDOeS.js";import{i as c,S as e}from"./index-DVVOSnAK.js";const l=10;const f="Loops 2";let o;const p=["          ","          ","^^^^^  ^^^","          ","^  ^^^^   ","^      ^^^","   ^      ","^^^^ ^^^  "];function y(){c(l,o);loadSprite(e.spike,"sprites/spike.png");n(add([sprite(e.player),pos(40,80),area(),body(),anchor("center"),e.player]));add([sprite(e.exit),pos(500,500),area(),e.exit]);const s=64;p.forEach((t,i)=>{t.split("").forEach((r,a)=>{if(r==="^"){add([sprite(e.spike),area(),pos(s*a,s*i),opacity(0),e.spike])}})});onCollide(e.player,e.spike,(t,i)=>{i.opacity=1;t.destroy();addKaboom(t.pos)});add([text("Invisible spikes")])}const h=`
/**
 * forEach loops iterates over an array
 */

const spikes = get('spike')
spikes[0].opacity = 0
`;function m(){const s=p.join("").split(" ").join("").length;o=onUpdate(()=>{if(get(e.spike).length<s){throw new Error(`There must be ${s} spikes!`)}}).cancel}export{l as level,m as postscript,y as prescript,h as script,f as title};
