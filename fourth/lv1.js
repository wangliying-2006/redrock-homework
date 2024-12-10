// let mlt=new Object();
// mlt.meat=['鱼','培根','牛肉','鸡肉'];
// mlt.vegetable=['冬瓜','豆腐','花菜','白菜'];
// mlt.ingredient=['辣椒','盐','骨汤'];
// mlt.effect=function(){
//   console.log(this.ingredient[2]+'有助于美容养颜');
// };
// console.log(mlt);
// mlt.effect();

// let mlt={
//   meat:['鱼','培根','牛肉','鸡肉'],
//   vegetable:['冬瓜','豆腐','花菜','白菜'],
//   ingredient:['辣椒','盐','骨汤'],
//   effect(){
//     console.log(this.ingredient[2]+'有助于美容养颜');
//   },
// };

// console.log(mlt);
// mlt.effect();


function createMLT(meat,vegetable,ingredient){
  let obj=new Object();
  obj.meat=meat;
  obj.vegetable=vegetable;
  obj.ingredient=ingredient;
  obj.effect=function()
  {
    console.log(this.ingredient[1]+'有助于美容养颜');
  };
  return obj;
}
let meat1=['鱼','培根'];
let meat2=['牛肉','鸡肉'];
let vegetable1=['冬瓜','豆腐'];
let vegetable2=['花菜','白菜'];
let ingredient1=['辣椒','盐'];
let ingredient2=['骨汤','番茄'];
let mlt1=createMLT(meat1,vegetable1,ingredient1);
let mlt2=createMLT(meat2,vegetable2,ingredient2);
mlt1.effect();
mlt2.effect();