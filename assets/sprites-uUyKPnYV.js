import{G as a}from"./index-DhYtdT-E.js";const s=(e=320)=>`
onKeyDown((key) => {
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
`;const o=e=>`
onCollide('player', 'exit', () => {
  parent.postMessage({
    source: '${a}',
    level: ${e+1},
  })
})
`;const t=()=>`loadSprite('exit', 'sprites/door.png')`;const l=()=>`loadSprite('player', 'sprites/bean.png')`;export{t as a,o as b,l,s as r};
