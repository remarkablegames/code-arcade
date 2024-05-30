import{l as r,a as t,r as a,b as o}from"./sprites-CqAi-61g.js";import"./index-BZnxxq9W.js";const s=16;const p="JSON.stringify";const e=JSON.stringify({level:s,year:new Date().getFullYear()});const n=`
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

add([text('Stringify the password')])
`;const y=`
/**
 * JSON.stringify() is a method that converts data into a string
 */

const key = get('key')[0]

// password = JSON string of object containing 'level' and 'year'
let password

key.password = password
`;export{s as level,n as prescript,y as script,p as title};
