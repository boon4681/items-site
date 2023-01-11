// export const js =
// `let url = 'https://items.boon4681.com/flower/{version}/all.json'
// let data = await fetch(url).then((res)=>{
//     return res.text()
// })
// console.log(data)
// `
export const js =
`let url = 'https://raw.githubusercontent.com/boon4681/itemsflower/{version}/all.json'
let data = await fetch(url).then((res)=>{
    return res.text()
})
console.log(data)
`

// export const py =
// `import request
// url = 'https://items.boon4681.com/flower/{version}/all.json'
// data = request.get(url)
// print(url)
// `
export const py =
`import request
url = 'https://raw.githubusercontent.com/boon4681/itemsflower/{version}/all.json'
data = request.get(url)
print(url)
`