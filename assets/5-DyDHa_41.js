import{l as e,a as t,r,b as a}from"./sprites-CZYdguN4.js";import"./index-x1ppZCB-.js";const s=5;const l="Booleans";const n=`
${e()}
${t()}

const player = add([sprite('player'), pos(center()), area(), 'player'])

${r()}
${a(s)}

add([text('Exit is not truthy')])
`;const p=`
/**
 * Booleans can either be true or false
 */

if (false) {
  add([
    sprite('exit'),
    area(),
    'exit',
  ])
}
`;export{s as level,n as prescript,p as script,l as title};
