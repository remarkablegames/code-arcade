import{l as r,a as t,r as a,b as o}from"./sprites-DIKLQSSL.js";import{a as i}from"./texts-qyIFEy4l.js";import"./index-U8zA4yR0.js";const s=16;const y="JSON.stringify";const e=JSON.stringify({level:s,year:new Date().getFullYear()});const l=`
${r()}
${t()}
loadSprite('key', 'sprites/key.png')

add([sprite('player'), pos(100, 100), area(), 'player'])

add([sprite('key'), pos(center()), area(), 'key', { password: '${e}' }])

${a()}
${o(s)}

onCollide('key', 'player', (key) => {
  if (key.password === '${e}') {
    key.destroy()
    add([sprite('exit'), pos(500, 500), area(), 'exit'])
  } else {
    debug.log('Incorrect password')
  }
})

${i("Stringify the password")}
`;const c=`
/**
 * JSON.stringify() is a method that converts data into a string
 */

const key = get('key')[0]

// password = JSON string of object containing 'level' and 'year'
let password

key.password = password
`;export{s as level,l as prescript,c as script,y as title};
