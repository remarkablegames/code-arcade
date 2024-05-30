import{G as o}from"./index-CrWy8xcs.js";const a=()=>`loadSound('blip', 'sounds/blip.mp3')`;const t=()=>`loadSound('hit', 'sounds/hit.mp3')`;const s=()=>`loadSound('powerup', 'sounds/powerup.mp3')`;const l=(e=320)=>`
onKeyDown((key) => {
  const player = get('player')[0]

  if (!player) {
    return
  }

  switch (key) {
    case 'up':
    case 'w':
      player.move(0, -${e})
      break

    case 'left':
    case 'a':
      player.move(-${e}, 0)
      break

    case 'down':
    case 's':
      player.move(0, ${e})
      break

    case 'right':
    case 'd':
      player.move(${e}, 0)
      break
  }
})
`;const p=e=>`
${a()}
${s()}

onCollide('key', 'player', (key) => {
  if (key.password === ${typeof e==="string"?JSON.stringify(e):e}) {
    play('powerup', { volume: 0.5 })
    key.destroy()
    add([sprite('exit'), pos(500, 500), area(), 'exit'])
  } else {
    play('blip', { volume: 0.5 })
    debug.log('Incorrect password')
  }
})
`;const i=e=>`
loadSound('exit', 'sounds/wooosh.mp3')

onCollide('player', 'exit', () => {
  play('exit')

  wait(0.2, () => {
    window.parent.postMessage({
      source: '${o}',
      level: ${e+1},
    })
  })
})
`;const n=()=>`loadSprite('exit', 'sprites/door.png')`;const d=()=>`loadSprite('key', 'sprites/key.png')`;const y=()=>`loadSprite('player', 'sprites/bean.png')`;export{n as a,i as b,d as c,p as d,t as e,y as l,l as r};
