import{l as e,a as o,b as s}from"./sprites-CZS14QdD.js";import"./index-BsPrIeLj.js";import{a as t}from"./texts-qyIFEy4l.js";const r=8;const l="Objects";const n=`
${e()}
${o()}

const player = add([sprite('player'), pos(0, 36), area(), body(), 'player'])
add([sprite('exit'), pos(516, 516), area(), 'exit'])

onKeyPress(() => {
  debug.log('Keypress disabled!')
})

${s(r)}

${t("Reposition me")}
`;const c=`
/**
 * An object is a collection of properties (key-value pairs)
 */

const coordinates = {
  x: 0,
  y: 36,
}

const player = get('player')[0]
player.pos.x = coordinates.x
player.pos.y = coordinates.y
`;export{r as level,n as prescript,c as script,l as title};
