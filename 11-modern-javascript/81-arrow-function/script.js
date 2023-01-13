//ES5

// function selamlama () {
//    console.log('merhaba');
// }

var selamlamaES5 = function (isim) {
   console.log('merhaba ' + isim)
}
selamlamaES5('ali')

// ES6 = ARROW FONCTİON
const selamlamaES6 = (isim) => console.log('merhaba ' + isim)


selamlamaES6('ahmet')



//ES5 
var toplamES5 = function (a, b) {
   return a + b;
}

var sonuc = toplamES5(10, 20);
console.log(sonuc);

//ES6 

const toplamES6 = (a, b) => a + b
let sonuc2 = toplamES6(20, 50);
console.log(sonuc2)