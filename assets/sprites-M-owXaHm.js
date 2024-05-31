import{G as o}from"./index-7cZA0KuL.js";const s=()=>`loadSound('blip', 'sounds/blip.mp3')`;const p=()=>`loadSound('hit', 'sounds/hit.mp3')`;const a=()=>`loadSound('powerup', 'sounds/powerup.mp3')`;const n=()=>`loadSound('signal', 'sounds/signal.mp3')`;const i=()=>`
onKeyPress(() => {
  debug.log('Key press disabled!')
})

onMousePress(() => {
  debug.log('Mouse press disabled!')
})
`;const d=(e=320)=>`
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

onMouseDown(() => {
  const player = get('player')[0]
  if (!player) {
    return
  }

  player.moveTo(mousePos(), ${e})
})
`;const y=e=>`
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
`;const c=e=>`
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
`;const g=({pos:e=""}={})=>`
${r()}
add([sprite('exit'), anchor('center'), area(), pos(${e}), 'exit'])
`;const u=({pos:e=""}={})=>`
${t()}
add([sprite('player'), anchor('center'), area(), body(), pos(${e}), 'player'])
`;const m=()=>`loadSprite('block', 'sprites/steel.png')`;const r=()=>`loadSprite('exit', 'sprites/door.png')`;const k=()=>`loadSprite('enemy', 'sprites/ghosty.png')`;const b=()=>`loadSprite('key', 'sprites/key.png')`;const t=()=>`loadSprite('player', 'sprites/bean.png')`;const x=()=>`loadSprite('spike', 'sprites/spike.png')`;export{u as a,g as b,c,b as d,y as e,p as f,x as g,m as h,k as i,n as j,t as k,r as l,i as m,d as r};
