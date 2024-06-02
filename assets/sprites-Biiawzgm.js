import{G as o}from"./index-D6DF_Sn_.js";const s=()=>`loadSound('blip', 'sounds/blip.mp3')`;const p=()=>`loadSound('hit', 'sounds/hit.mp3')`;const a=()=>`loadSound('powerup', 'sounds/powerup.mp3')`;const i=()=>`
onKeyPress(() => {
  debug.log('Key press disabled!')
})

onMousePress(() => {
  debug.log('Mouse press disabled!')
})
`;const n=(e=320)=>`
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
`;const d=e=>`
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
`;const y=e=>`
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
`;const c=({pos:e=""}={})=>`
${r()}
add([
  sprite('exit'),
  anchor('center'),
  area({ scale: 0.7, offset: vec2(0, 10) }),
  pos(${e}),
  'exit',
])
`;const g=({pos:e=""}={})=>`
${t()}
add([
  sprite('player'),
  anchor('center'),
  area({ scale: 0.9 }),
  body(),
  pos(${e}),
  'player',
])
`;const u=()=>`loadSprite('block', 'sprites/steel.png')`;const r=()=>`loadSprite('exit', 'sprites/door.png')`;const k=()=>`loadSprite('enemy', 'sprites/ghosty.png')`;const m=()=>`loadSprite('key', 'sprites/key.png')`;const t=()=>`loadSprite('player', 'sprites/bean.png')`;const b=()=>`loadSprite('spike', 'sprites/spike.png')`;export{g as a,c as b,y as c,m as d,d as e,p as f,b as g,u as h,k as i,i as j,t as k,r as l,n as r};
