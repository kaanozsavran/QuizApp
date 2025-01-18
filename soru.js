function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("1-Hangisi JavaScript paket yönetim uygulamasıdır?", { a: "Node.js", b: "nuget", c: "npm", d: "pip" }, "c"),
    new Soru("2-Python ile yazılmış bir web framework hangisidir?", { a: "Django", b: "React", c: "Laravel", d: "Spring" }, "a"),
    new Soru("3-Hangisi CSS kütüphanesidir?", { a: "Bootstrap", b: "Express", c: "JQuery", d: "Vue.js" }, "a"),
    new Soru("4-Hangisi NoSQL veritabanıdır?", { a: "PostgreSQL", b: "MongoDB", c: "MySQL", d: "OracleDB" }, "b"),
    new Soru("5-Git komutlarından biri olmayan hangisidir?", { a: "git commit", b: "git fetch", c: "git merge-files", d: "git push" }, "c"),
    new Soru("6-Hangisi bir IDE değildir?", { a: "Eclipse", b: "VSCode", c: "Linux", d: "PyCharm" }, "c"),
    new Soru("7-JavaScript'te veri tipi olmayan hangisidir?", { a: "String", b: "Number", c: "Undefined", d: "Class" }, "d"),
    new Soru("8-Hangisi front-end geliştirme teknolojisidir?", { a: "Angular", b: "Node.js", c: "Flask", d: "Django" }, "a"),
    new Soru("9-Hangisi bir HTTP durumu kodudur?", { a: "200", b: "500", c: "404", d: "Hepsi" }, "d"),
    new Soru("10-Hangisi bir derleyicidir?", { a: "GCC", b: "GitHub", c: "Jenkins", d: "VSCode" }, "a"),


];