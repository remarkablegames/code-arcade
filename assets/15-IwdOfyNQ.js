import{l as t,a as r,r as a,b as o}from"./sprites-Bgw52aqI.js";const s=15;const d="JSON.stringify";const e=JSON.stringify({level:s,year:new Date().getFullYear()});const p=`
${t()}
${r()}
loadSprite('key', 'sprites/key.png')

const player = add([sprite('player'), pos(100, 100), area(), 'player'])

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

add([text('Got the password?')])
`;const n=`
/**
 * JSON.stringify() is a method that converts data into a string
 */

const key = get('key')[0]

// password = JSON string of object containing 'level' and 'year'
let password

key.password = password
`;export{s as level,p as prescript,n as script,d as title};
