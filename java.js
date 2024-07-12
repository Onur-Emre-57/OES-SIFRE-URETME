let button = document.querySelector("#button");
let isim = document.getElementById("ad");
let soyisim = document.getElementById("soyad");
let sifre = document.querySelector("#şifre");

function pasaport() {
  let nameSurname = isim.value + soyisim.value;
  let dizi = nameSurname.split("");
  let olusanSifre = "";
  console.log(dizi);

  for (let i = 0; i < 5; i++) {
    let random = Math.floor(Math.random() * nameSurname.length);
    olusanSifre += dizi[random];
  }
  let sonuc = "";
  for (let i = 0; i < 3; i++) {
    let randomSayi = Math.floor(Math.random() * 10);
    sonuc += randomSayi;
  }

  let birlesim = sonuc + olusanSifre;
  console.log(birlesim);

  sifre.value = birlesim;

  isim.value = "";
  soyisim.value = "";

  isim.focus();
}

button.addEventListener("click", () => {
  pasaport();
});
