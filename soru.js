function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap;
}

let sorular = [
    new Soru("1-Hangisi js paket yönetim uygulamasıdır?", { a: "Node.js", b: "nuget", c: "npm" }, "c"),
    new Soru("2-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "nuget", c: "npm" }, "c"),
    new Soru("3-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "nuget", c: "npm" }, "c"),
    new Soru("4-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "nuget", c: "npm" }, "c"),

];