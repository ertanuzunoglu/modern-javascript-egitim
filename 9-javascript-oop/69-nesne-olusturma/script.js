// OOP: Nesne Tabanlı Programlama
// Object

// let soru = {
//     soruMetni: "Hangisi javascript paket yönetim uygulasıdır?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm"
//     },
//     dogruCevap: "c",
//     cevabiKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap
//     }
// }





// let soru2 = {
//     soruMetni: "Hangisi .net paket yönetim uygulasıdır?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "nuget",
//         c: "Npm"
//     },
//     dogruCevap: "b",
//     cevabiKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap
//     }
// }

// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7

function Soru (soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    this.cevabıKontrolEt = function (cevap) {
        return cevap === this.dogruCevap;
    }
}

let soru1 = new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
let soru2 = new Soru("Hangisi .net paket yönetim uygulasıdır?", { a: "Node.js", b: "Nuget", c: "Npm" }, "b")

let sorular = [
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi js paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
]

console.log(sorular[0].soruMetni);
console.log(soru1.cevabıKontrolEt('c'));

//dizideki her sorunun soru metnini consolea yazdıralım.

for (let s of sorular) {
    console.log(s.soruMetni)
}

