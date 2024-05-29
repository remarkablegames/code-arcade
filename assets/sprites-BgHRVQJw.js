const a=(e=320)=>`
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
`;const r=e=>`
onCollide('player', 'exit', () => {
  parent.postMessage({
    source: ${JSON.stringify("code-arcade")},
    level: ${e+1},
  })
})
`;const s=`loadSprite('exit', 'sprites/door.png')`;const o=`loadSprite('player', 'sprites/bean.png')`;export{s as a,r as b,o as l,a as r};
