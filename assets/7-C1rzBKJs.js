import{i as r,S as e}from"./index-DUn6C2sZ.js";const s=7;const p="Functions";const t=[];function n(){r(s,t);add([sprite(e.player),pos(0,36),area(),e.player]);add([sprite(e.exit),pos(center().x,500),area(),e.exit]);t.push(onKeyPress(()=>{debug.log("Keypress disabled!")}).cancel);add([text("Move me")])}const c=`
/**
 * Functions are blocks of code designed to perform a task
 */

const player = get('player')[0]

function movePlayer() {
  player.move(0, 0)
}

player.onUpdate(() => movePlayer())
`;function i(){const o=get("player")[0];o.moveTo(0,36)}export{s as level,i as postscript,n as prescript,c as script,p as title};
