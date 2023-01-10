// OOP: Nesne Tabanlı Programlama
// Object


function Soru (soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabıKontrolEt = function (cevap) {
        return cevap === this.dogruCevap;
    }

let soru1 = new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
let soru2 = new Soru("Hangisi .net paket yönetim uygulasıdır?", { a: "Node.js", b: "Nuget", c: "Npm" }, "b")

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("2-Hangisi js paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("3-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("4-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
]

function Quiz (questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.soruGetir = function () {
    return this.questions[this.questionIndex];
}

const quiz = new Quiz(sorular);

document.querySelector('.btn-start').addEventListener('click', function () {
    if (quiz.questions.length != quiz.questionIndex) {  
        console.log(quiz.soruGetir());
        quiz.questionIndex += 1; 
    } else {
        console.log('quiz bitti')
    }
})