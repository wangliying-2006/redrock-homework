
let obj = new Object();
obj.name = 'BBH';
obj.age = '30';
console.log(obj);
/*对象字面量*/
let obj = {
    name: 'BBH',
    age: '30'
}
console.log(obj); 
/*构造函数*/
function Person(name, age) {
    this.name = name
    this.age  = age
    this.sayname = () => {
      console.log(this.name)
    }
  }
  const p1 = new Person('BBH', 30)
  const p2 = new Person('star', 19)