import{f as e,h as t,i as n,n as r,t as i}from"./index-C2wpxjHL.js";var a=9,o=`Functions`,s=`Edit the values in player.move(...)`,c=`
${n()}
${r({pos:`center().x, 550`})}

${e()}
${t(9)}

${i(`Move me`)}
`,l=`
/**
 * A function is a block of code designed to perform a task
 */

const player = get('player')[0]

function movePlayer() {
  player.move(0, 0)
}

player.onUpdate(() => movePlayer())
`,u=`
get('player')[0]?.moveTo(50, 75)
`;export{s as hint,a as level,u as postscript,c as prescript,l as script,o as title};