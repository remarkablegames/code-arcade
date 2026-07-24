import{i as e,r as t,t as n}from"./sprites-BBwFSzAc.js";import{t as r}from"./texts-BNBRxv-Z.js";import{i,r as a}from"./index-ByB9seIk.js";var o=20,s=`Properties`,c=`Edit the body's mass`,l=1e3,u=`
${e()}
${t({pos:`95, 100`})}
${n()}

${a()}
${i(20)}

${r(`Sokoban`)}

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