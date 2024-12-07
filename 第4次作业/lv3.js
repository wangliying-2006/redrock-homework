var a = {n:1}
var b = a
a.x = a = {n:2}//.的运算优先级高于=

console.log(a)
console.log(b)
a.n = 3
console.log(b)
//知识点参考引用值的复制