const backgroundDiv = document.getElementById("backgroundDiv");
const gambarArray = [
  "https://cdn.usegalileo.ai/sdxl10/17fcbbc6-9ce0-45b0-901d-0a99ade86d63.png",
  "https://cdn.usegalileo.ai/sdxl10/another-image-url.png", // Ganti dengan URL gambar yang lain
  "https://cdn.usegalileo.ai/sdxl10/yet-another-image-url.png", // Ganti dengan URL gambar yang lain
];

let indeksGambar = 0;

function gantiGambar() {
  indeksGambar = (indeksGambar + 1) % gambarArray.length;
  backgroundDiv.style.backgroundImage = `
                linear-gradient(
                    rgba(0, 0, 0, 0.1) 0%,
                    rgba(0, 0, 0, 0.4) 100%
                ),
                url('${gambarArray[indeksGambar]}')
            `;
}

// Ganti gambar setiap 5 detik (5000 milidetik)
setInterval(gantiGambar, 5000);
