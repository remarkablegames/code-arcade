import{i as t,a as e,b as o,d as i,c as a}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as s}from"./texts-D4Uwcsjn.js";const n=21;const c="Methods";const m="Call the methods in a for loop";const d=`
${t()}
${e({pos:"95, 100"})}
${o()}

${i()}
${a(n)}

${s("Exit the maze")}

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
`;const h=`
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
`;const v=`
get('exit')[0]?.moveTo(95, 480)
`;export{m as hint,n as level,v as postscript,d as prescript,h as script,c as title};
