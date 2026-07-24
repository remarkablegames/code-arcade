import{n as e,r as t,s as n}from"./sprites-BBwFSzAc.js";import{t as r}from"./texts-BNBRxv-Z.js";import{i,n as a,r as o}from"./index-ByB9seIk.js";var s=26,c=`Fullfilled Promise`,l=`key.promise.then(...)`,u=btoa(String(Date.now())),d=`
${n()}

${t({pos:`100, 100`})}
${e({pos:`center()`,obj:`{ promise: Promise.resolve('${u}') }`})}

${o()}
${i(26)}
${a(u)}

${r(`Pass the Promise`)}
`,f=`
/**
 * A Promise produces a value in the future
 * If a Promise succeeded, it will produce a resolved value
 */

const key = get('key')[0]

// set \`key.password\` to the resolved value of \`key.promise\`
key.promise
`;export{l as hint,s as level,d as prescript,f as script,c as title};