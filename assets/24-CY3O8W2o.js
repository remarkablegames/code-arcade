import{a as e,b as t,c as n}from"./sprites-Dr6MNwIS.js";import"./index-P3ZjQWiZ.js";import{a as s}from"./texts-D4Uwcsjn.js";const o=24;const i="addEventListener";const c="addEventListener('click', callback)";const l=`
${e({pos:"50, 100"})}
${t({pos:"center()"})}

${n(o)}

onKeyPress(() => {
  debug.log('Key press disabled!')
})

${s("Listen to click")}
`;const p=`
/**
 * addEventListener() allows you to add an event handler
 */

const player = get('player')[0]
const event = ''

function callback() {
  player.moveTo(mousePos())
}

addEventListener(event, null)
`;export{c as hint,o as level,l as prescript,p as script,i as title};
