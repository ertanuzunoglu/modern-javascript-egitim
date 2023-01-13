//Kisi = k1,k2;
//Ogrenci = o1,o2;
//Ogretmen = 

//Parent Sınıf 
class Kisi {
   constructor(ad, dogumYili) {
      console.log('kisi constructor')
      this.ad = ad;
      this.dogumYili = dogumYili;
   }
   yasHesapla () {
      let tarih = new Date().getFullYear();
      return tarih - this.dogumYili;
   }

   kendiniTanit () {
      return `Benim adım ${this.ad}.`
   }
}


//Child Sınıf
class Ogrenci extends Kisi  {
   constructor(ad, dogumYili, okulNo) {
      console.log('ogrenci constructor')
      super(ad, dogumYili);
      this.okulNo = okulNo;
   }

   kendiniTanit () {
      return `Benim adım ${this.ad}. ${this.dogumYili} yılında doğdum`
   }
}

let kisi = new Kisi('ertan', 1992);
let ogrenci = new Ogrenci('ali', 1996, 6123);

console.log(kisi.yasHesapla());
console.log(ogrenci.yasHesapla());// Ogrenci classı içersinde bir yas hesaplama olmamasına rağmen Ogrenci classında Kisiyi extend ettiğimiz için yas hesaplama fonksiyonu calısır.

console.log(ogrenci.kendiniTanit());

//kendini tanıt fonksiyonu öğrenci içerisinde de tanımlanırsa Ogrenci üzerinden bu fonksiyonu çağırdığımızda Ogrenci içerisindeki fonksiyon Kisi içerisindekini zer