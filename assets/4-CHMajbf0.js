import{l as e,a as t,r,b as a}from"./sprites-Bgw52aqI.js";const s=4;const i="Booleans";const l=`
${e()}
${t()}

const player = add([sprite('player'), pos(center()), area(), 'player'])

${r()}
${a(s)}

add([text('Exit is not truthy')])
`;const n=`
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
`;export{s as level,l as prescript,n as script,i as title};
