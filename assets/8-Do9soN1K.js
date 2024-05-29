import{l as r,a,r as t,b as o}from"./sprites-BgHRVQJw.js";const s=8;const p="Variables";const e=(new Date().getFullYear()+s)*31337;const l=`
${r}
${a}
loadSprite('key', 'sprites/key.png')

const player = add([sprite('player'), pos(100, 100), area(), 'player'])
add([sprite('key'), pos(center()), area(), 'key', { password: ${e} }])

${t()}
${o(s)}

onCollide('key', 'player', (key) => {
  if (key.password === ${e}) {
    key.destroy()
    add([sprite('exit'), pos(500, 500), area(), 'exit'])
  } else {
    debug.log('Incorrect password')
  }
})

add([text("What's the password?")])
`;const n=`
/**
 * Variables store data
 * 'const' cannot be reassigned, whereas 'let' can be reassigned
 */

const key = get('key')[0]

// password = (current_year + current_level_number) * 31337
let password

key.password = password
`;export{s as level,l as prescript,n as script,p as title};
