const a=(d,{pos:t=""}={})=>`
add([rect(width(), 32), color(0, 0, 0), pos(${t}), z(100)])
add([text(${JSON.stringify(d)}), pos(${t}), z(100)])
`;export{a};
