import{l as r,a as s,r as a,b as o}from"./sprites-uUyKPnYV.js";import"./index-DhYtdT-E.js";const t=9;const i="For Loop";const e=Array.from(Array(42).keys()).map(()=>"answer").join("");const y=`
${r()}
${s()}
loadSprite('key', 'sprites/key.png')

const player = add([sprite('player'), pos(100, 100), area(), 'player'])

add([sprite('key'), pos(center()), area(), 'key', { password: '${e}' }])

${a()}
${o(t)}

onCollide('key', 'player', (key) => {
  if (key.password === '${e}') {
    key.destroy()
    add([sprite('exit'), pos(500, 500), area(), 'exit'])
  } else {
    debug.log('Incorrect password')
  }
})

add([text('Repeat the password')])
`;const l=`
/**
 * For loops repeat a block of code
 */

const key = get('key')[0]

// password = 'answer' repeated 42 times
let password = 'answer' + 'answer'

key.password = password
`;export{t as level,y as prescript,l as script,i as title};
