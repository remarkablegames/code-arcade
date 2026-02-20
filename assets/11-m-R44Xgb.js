import{a as t,b as e,d as o,c as i}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as s}from"./texts-D4Uwcsjn.js";const n=11;const p="Function Hoisting";const d=`
${t()}
${e()}

${o()}
${i(n)}

${s("Move at the right time")}
`;const l=`
/**
 * Hoisting is where function declarations are moved to
 * the top of the scope before execution
 *
 * Note: hoisting does not apply to function expressions
 */

const player = get('player')[0]

player.onUpdate(() => movePlayer())

function movePlayer() {
  player.move(velocityX, velocityY)
}

const velocityX = 0
const velocityY = 0
`;const y=`
get('player')[0]?.moveTo(40, 70)
const exit = get('exit')[0]

const x = 40
const y = 560
const duration = 3

if (exit) {
  exit.moveTo(x, y)
  addTween()
}

async function addTween() {
  for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
    await tween(exit.pos, vec2(width() - x, y), duration, (pos) => (exit.pos = pos))
    await tween(exit.pos, vec2(x, y), duration, (pos) => (exit.pos = pos))
  }
}
`;export{n as level,y as postscript,d as prescript,l as script,p as title};
