import{r as e,t}from"./sprites-BBwFSzAc.js";import{t as n}from"./texts-BNBRxv-Z.js";import{i as r,t as i}from"./index-ByB9seIk.js";var a=9,o=`Functions`,s=`Edit the values in player.move(...)`,c=`
${e()}
${t({pos:`center().x, 550`})}

${i()}
${r(9)}

${n(`Move me`)}
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