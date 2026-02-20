import{l as o,a as s,e as r,r as t,c as a,f as i}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as c}from"./texts-D4Uwcsjn.js";const n=28;const l="Promise methods";const y="key.promise.then(...).catch(...)";const e=Date.now();const $=`
${o()}

${s({pos:"100, 100"})}
${r({pos:"center()",obj:`{ promise: randi(2) ? Promise.resolve(${e}) : Promise.reject(${e}) }`})}

${t()}
${a(n)}
${i(e)}

${c("then or catch")}
`;const h=`
const key = get('key')[0]

// set \`key.password\` to the resolved or rejected value of \`key.promise\`
key.promise
`;export{y as hint,n as level,$ as prescript,h as script,l as title};
