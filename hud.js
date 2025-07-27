// =====================================================
// EVENT UNTUK TOMBOL HUD
// =====================================================
document.querySelectorAll(".hud-btn").forEach(button => {
  button.addEventListener("click", () => {
    const action = button.textContent;
    showPanel(action);
  });
});

// =====================================================
// SHOW PANEL SESUAI MENU
// =====================================================
function showPanel(type) {
  const hudPanels = document.getElementById("hud-panels");

  // Jika bukan HACKER GRID, buat panel dengan struktur default
  if (type !== "HACKER GRID" && !document.querySelector(`.panel-${type}`)) {
    const panel = document.createElement("div");
    panel.className = `hud-panel panel-${type}`;
    panel.innerHTML = `<h3>${type}</h3><div class="panel-content"></div>`;
    hudPanels.appendChild(panel);

    // Posisi acak
    panel.style.position = "absolute";
    panel.style.top = `${Math.random() * 60 + 10}%`;
    panel.style.left = `${Math.random() * 60 + 10}%`;

    // Konten setiap panel
    if (type === "SEARCH") {
      panel.querySelector(".panel-content").innerHTML = `
        <input type="text" class="search-input" placeholder="Ketik sesuatu..." style="width:100%; padding:5px;">
        <div class="search-output" style="margin-top:10px; font-size:12px;"></div>
      `;
      setupSearch(panel.querySelector(".search-input"), panel.querySelector(".search-output"));
    } 
    else if (type === "OPERATION") {
      panel.querySelector(".panel-content").innerHTML = `<div class="op-code" style="height:200px; overflow:auto;"></div>`;
      simulateInfiniteCode(panel.querySelector(".op-code"));
    } 
    else if (type === "SECURITY") {
      panel.querySelector(".panel-content").innerHTML = `
        <ul style="font-size:12px;">
          <li>[OK] Firewall aktif</li>
          <li>[OK] CCTV online</li>
          <li>[WARN] Percobaan login ilegal</li>
          <li>[INFO] IDS scanning...</li>
        </ul>
      `;
    } 
    else if (type === "PARAMETERS") {
      panel.querySelector(".panel-content").innerHTML = `<div class="param-code" style="height:200px; overflow:auto;"></div>`;
      simulateParametersCode(panel.querySelector(".param-code"));
    } 
    else if (type === "CONSOLE") {
      panel.querySelector(".panel-content").innerHTML = `<div class="console-area" style="position:relative; height:250px; background:#000; overflow:hidden;"></div>`;
      generateRandomForms(panel.querySelector(".console-area"));
    }
 else if (action === "CCTV") {
  const content = `
    <div class="cctv-container">
      <img src="https://i.pinimg.com/736x/e9/8a/7c/e98a7cfb540f13c098865c1e78147015.jpg" 
           class="cctv-video" 
           style="width:100%; height:100%; object-fit:cover; filter:grayscale(100%);">
      <div class="cctv-overlay"></div>
      <p class="cctv-label">CCTV ONLINE - AREA 51</p>
    </div>
  `;
  createPanel("CCTV", content);
}

  }

  // Jika pilih HACKER GRID
  if (type === "HACKER GRID") {
    for (let i = 0; i < 8; i++) {
      createHackerBox();
    }
  }
}

// =====================================================
// SEARCH PANEL
// =====================================================
function setupSearch(input, output) {
  input.addEventListener("keyup", () => {
    const query = input.value;
    if (query.length > 0) {
      output.innerHTML = generateRandomSearchResults(query);
    } else {
      output.innerHTML = "";
    }
  });
}

function generateRandomSearchResults(query) {
  const results = [];
  for (let i = 0; i < 5; i++) {
    results.push(`[${new Date().toLocaleTimeString()}] Found match: ${query}_${Math.floor(Math.random() * 9999)}`);
  }
  return results.join("<br>");
}

