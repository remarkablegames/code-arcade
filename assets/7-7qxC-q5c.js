import{a as e,h as t,i as n,m as r,n as i,t as a}from"./index--3CafFNT.js";var o=7,s=`Arrays`,c=`Edit the map`,l=`
${e()}
${n({pos:`center()`})}
${i({pos:`550, 550`})}

${r()}
${t(7)}

${a(`Trapped in arrays`)}

onUpdate(() => {
  const map = get('map')[0]
  if (!map?.map?.length) {
    throw new Error('Map must be valid')
  }
})
`,u=`
/**
 * An array is an ordered list of data
 */

const map = [
  '#######',
  '#     #',
  '#     #',
  '#     #',
  '#     #',
  '#######',
]

map.push(map[0])

add(['map', { map }])
`,d=`
addLevel(get('map')[0].map, {
  tileWidth: 64,
  tileHeight: 64,
  pos: vec2(64, 64),
  tiles: {
    '#': () => [
      sprite('block'),
      area(),
      body({ isStatic: true }),
    ],
  }
})
`;export{c as hint,o as level,d as postscript,l as prescript,u as script,s as title};