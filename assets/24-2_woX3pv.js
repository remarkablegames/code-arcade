import{h as e,i as t,n,t as r}from"./index-C2wpxjHL.js";var i=24,a=`addEventListener`,o=`addEventListener('click', callback)`,s=`
${t({pos:`50, 100`})}
${n({pos:`center()`})}

${e(24)}

onKeyPress(() => {
  debug.log('Key press disabled!')
})

${r(`Listen to click`)}
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