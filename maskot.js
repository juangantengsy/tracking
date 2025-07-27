const maskotTexts = [
  "Halo rek, piye kabare? 😊",
  "Ojo lali mangan yo! 🍜",
  "Sing sabar yo le... 🙏",
  "Wes wayahe ngopi, rek! ☕",
  "Piye, wis siap-siap durung? 🚀",
  "Monggo dipun cek website iki! 😉",
  "Ojo lali ngguyu ben awet enom 😁",
  "Wes ngombe to? Aja nganti ngelak lho! 🥤",
  "Yo wis, ngene wae sek! 🙌"
];

function randomMaskotTalk() {
  const maskotElement = document.getElementById("maskotText");
  if (maskotElement) {
    const randomIndex = Math.floor(Math.random() * maskotTexts.length);
    maskotElement.textContent = maskotTexts[randomIndex];
  }
}

// Ubah teks setiap 5 detik
setInterval(randomMaskotTalk, 5000);
