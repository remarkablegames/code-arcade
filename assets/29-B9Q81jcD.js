import{l as s,a as o,e as a,r,c as t,f as i}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as n}from"./texts-D4Uwcsjn.js";const c=29;const l="Async/await";const m="Google Async/await";const e=Date.now();const w=`
${s()}

${o({pos:"100, 100"})}
${a({pos:"center()",obj:`{ promise: randi(2) ? Promise.resolve(${e}) : Promise.reject(${e}) }`})}

${r()}
${t(c)}
${i(e)}

${n("Bye Bye Bye")}
`;const $=`
/**
 * \`await\` pauses an async function execution and
 * waits for a Promise to resolve before continuing
 */

const key = get('key')[0]

async function main() {
  // password = resolved or rejected value of \`key.promise\`
  let password
  key.password = password
}

main()
`;export{m as hint,c as level,w as prescript,$ as script,l as title};
