import{l as r,a as s,r as o,b as a}from"./sprites-BgHRVQJw.js";const t=9;const d="For Loop";const e=Array.from(Array(42).keys()).map(()=>"answer").join("");const y=`
${r}
${s}
loadSprite('key', 'sprites/key.png')

const player = add([sprite('player'), pos(100, 100), area(), 'player'])

add([sprite('key'), pos(center()), area(), 'key', { password: '${e}' }])

${o()}
${a(t)}

onCollide('key', 'player', (key) => {
  if (key.password === '${e}') {
    key.destroy()
    add([sprite('exit'), pos(500, 500), area(), 'exit'])
  } else {
    debug.log('Incorrect password')
  }
})

add([text('Another password?')])
`;const i=`
/**
 * For loops repeat a block of code
 */

const key = get('key')[0]

// password = 'answer' repeated 42 times
let password = 'answer' + 'answer'

key.password = password
`;export{t as level,y as prescript,i as script,d as title};
