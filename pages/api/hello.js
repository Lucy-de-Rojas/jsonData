// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const names = [{
  name: "lucy",
  age: 35
}, {name: "papa",
age: 36},
{name: "benji",
age: 13},{name:"babicka", age: 44},
{name: "dairy", age: 2},
{name: "don qui", age: 16}]



export default function handler(req, res) {
  res.status(200).json(names)
}





// export default function handler(req, res) {
//   res.status(200).json({ name: 'Lucy',
// age: 35})
// }
