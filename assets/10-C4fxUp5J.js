import{a as l}from"./cursors-BIrzN-a5.js";import{i as d,S as e}from"./index-DWpct6FG.js";const h=10;const y="Loops 2";let i=[];const r=["          ","          ","^^^^^  ^^^","          ","^  ^^^^   ","^      ^^^","   ^      ","^^^^ ^^^  "];const p=r.join("").split(" ").join("").length;const a=64;function m(){i=[];d(h,i);loadSprite(e.spike,"sprites/spike.png");const o=add([sprite(e.player),pos(40,80),area(),body(),anchor("center"),e.player]);i.push(l(o).cancel);add([sprite(e.exit),pos(500,500),area(),e.exit]);r.forEach((s,t)=>{s.split("").forEach((n,c)=>{if(n==="^"){add([sprite(e.spike),area(),pos(a*c,a*t),opacity(0),e.spike])}})});i.push(onCollide(e.player,e.spike,(s,t)=>{t.opacity=1;s.destroy();addKaboom(s.pos)}).cancel);i.push(onUpdate(()=>{const{x:s,y:t}=o.pos;if(s<0||t<0||s>width()||t>height()){o.moveTo(40,80)}if(get(e.spike).length<p){throw new Error(`There must be ${p} spikes!`)}}).cancel);add([text("Invisible spikes")])}const u=`
/**
 * forEach() is an iterative method
 */

const spikes = get('spike')
spikes[0].opacity = 0
`;function E(){}export{h as level,E as postscript,m as prescript,u as script,y as title};
