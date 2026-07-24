import{i as e,r as t,t as n}from"./sprites-BBwFSzAc.js";import{t as r}from"./texts-BNBRxv-Z.js";import{i,r as a}from"./index-ByB9seIk.js";var o=7,s=`Arrays`,c=`Edit the map`,l=`
${e()}
${t({pos:`center()`})}
${n({pos:`550, 550`})}

${a()}
${i(7)}

${r(`Trapped in arrays`)}

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