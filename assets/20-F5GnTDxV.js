import{i as t,a as o,b as s,r as a,c as i}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as l}from"./texts-D4Uwcsjn.js";const r=20;const d="Properties";const m="Edit the body's mass";const e=1e3;const b=`
${t()}
${o({pos:"95, 100"})}
${s()}

${a()}
${i(r)}

${l("Sokoban")}

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
      body({ mass: ${e} }),
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
`;const k=`
/**
 * A property is an association between an object key and its value
 */

onCollide('block', 'player', (block) => {
  block.mass = ${e}
})
`;const y=`
get('exit')[0]?.moveTo(480, 480)
`;export{m as hint,r as level,y as postscript,b as prescript,k as script,d as title};
