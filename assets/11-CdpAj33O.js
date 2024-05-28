import{a as p}from"./cursors-BIrzN-a5.js";import{i as c,S as e}from"./index-B5iiC36u.js";const i=11;const m="Loops 3";const s=[];const l=500;let a;function r(){const t=add([sprite(e.enemy),pos(center()),area(),body(),e.enemy]);a=t.onUpdate(()=>{const o=get(e.player)[0];if(o){const n=o.pos.sub(t.pos).unit();t.move(n.scale(l))}}).cancel;s.push(a);return t}function u(){c(i,s);loadSprite(e.enemy,"sprites/ghosty.png");loadSprite(e.wall,"sprites/steel.png");const t=add([sprite(e.player),pos(40,60),area(),body(),anchor("center"),e.player]);s.push(p(t).cancel);add([sprite(e.exit),pos(500,500),area(),e.exit]);r();s.push(onCollide(e.player,e.enemy,(o,n)=>{a();n.onUpdate(()=>{}).cancel();o.destroy();addKaboom(o.pos)}).cancel);s.push(onDestroy(e.enemy,()=>{r()}).cancel);add([text("Protect yourself")])}const h=`
const wall = {
  width: 64,
  height: 64,
}

add([
  sprite('wall'),
  pos(wall.width * 6, wall.height * 6),
  area(),
  body({ isStatic: true }),
])
`;function f(){const t=get(e.enemy)[0];if(t){t.moveTo(center())}}export{i as level,f as postscript,u as prescript,h as script,m as title};
