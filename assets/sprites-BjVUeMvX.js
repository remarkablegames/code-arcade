import{G as o}from"./index-D5AZ38lH.js";const s=()=>`loadSound('blip', 'sounds/blip.mp3')`;const l=()=>`loadSound('hit', 'sounds/hit.mp3')`;const a=()=>`loadSound('powerup', 'sounds/powerup.mp3')`;const r=()=>`loadSound('signal', 'sounds/signal.mp3')`;const p=(e=320)=>`
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
`;const i=e=>`
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
`;const n=e=>`
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

onAdd('player', (player) => {
  if (get('player').length > 1) {
    player.destroy()
  }
})

onAdd('exit', (exit) => {
  if (get('exit').length > 1) {
    exit.destroy()
  }
})
`;const d=()=>`loadSprite('block', 'sprites/steel.png')`;const y=()=>`loadSprite('enemy', 'sprites/ghosty.png')`;const c=()=>`loadSprite('exit', 'sprites/door.png')`;const g=()=>`loadSprite('key', 'sprites/key.png')`;const u=()=>`loadSprite('player', 'sprites/bean.png')`;const k=()=>`loadSprite('spike', 'sprites/spike.png')`;export{c as a,n as b,g as c,i as d,l as e,k as f,d as g,y as h,r as i,u as l,p as r};
