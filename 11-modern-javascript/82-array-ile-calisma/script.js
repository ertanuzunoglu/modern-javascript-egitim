const sayilar = [1, 4, 5, 8, 2, 9, 4, 3];

// const tekSayilar = [];
// for (let sayi of sayilar) {
//    if (sayi % 2 == 1) {
//       tekSayilar.push(sayi)
//    }
// }

// yukarıdaki kodu aşağıdaki şekilde de yazabiliriz.

//const tekSayiKontrol = (sayi) => sayi % 2 == 1
//const tekSayilar = sayilar.filter(tekSayiKontrol);

//daha da kolaylaştırabiliriz.

const tekSayilar = sayilar.filter(sayi => sayi % 2 == 1);
//burada filter yerine map metodunu kullanırsak her eleman için içerideki şarta uyup uymadığını bize verir. bunun için bir tekSayilar2 diye bir değişken tanımlayalım.

const tekSayilar2 = sayilar.map(sayi => sayi % 2 == 1);

console.log(tekSayilar);
console.log(tekSayilar2);

const urunler = [
   { urunAdi: 'TV', fiyat: 10000 },
   { urunAdi: 'PC', fiyat: 12000 },
   { urunAdi: 'TELEFON', fiyat: 15000 },
   { urunAdi: 'KİTAP', fiyat: 100 }
]

let sonuc = urunler.map(urun => urun.fiyat) // tüm ürünlerin fiyatını bize verir. fiyatı 12000'den büyükleri istiyorsak filter kullanmamız gerekiyor.

sonuc = urunler.filter(urun => urun.fiyat >= 10000).map(urun => urun.fiyat);

console.log(sonuc);

sonuc = urunler.find(urun => urun.fiyat > 10000);// filterdan farklı olarak bulduğu ilk değeri getirir. filter şarta uyan tüm değerleri getirir.
console.log(sonuc);

sonuc = urunler.findIndex(urun => urun.fiyat >10000);// findden farklı olarak o ürünün index bilgisini bize verir.
console.log(sonuc);


