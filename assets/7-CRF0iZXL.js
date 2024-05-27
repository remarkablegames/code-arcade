import{i as o,S as e}from"./index-CK0hfUCJ.js";const a=7;const p="Functions";function n(){o(a);add([sprite(e.player),pos(0,36),area(),e.player]);add([sprite(e.exit),pos(516,516),area(),e.exit]);add([text("Cannot move, automate me")])}const s=`
/**
 * Functions are blocks of code designed to perform a task
 */

const player = get('player')[0]

function movePlayer() {
  player.move(0)
}

player.onUpdate(() => movePlayer())
`;function i(){const t=get("player")[0];t.moveTo(0,36)}export{a as level,i as postscript,n as prescript,s as script,p as title};
