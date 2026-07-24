import{n as e,r as t,s as n}from"./sprites-BBwFSzAc.js";import{t as r}from"./texts-BNBRxv-Z.js";import{i,n as a,r as o}from"./index-ByB9seIk.js";var s=28,c=`Promise methods`,l=`key.promise.then(...).catch(...)`,u=Date.now(),d=`
${n()}

${t({pos:`100, 100`})}
${e({pos:`center()`,obj:`{ promise: randi(2) ? Promise.resolve(${u}) : Promise.reject(${u}) }`})}

${o()}
${i(28)}
${a(u)}

${r(`then or catch`)}
`,f=`
const key = get('key')[0]

// set \`key.password\` to the resolved or rejected value of \`key.promise\`
key.promise
`;export{l as hint,s as level,d as prescript,f as script,c as title};