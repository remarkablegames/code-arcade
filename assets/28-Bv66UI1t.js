import{c as e,h as t,i as n,m as r,p as i,r as a,t as o}from"./index--3CafFNT.js";var s=28,c=`Promise methods`,l=`key.promise.then(...).catch(...)`,u=Date.now(),d=`
${e()}

${n({pos:`100, 100`})}
${a({pos:`center()`,obj:`{ promise: randi(2) ? Promise.resolve(${u}) : Promise.reject(${u}) }`})}

${r()}
${t(28)}
${i(u)}

${o(`then or catch`)}
`,f=`
const key = get('key')[0]

// set \`key.password\` to the resolved or rejected value of \`key.promise\`
key.promise
`;export{l as hint,s as level,d as prescript,f as script,c as title};