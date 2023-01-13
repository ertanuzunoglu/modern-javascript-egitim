const msj = ['benim','adim','ertan','uzunoglu'];

let sonuc = '';

for (let x of msj){
   sonuc += x + ' ';
}

console.log(sonuc);

//yukarida yaptığımız işlemleri ... operatörüyle tek satırda yapabiliriz.

console.log(...msj);




const dizi1 = ['bir','iki']
const dizi2 = ['üç','dört'];
//dizi1 ve dizi2'yi birleştirmek için de ... operatörünü kullanabiliriz.
const dizi3 = [...dizi1, ...dizi2, 'beş', 'altı'];
console.log(dizi3);





const sayilar1 = [1,2,3];
const sayilar2 = sayilar1;
sayilar2[0] = 10;
console.log(sayilar1,sayilar2); 

// burada sayilar2 nin 0. indexinin değerini 10 olarak değiştirdiğimizde sayilar1'in 0. elemanı da 10 olarak değişir. biz kopyalama işlemini ... operatörü ile yaptığımızda değerleri kopyalamış olacağız. böylelikle sayilar1 ya da sayilar2 dizilerinden herhangi birinde yapılan bir değişiklik diğer diziyi etkilemeyecektir. yukarıyı yorum satırı yapalım.

const sayilar3 = [1,2,3];
const sayilar4 = [...sayilar3];
sayilar4[0] = 10;
console.log(sayilar3,sayilar4); 


//aynısını objelerde de yapabiliriz.

const user = {
   username:'ertan',
   email:'ertanuzunogl@gmail.com'
}

const adres = {
   username:'abc',
   city: 'istanbul'
}
//ikisinde de user name bilgisi var. fakat son objenin user namei ezer ve abc yazdırır

console.log({...user, ...adres})


//spread operatörleri fonksiyonlar içerisinde de kullanabiliriz. buna rest parameters denir.

// bir toplam fonsiyonu oluşturduk. burada amacımız değişken sayıda parametre göndersek bile toplama işlemini yapmasını istiyoruz.
function toplam(...args) {
   let sonuc = 0;
   for(let sayi of args) {
      sonuc +=sayi;
   }
   return sonuc
}
console.log(toplam(1,2,3,4,5));
console.log(toplam(6,26,5))

function bilgileriGoster(isim,soyad, ...adres) {
   console.log(isim,soyad,adres);
}

bilgileriGoster('ertan','uzunoglu','istanbul','avcılar','komiser sokak')