import{r as e,t}from"./sprites-BBwFSzAc.js";import{t as n}from"./texts-BNBRxv-Z.js";import{i as r,t as i}from"./index-ByB9seIk.js";var a=10,o=`Function Expressions`,s=`Use a negative number`,c=`
${e()}
${t({pos:`center().x, 550`})}

${i()}
${r(10)}

${n(`Move me again`)}
`,l=`
/**
 * A function expression can omit the function name
 * to create an anonymous function
 */

const player = get('player')[0]

const movePlayer = function () {
  player.move(0, 0)
}

player.onUpdate(() => movePlayer())
`,u=`
get('player')[0]?.moveTo(width() - 50, 75)
`;export{s as hint,a as level,u as postscript,c as prescript,l as script,o as title};