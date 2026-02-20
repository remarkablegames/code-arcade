import{G as o}from"./index-DyPD81_A.js";const a=()=>`loadSound('blip', 'sounds/blip.mp3')`;const n=()=>`loadSound('hit', 'sounds/hit.mp3')`;const r=()=>`loadSound('powerup', 'sounds/powerup.mp3')`;const i=()=>`
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
  get('player')[0]?.moveTo(mousePos(), ${e})
})
`;const c=e=>`
${a()}
${r()}

onCollide('key', 'player', (key) => {
  const password = ${JSON.stringify(e)}

  if (key.password === password) {
    play('powerup', { volume: 0.5 })
    key.destroy()
    add([sprite('exit'), pos(500, 500), area(), 'exit'])
    return
  }

  if (typeof key.password !== typeof password) {
    debug.log('Password should be a ' + typeof password)
  } else {
    debug.log('Incorrect password')
  }

  play('blip', { volume: 0.5 })
})
`;const g=e=>`
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
`;const u=({pos:e=""}={})=>`
${t()}
add([
  sprite('exit'),
  anchor('center'),
  area({ scale: 0.7, offset: vec2(0, 10) }),
  pos(${e}),
  'exit',
])
`;const k=({pos:e="",obj:s=""}={})=>`
${p()}
add([
  sprite('key'),
  anchor('center'),
  area(),
  pos(${e}),
  'key',
  ${s},
])
`;const w=({pos:e=""}={})=>`
${l()}
add([
  sprite('player'),
  anchor('center'),
  area({ scale: 0.9 }),
  body(),
  pos(${e}),
  'player',
])
`;const b=()=>`loadSprite('block', 'sprites/steel.png')`;const m=()=>`loadSprite('egg', 'sprites/egg.png')`;const t=()=>`loadSprite('exit', 'sprites/door.png')`;const $=()=>`loadSprite('enemy', 'sprites/ghosty.png')`;const p=()=>`loadSprite('key', 'sprites/key.png')`;const l=()=>`loadSprite('player', 'sprites/bean.png')`;const x=()=>`loadSprite('spike', 'sprites/spike.png')`;export{w as a,u as b,g as c,i as d,k as e,c as f,n as g,x as h,b as i,$ as j,p as k,t as l,l as m,m as n,y as r};
