import{l as r,a as s,r as a,b as o}from"./sprites-DIKLQSSL.js";import{a as t}from"./texts-qyIFEy4l.js";import"./index-U8zA4yR0.js";const p=10;const l="For Loop";const e=Array.from(Array(42).keys()).map(()=>"answer").join("");const n=`
${r()}
${s()}
loadSprite('key', 'sprites/key.png')

add([sprite('player'), pos(100, 100), area(), 'player'])

add([sprite('key'), pos(center()), area(), 'key', { password: '${e}' }])

${a()}
${o(p)}

onCollide('key', 'player', (key) => {
  if (key.password === '${e}') {
    key.destroy()
    add([sprite('exit'), pos(500, 500), area(), 'exit'])
  } else {
    debug.log('Incorrect password')
  }
})

${t("Repeat the password")}
`;const c=`
/**
 * For loops repeat a block of code
 */

const key = get('key')[0]

// password = 'answer' repeated 42 times
let password = 'answer' + 'answer'

key.password = password
`;export{p as level,n as prescript,c as script,l as title};
