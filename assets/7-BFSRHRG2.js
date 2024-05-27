import{i as r,S as e}from"./index-DigvHXSY.js";const s=7;const p="Functions";let t;function n(){r(s,t);add([sprite(e.player),pos(0,36),area(),e.player]);add([sprite(e.exit),pos(center().x,500),area(),e.exit]);add([text("Move me")])}const i=`
/**
 * Functions are blocks of code designed to perform a task
 */

const player = get('player')[0]

function movePlayer() {
  player.move(0, 0)
}

player.onUpdate(() => movePlayer())
`;function l(){const o=get("player")[0];o.moveTo(0,36);t.push(onKeyPress(()=>{debug.log("Keypress disabled!")}).cancel)}export{s as level,l as postscript,n as prescript,i as script,p as title};
