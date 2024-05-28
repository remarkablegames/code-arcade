import{a as r}from"./cursors-Ms_gDOeS.js";import{i as p,S as e}from"./index-CMYgftrP.js";const i=11;const y="Loops 3";const o=[];const c=500;function m(){p(i,o);loadSprite(e.enemy,"sprites/ghosty.png");loadSprite(e.wall,"sprites/steel.png");const n=add([sprite(e.player),pos(40,60),area(),body(),anchor("center"),e.player]);r(n);add([sprite(e.exit),pos(500,500),area(),e.exit]);const s=add([sprite(e.enemy),pos(center()),area(),body(),e.enemy]);const a=s.onUpdate(()=>{const t=n.pos.sub(s.pos).unit();s.move(t.scale(c))});o.push(a.cancel);o.push(onCollide(e.player,e.enemy,t=>{a.cancel();t.destroy();addKaboom(t.pos)}).cancel);add([text("Protect yourself")])}const h=`
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
`;function u(){get("enemy")[0].moveTo(center());o.push(onUpdate(()=>{if(get(e.enemy).length<1){throw new Error("There must be 1 enemy!")}}).cancel)}export{i as level,u as postscript,m as prescript,h as script,y as title};
