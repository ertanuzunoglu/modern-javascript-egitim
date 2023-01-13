//ES5

function KisiES5 (ad, meslek, dogumYili) {
   this.ad = ad;
   this.meslek = meslek;
   this.dogumYili = dogumYili;
}

KisiES5.prototype.yasHesapla = function() {
   let tarih = new Date().getFullYear();
   return tarih - this.dogumYili;
}

let ertan = new KisiES5('ertan uzunoğlu', 'mühendis', 1992);
let eren = new KisiES5('eren uzunoğlu', 'mühendis', 1992);
let muhammet = new KisiES5('muhammet sarıalioğlu', 'mühendis', 1996);
console.log(ertan);
console.log(ertan.yasHesapla());

//ES6

class KisiES6 {
   constructor(ad,meslek,dogumYili) {
      this.ad = ad;
      this.meslek = meslek;
      this.dogumYili = dogumYili;
      console.log('nesne olusturuldu.')
   }

   yasHesapla () {
      let tarih = new Date().getFullYear();
      return tarih - this.dogumYili;
   }
}

let kisi1 = new KisiES6('ömer faruk uzunoğlu', 'çocuk', 2018)
console.log(kisi1)
console.log(kisi1.yasHesapla())