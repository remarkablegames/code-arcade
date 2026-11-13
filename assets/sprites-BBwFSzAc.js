var e=({pos:e=``}={})=>`
${a()}
add([
  sprite('exit'),
  anchor('center'),
  area({ scale: 0.7, offset: vec2(0, 10) }),
  pos(${e}),
  'exit',
])
`,t=({pos:e=``,obj:t=``}={})=>`
${s()}
add([
  sprite('key'),
  anchor('center'),
  area(),
  pos(${e}),
  'key',
  ${t},
])
`,n=({pos:e=``}={})=>`
${c()}
add([
  sprite('player'),
  anchor('center'),
  area({ scale: 0.9 }),
  body(),
  pos(${e}),
  'player',
])
`,r=()=>`loadSprite('block', 'sprites/steel.png')`,i=()=>`loadSprite('egg', 'sprites/egg.png')`,a=()=>`loadSprite('exit', 'sprites/door.png')`,o=()=>`loadSprite('enemy', 'sprites/ghosty.png')`,s=()=>`loadSprite('key', 'sprites/key.png')`,c=()=>`loadSprite('player', 'sprites/bean.png')`,l=()=>`loadSprite('spike', 'sprites/spike.png')`;export{i as a,s as c,r as i,c as l,t as n,o,n as r,a as s,e as t,l as u};