import{f as e,h as t,i as n,n as r,t as i}from"./index-C2wpxjHL.js";var a=10,o=`Function Expressions`,s=`Use a negative number`,c=`
${n()}
${r({pos:`center().x, 550`})}

${e()}
${t(10)}

${i(`Move me again`)}
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