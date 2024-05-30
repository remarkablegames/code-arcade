import{l as s,a,r as t,b as o}from"./sprites-DIKLQSSL.js";import{a as p}from"./texts-qyIFEy4l.js";import"./index-U8zA4yR0.js";const r=9;const n="Variables";const e=(new Date().getFullYear()+r)*31337;const y=`
${s()}
${a()}
loadSprite('key', 'sprites/key.png')

add([sprite('player'), pos(100, 100), area(), 'player'])
add([sprite('key'), pos(center()), area(), 'key', { password: ${e} }])

${t()}
${o(r)}

onCollide('key', 'player', (key) => {
  if (key.password === ${e}) {
    key.destroy()
    add([sprite('exit'), pos(500, 500), area(), 'exit'])
  } else {
    debug.log('Incorrect password')
  }
})

${p("Update password & go to key")}
`;const c=`
/**
 * Variables store data
 * 'const' cannot be reassigned, whereas 'let' can be reassigned
 */

const key = get('key')[0]

// password = (current_year + current_level_number) * 31337
let password

key.password = password
`;export{r as level,y as prescript,c as script,n as title};
