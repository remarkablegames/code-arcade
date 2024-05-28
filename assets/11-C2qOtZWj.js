import{a as p}from"./cursors-BIrzN-a5.js";import{i as c,S as e}from"./index-DWpct6FG.js";const l=11;const m="Loops 3";let o=[];const i=500;let n;function r(){const t=add([sprite(e.enemy),pos(center()),area(),body(),e.enemy]);n=t.onUpdate(()=>{const s=get(e.player)[0];if(s){const a=s.pos.sub(t.pos).unit();t.move(a.scale(i))}}).cancel;o.push(n);return t}function u(){o=[];c(l,o);loadSprite(e.enemy,"sprites/ghosty.png");loadSprite(e.wall,"sprites/steel.png");const t=add([sprite(e.player),pos(40,60),area(),body(),anchor("center"),e.player]);o.push(p(t).cancel);add([sprite(e.exit),pos(500,500),area(),e.exit]);r();o.push(onCollide(e.player,e.enemy,(s,a)=>{n();a.onUpdate(()=>{}).cancel();s.destroy();addKaboom(s.pos)}).cancel);o.push(onDestroy(e.enemy,()=>{r()}).cancel);add([text("Protect yourself")])}const h=`
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
`;function f(){const t=get(e.enemy)[0];if(t){t.moveTo(center())}}export{l as level,f as postscript,u as prescript,h as script,m as title};
