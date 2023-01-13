const ogrenciler = new Map();
ogrenciler.set(1,'ali yilmaz') // key olarak herhangi bir türde bir değer girebiliriz. burada number girdik
ogrenciler.set('1234567890','efe can') //burada string girdik
ogrenciler.set(true,'ali yilmaz') //burada ise 
console.log(ogrenciler);

console.log(ogrenciler.get(1))
console.log(ogrenciler.get('1234567890'))
console.log(ogrenciler.get(true));

let sonuc;

sonuc = ogrenciler.size // 3 bilgisi gelecekrtir
sonuc = ogrenciler.has(1) // boalen türünde bir cevap gelir 1 keyine sahip bir value olup olmadığını söyler. 
// ogrenciler.delete(1); // 1 keyine sahip değeri siler

// ogrenciler.clear // liste üzerindeki tüm elemanları siler



//liste üzerindeki tüm key bilgilerine ulaşmak için
for (let x of ogrenciler.keys()) {
   console.log(x);
}

//liste üzerindeki tüm key bilgilerine karşılık gelen value bilgilerine ulaşmak için
for (let x of ogrenciler.values()) {
   console.log(x);
}

//liste üzerindeki tüm key ve value bilgilerine birlikte ulaşmak için
for (let x of ogrenciler.entries()) {
   console.log(x);
}

// entriesi şu şekilde de yapabilirz

for (let [key,value] of ogrenciler.entries()) {
   console.log(key,value);
}