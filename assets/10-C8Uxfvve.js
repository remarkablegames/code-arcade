import{a as e,b as t,d as o,c as n}from"./sprites-B33C6Idj.js";import"./index-C5ABopwR.js";import{a}from"./texts-D4Uwcsjn.js";const s=10;const p="Function Expressions";const m="Use a negative number";const l=`
${e()}
${t({pos:"center().x, 550"})}

${o()}
${n(s)}

${a("Move me again")}
`;const d=`
/**
 * A function expression can omit the function name
 * to create an anonymous function
 */

const player = get('player')[0]

const movePlayer = function () {
  player.move(0, 0)
}

player.onUpdate(() => movePlayer())
`;const y=`
get('player')[0]?.moveTo(width() - 50, 75)
`;export{m as hint,s as level,y as postscript,l as prescript,d as script,p as title};
