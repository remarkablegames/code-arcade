import{l as e,a as t,d as o,r,c as a,e as d}from"./sprites-D7iR-17N.js";import"./index-CqD0C-zF.js";import{a as c}from"./texts-D4Uwcsjn.js";const s="swordfish";const i=25;const l="fetch";const w="Google JavaScript Fetch API";const f=`
${e()}

${t({pos:"100, 100"})}
${o({pos:"center()",obj:JSON.stringify({password:s})})}

${r()}
${a(i)}
${d(s)}

${c("Fetch the password")}
`;const m=`
/**
 * fetch() makes a request for a resource
 */

const key = get('key')[0]

// GET the password from "/data/password.json"
let password

key.password = password
`;export{w as hint,i as level,f as prescript,m as script,l as title};
