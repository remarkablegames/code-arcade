import{n as e,r as t,s as n}from"./sprites-BBwFSzAc.js";import{t as r}from"./texts-BNBRxv-Z.js";import{i,n as a,r as o}from"./index-ByB9seIk.js";var s=29,c=`Async/await`,l=`Google Async/await`,u=Date.now(),d=`
${n()}

${t({pos:`100, 100`})}
${e({pos:`center()`,obj:`{ promise: randi(2) ? Promise.resolve(${u}) : Promise.reject(${u}) }`})}

${o()}
${i(29)}
${a(u)}

${r(`Bye Bye Bye`)}
`,f=`
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
`;export{l as hint,s as level,d as prescript,f as script,c as title};