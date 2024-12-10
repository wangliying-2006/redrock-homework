const person = {
    name: '佐科姐姐',
    age: 1000000,
    address: {
      city: 'ChongQing',
      area: 'NanShan'
    },
    title: ['student', { year: 2022, title: 'GoodStudent' }]
  };
  
  // 解构person对象
  const {
    name,
    age,
    address: { city, area: mountain },
    title: [title1, { year, title: title2 }]
  } = person;
  
  // 打印结果
  console.log(name); // 佐科姐姐
  console.log(age); // 1000000
  console.log(city); // ChongQing
  console.log(mountain); // NanShan
  console.log(title1); // student
  console.log(title2); // GoodStudent