// =====================================================
// OPERATION PANEL
// =====================================================
function simulateInfiniteCode(outputElement) {
  function generateCodeLine() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/[]{}-=_+";
    let codeLine = "";
    for (let i = 0; i < 40; i++) {
      codeLine += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `[${new Date().toLocaleTimeString()}] ${codeLine}`;
  }

  function addLine() {
    const colors = ["#0ff", "#0f0", "#ff0", "#f90", "#f0f"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    outputElement.innerHTML += `<span style="color:${color}; text-shadow:0 0 6px ${color};">${generateCodeLine()}</span><br>`;
    outputElement.scrollTop = outputElement.scrollHeight;

    if (outputElement.innerHTML.split("<br>").length > 80) {
      outputElement.innerHTML = outputElement.innerHTML.split("<br>").slice(-40).join("<br>");
    }
    setTimeout(addLine, 80 + Math.random() * 120);
  }
  addLine();
}

// =====================================================
// PARAMETERS PANEL
// =====================================================
function simulateParametersCode(outputElement) {
  function generateParamLine() {
    const tags = ["<param>", "<config>", "<setup>", "<sys>", "<data>", "<root>", "<core>"];
    const randomTag = tags[Math.floor(Math.random() * tags.length)];
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let randomValue = "";
    for (let i = 0; i < 50; i++) {
      randomValue += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${randomTag} ${randomValue}`;
  }

  function addLine() {
    const colors = ["#0ff", "#0f0", "#ff0", "#f90", "#f0f"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    outputElement.innerHTML += `<span style="color:${color}; text-shadow:0 0 6px ${color};">${generateParamLine()}</span><br>`;
    outputElement.scrollTop = outputElement.scrollHeight;

    if (outputElement.innerHTML.split("<br>").length > 80) {
      outputElement.innerHTML = outputElement.innerHTML.split("<br>").slice(-40).join("<br>");
    }
    setTimeout(addLine, 100 + Math.random() * 150);
  }
  addLine();
}

// =====================================================
// CONSOLE PANEL
// =====================================================
function generateRandomForms(container) {
  container.innerHTML = "";
  const formCount = 8; 
  for (let i = 0; i < formCount; i++) {
    const formBox = document.createElement("div");
    formBox.classList.add("console-box");
    formBox.style.position = "absolute";
    formBox.style.width = `${80 + Math.random() * 120}px`;
    formBox.style.height = `${80 + Math.random() * 120}px`;
    formBox.style.top = `${Math.random() * 150}px`;
    formBox.style.left = `${Math.random() * 250}px`;
    formBox.style.background = "rgba(0,0,0,0.8)";
    formBox.style.border = "1px solid #0ff";
    formBox.style.color = "#0ff";
    formBox.style.fontFamily = "monospace";
    formBox.style.fontSize = "11px";
    formBox.style.overflow = "auto";
    formBox.style.padding = "5px";
    container.appendChild(formBox);

    fillBoxWithCode(formBox);
  }
}

function fillBoxWithCode(box) {
  function generateCodeLine() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/[]{}-=_+";
    let codeLine = "";
    for (let i = 0; i < 30; i++) {
      codeLine += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `[${new Date().toLocaleTimeString()}] ${codeLine}`;
  }

  function addLine() {
    const colors = ["#0ff", "#0f0", "#ff0", "#f90", "#f0f"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    box.innerHTML += `<span style="color:${color}; text-shadow:0 0 4px ${color};">${generateCodeLine()}</span><br>`;
    box.scrollTop = box.scrollHeight;

    if (box.innerHTML.split("<br>").length > 40) {
      box.innerHTML = box.innerHTML.split("<br>").slice(-20).join("<br>");
    }
    setTimeout(addLine, 100 + Math.random() * 200);
  }
  addLine();
}

// =====================================================
// HACKER GRID - ASCII BOX
// =====================================================
const asciiLines = [
  "+-------------------+",
  "|   ACCESS GRANTED  |",
  "|  Loading Modules  |",
  "+-------------------+",
  ">> INIT SYSTEM",
  ">> RUNNING SCRIPT...",
  "[###########] 90%",
  "___ __ _  _  ___ ",
  "|| || ||\\ ||  // ",
  "|| || || ||  //__",
  "[OK] Connection",
  "[ERR] Timeout",
  "[INFO] Executing..."
];

function createHackerBox() {
  const box = document.createElement("div");
  box.className = "hacker-box";
  box.style.width = `${100 + Math.random() * 200}px`;
  box.style.height = `${60 + Math.random() * 150}px`;
  box.style.top = `${Math.random() * window.innerHeight}px`;
  box.style.left = `${Math.random() * window.innerWidth}px`;
  document.getElementById("hud-panels").appendChild(box);

  fillBox(box);
}

function fillBox(box) {
  function addLine() {
    const line = asciiLines[Math.floor(Math.random() * asciiLines.length)];
    box.textContent += line + "\n";

    const lines = box.textContent.split("\n");
    if (lines.length > 15) {
      box.textContent = lines.slice(-10).join("\n");
    }
    setTimeout(addLine, 300 + Math.random() * 300);
  }
  addLine();
}
document.querySelectorAll(".hud-btn").forEach(button => {
  button.addEventListener("click", () => {
    if (button.textContent === "TRACKING") {
      // Buat panel manual
      const panel = document.createElement("div");
      panel.className = "hud-panel";
      panel.innerHTML = `
        <h3 style="color:#0f0;">TRACKING</h3>
        <h4 style="color:#0f0;">Upload Foto untuk Melacak:</h4>
        <input type="file" id="uploadPhoto" accept="image/*" style="width:100%; color:#0f0; margin:5px 0;">
        <div id="trackingStatus" style="margin-top:10px; color:#0f0;">Pilih foto untuk memulai pelacakan...</div>
        <div id="trackingMap" style="margin-top:10px; display:none;">
          <iframe 
            width="100%" height="200" 
            style="border:1px solid #0f0;" loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63109.177917897396!2d116.49458829460654!3d-8.660740339786985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc4f1e947199ff%3A0x4030bfbcaf7d230!2sKec.%20Selong%2C%20Kabupaten%20Lombok%20Timur%2C%20Nusa%20Tenggara%20Bar.!5e0!3m2!1sid!2sid!4v1753629345229!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      `;
      document.getElementById("hud-panels").appendChild(panel);

      // Event listener
      const uploadInput = panel.querySelector("#uploadPhoto");
      const statusDiv = panel.querySelector("#trackingStatus");
      const mapDiv = panel.querySelector("#trackingMap");

      uploadInput.addEventListener("change", () => {
        if (uploadInput.files.length > 0) {
          statusDiv.textContent = "Melacak data dan lokasi...";
          let step = 0;
          const steps = [
            "Memeriksa metadata foto...",
            "Menghubungkan server GPS...",
            "Mengambil koordinat lokasi...",
            "Menampilkan peta..."
          ];
          const interval = setInterval(() => {
            statusDiv.textContent = steps[step];
            step++;
            if (step >= steps.length) {
              clearInterval(interval);
              mapDiv.style.display = "block";
              statusDiv.textContent = "Lokasi berhasil dilacak!";
            }
          }, 1200);
        }
      });
    }
  });
});
