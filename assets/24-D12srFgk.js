import{r as e,t}from"./sprites-BBwFSzAc.js";import{t as n}from"./texts-BNBRxv-Z.js";import{i as r}from"./index-ByB9seIk.js";var i=24,a=`addEventListener`,o=`addEventListener('click', callback)`,s=`
${e({pos:`50, 100`})}
${t({pos:`center()`})}

${r(24)}

onKeyPress(() => {
  debug.log('Key press disabled!')
})

${n(`Listen to click`)}
`,c=`
/**
 * addEventListener() allows you to add an event handler
 */

const player = get('player')[0]
const event = ''

function callback() {
  player.moveTo(mousePos())
}

addEventListener(event, null)
`;export{o as hint,i as level,s as prescript,c as script,a as title};