import{i as e,r as t,t as n}from"./sprites-BBwFSzAc.js";import{t as r}from"./texts-BNBRxv-Z.js";import{i,t as a}from"./index-ByB9seIk.js";var o=21,s=`Methods`,c=`Call the methods in a for loop`,l=`
${e()}
${t({pos:`95, 100`})}
${n()}

${a()}
${i(21)}

${r(`Exit the maze`)}

const player = get('player')[0]
player.moveTo = () => {}

const map = [
  '#########',
  '#       #',
  '####### #',
  '#       #',
  '# #######',
  '#       #',
  '####### #',
  '#       #',
  '#########',
]

addLevel(map, {
  tileWidth: 64,
  tileHeight: 64,
  tiles: {
    '#': () => [
      sprite('block'),
      area(),
      body({ isStatic: true }),
    ],
  }
})
`,u=`
/**
 * A method is a function defined within an object
 */

const player = get('player')[0]
const SPEED = 300

player.moveUp = function() { this.move(0, -SPEED) }
player.moveLeft = function() { this.move(-SPEED, 0) }
player.moveDown = function() { this.move(0, SPEED) }
player.moveRight = function() { this.move(SPEED, 0) }

player.moveRight()
`,d=`
get('exit')[0]?.moveTo(95, 480)
`;export{c as hint,o as level,d as postscript,l as prescript,u as script,s as title};