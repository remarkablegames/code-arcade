import{G as o}from"./index-DN4CyoXJ.js";const s=()=>`loadSound('blip', 'sounds/blip.mp3')`;const r=()=>`loadSound('hit', 'sounds/hit.mp3')`;const a=()=>`loadSound('powerup', 'sounds/powerup.mp3')`;const p=(e=320)=>`
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
`;const l=e=>`
${s()}
${a()}

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
`;const n=()=>`loadSprite('block', 'sprites/steel.png')`;const d=()=>`loadSprite('enemy', 'sprites/ghosty.png')`;const y=()=>`loadSprite('exit', 'sprites/door.png')`;const c=()=>`loadSprite('key', 'sprites/key.png')`;const g=()=>`loadSprite('player', 'sprites/bean.png')`;const k=()=>`loadSprite('spike', 'sprites/spike.png')`;export{y as a,i as b,c,l as d,r as e,k as f,n as g,d as h,g as l,p as r};
