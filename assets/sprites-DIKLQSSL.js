import{G as a}from"./index-U8zA4yR0.js";const r=(e=320)=>`
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
`;const s=e=>`
loadSound('exit', 'sounds/wooosh.mp3')

onCollide('player', 'exit', () => {
  play('exit')

  wait(0.2, () => {
    window.parent.postMessage({
      source: '${a}',
      level: ${e+1},
    })
  })
})
`;const t=()=>`loadSprite('exit', 'sprites/door.png')`;const l=()=>`loadSprite('player', 'sprites/bean.png')`;export{t as a,s as b,l,r};
