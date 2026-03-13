import{a as e,h as t,i as n,m as r,n as i,t as a}from"./index--3CafFNT.js";var o=20,s=`Properties`,c=`Edit the body's mass`,l=1e3,u=`
${e()}
${n({pos:`95, 100`})}
${i()}

${r()}
${t(20)}

${a(`Sokoban`)}

const player = get('player')[0]
player.moveTo = () => {}

const map = [
  '###########',
  '###########',
  '##       ##',
  '######## ##',
  '##       ##',
  '###########',
  '##     ####',
  '## ####  ##',
  '##    #  ##',
  '###########',
  '###########',
]

const tileSize = 64

const level = addLevel(map, {
  tileWidth: tileSize,
  tileHeight: tileSize,
  pos: vec2(-tileSize, -tileSize),
  tiles: {
    '#': () => [
      sprite('block'),
      area(),
      body({ mass: ${l} }),
      'block'
    ],
  }
})

onUpdate(() => {
  level.get('block').forEach((block) => {
    if (block.mass < 1) {
      throw new Error('Block mass cannot be less than 1')
    }
  })
})
`,d=`
/**
 * A property is an association between an object key and its value
 */

onCollide('block', 'player', (block) => {
  block.mass = ${l}
})
`,f=`
get('exit')[0]?.moveTo(480, 480)
`;export{c as hint,o as level,f as postscript,u as prescript,d as script,s as title};