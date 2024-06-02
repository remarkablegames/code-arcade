import{G as s}from"./index-DHW99aeY.js";const a=()=>`loadSound('blip', 'sounds/blip.mp3')`;const n=()=>`loadSound('hit', 'sounds/hit.mp3')`;const r=()=>`loadSound('powerup', 'sounds/powerup.mp3')`;const d=()=>`
onKeyPress(() => {
  debug.log('Key press disabled!')
})

onMousePress(() => {
  debug.log('Mouse press disabled!')
})
`;const y=(e=320)=>`
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
`;const c=e=>`
${a()}
${r()}

onCollide('key', 'player', (key) => {
  if (key.password === ${JSON.stringify(e)}) {
    play('powerup', { volume: 0.5 })
    key.destroy()
    add([sprite('exit'), pos(500, 500), area(), 'exit'])
  } else {
    play('blip', { volume: 0.5 })
    debug.log('Incorrect password')
  }
})
`;const g=e=>`
loadSound('exit', 'sounds/wooosh.mp3')

onCollide('player', 'exit', () => {
  play('exit')

  wait(0.2, () => {
    window.parent.postMessage({
      source: '${s}',
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
`;const u=({pos:e=""}={})=>`
${t()}
add([
  sprite('exit'),
  anchor('center'),
  area({ scale: 0.7, offset: vec2(0, 10) }),
  pos(${e}),
  'exit',
])
`;const k=({pos:e="",obj:o=""}={})=>`
${l()}
add([
  sprite('key'),
  anchor('center'),
  area(),
  pos(${e}),
  'key',
  ${o},
])
`;const m=({pos:e=""}={})=>`
${p()}
add([
  sprite('player'),
  anchor('center'),
  area({ scale: 0.9 }),
  body(),
  pos(${e}),
  'player',
])
`;const b=()=>`loadSprite('block', 'sprites/steel.png')`;const t=()=>`loadSprite('exit', 'sprites/door.png')`;const $=()=>`loadSprite('enemy', 'sprites/ghosty.png')`;const l=()=>`loadSprite('key', 'sprites/key.png')`;const p=()=>`loadSprite('player', 'sprites/bean.png')`;const w=()=>`loadSprite('spike', 'sprites/spike.png')`;export{m as a,u as b,g as c,k as d,c as e,n as f,w as g,b as h,$ as i,l as j,d as k,t as l,p as m,y as r};
