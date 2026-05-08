import{c as e,h as t,i as n,m as r,p as i,r as a,t as o}from"./index-C2wpxjHL.js";var s=26,c=`Fullfilled Promise`,l=`key.promise.then(...)`,u=btoa(String(Date.now())),d=`
${e()}

${n({pos:`100, 100`})}
${a({pos:`center()`,obj:`{ promise: Promise.resolve('${u}') }`})}

${r()}
${t(26)}
${i(u)}

${o(`Pass the Promise`)}
`,f=`
/**
 * A Promise produces a value in the future
 * If a Promise succeeded, it will produce a resolved value
 */

const key = get('key')[0]

// set \`key.password\` to the resolved value of \`key.promise\`
key.promise
`;export{l as hint,s as level,d as prescript,f as script,c as title};