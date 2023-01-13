
//array destructuring
let user = ['ertan', 'uzunoglu','istanbul','avcılar'];

//let [firstName, lastName] = user;
let [firstName, lastName, city, town] = user;


console.log(firstName, lastName, city, town);

let [firstName2, lastName2, , town2] = user; // aradaki boşluk nedeniyle town2 yine avcılar olarak gelir.
console.log(firstName, lastName, town2)

let [firstName3, lastName3, ...address] = user
console.log(firstName, lastName, address);//sondaki adres rest operatörüyle birlikte istanbul avcılar olarak gelir.

let [firstName1, lastName1] = 'eren uzunoglu'.split(' ');
console.log(firstName1, lastName1)



//object destructuring
let urun = {
   marka: 'apple',
   model: 'iphone 12',
   fiyat: 2000,
   
}

let { marka, model, fiyat, satisDurumu = false } = urun; // eğer satış durumu diye bir bilgi yoksa satısDurumu false olarak gelir

console.log(marka, model, fiyat, satisDurumu);

// eğer biz bu bilgileri bir functionda kullanmak istersek

function urunGoster (marka, model,fiyat, satisDurumu = false ) {
   console.log(marka, model, fiyat, satisDurumu);
}

urunGoster('apple', 'iphone 12', 2000, true)

// yukarıdaki gibi function'ın içerisine objenin her elemanını yazmak yerine objeyi yazarak da kullanabiliriz.

function urunGoster2 (obj) {
   let { marka, model, fiyat, satisDurumu = false } = obj
   console.log(marka, model, fiyat, satisDurumu);
}
urunGoster2(urun)