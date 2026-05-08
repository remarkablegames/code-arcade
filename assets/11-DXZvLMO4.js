import{f as e,h as t,i as n,n as r,t as i}from"./index-C2wpxjHL.js";var a=11,o=`Function Hoisting`,s=`
${n()}
${r()}

${e()}
${t(11)}

${i(`Move at the right time`)}
`,c=`
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
`,l=`
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
`;export{a as level,l as postscript,s as prescript,c as script,o as title};