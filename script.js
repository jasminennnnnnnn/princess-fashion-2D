// DATA PILIHAN WARNA
const dressColors = [
  "#ff8dc4","#f26b83","#b28bea","#87c6f5",
  "#f2d27d","#85d9b5","#ffffff","#47405c",
  "#ffb499","#cfa4f4","#8ed7df","#db5b9b"
];

const hairColors = [
  "#e8bb73","#86543c","#302837",
  "#f39ac9","#a585df","#d7d4e4",
  "#bd6853","#f4e4b3","#8ebee2"
];

const makeupColors = [
  "#f28ab5","#e44d75","#a67ad9",
  "#78b8e8","#79d7bc","#f4cb70",
  "#d87aaf","#a7525b","#25213c",
  "#f1a28d","#ffffff","#e46cba"
];

const shoeColors = [
  "#ee78b1","#ffffff","#e7bf69",
  "#a47bdb","#83bde9","#40344e"
];

const dressStyles = [
  "Ball Gown","A-Line","Mermaid",
  "Short Princess","Layered","Royal Train",
  "Fairy Dress","Heart Gown","Ruffle Dress"
];

const hairStyles = [
  "Long Waves","Straight","Ponytail",
  "Bun","Bob","Side Bangs"
];

const makeupTypes = [
  "Eyeshadow","Lipstick","Blush","Eyeliner"
];

// BENTUK ROK
const skirts = [
  "M143 320 Q109 362 45 467 Q170 492 295 467 Q231 362 197 320Z",
  "M143 320 L93 467 Q170 480 247 467 L197 320Z",
  "M143 320 Q130 374 143 410 L83 467 Q170 489 257 467 L197 410 Q210 374 197 320Z",
  "M143 320 L105 390 Q170 413 235 390 L197 320Z",
  "M143 320 Q112 352 76 467 Q170 490 264 467 Q228 352 197 320Z",
  "M143 320 Q100 365 28 475 Q170 494 312 475 Q240 365 197 320Z",
  "M143 320 Q115 363 95 432 Q170 461 245 432 Q225 363 197 320Z",
  "M143 320 Q110 354 61 466 Q170 490 279 466 Q230 354 197 320Z",
  "M143 320 Q100 365 70 467 Q170 490 270 467 Q240 365 197 320Z"
];

// MODEL RAMBUT BELAKANG
const backs = [
  "M108 156 Q94 72 170 68 Q247 70 232 155 Q249 255 223 320 L117 320 Q91 250 108 156Z",
  "M108 156 Q94 72 170 68 Q247 70 232 155 L232 326 L108 326Z",
  "M108 156 Q94 72 170 68 Q247 70 232 155 Q270 228 239 325 L216 325 L206 150Z",
  "M112 155 Q94 74 170 70 Q246 75 228 155 L216 190 L124 190Z",
  "M108 156 Q94 72 170 68 Q247 70 232 155 L232 225 Q170 252 108 225Z",
  "M108 156 Q94 72 170 68 Q247 70 232 155 Q249 240 222 300 L118 300Z"
];

// MODEL RAMBUT DEPAN
const fronts = [
  "M107 156 Q100 88 145 77 Q205 52 233 120 Q221 143 208 145 Q185 128 174 110 Q148 143 107 156Z",
  "M107 154 Q100 85 170 72 Q239 83 233 154 Q208 125 170 103 Q144 130 107 154Z",
  "M107 156 Q104 83 170 71 Q237 82 233 156 Q205 127 170 107 Q145 134 107 156Z",
  "M107 152 Q104 91 170 78 Q233 91 233 152 Q201 126 170 107 Q139 126 107 152Z",
  "M107 155 Q101 85 170 73 Q237 85 233 155 Q204 121 170 111 Q136 131 107 155Z",
  "M107 160 Q100 83 170 70 Q237 82 233 155 Q199 116 160 102 Q150 146 107 160Z"
];

// DATA KONDISI APLIKASI
const defaultState = {
  dressStyle:0,
  dressColor:0,
  hairStyle:0,
  hairColor:0,
  shoeColor:0,
  eyeshadow:2,
  lipstick:1,
  blush:0,
  eyeliner:8
};

let state = {...defaultState};
let currentTab = "dress";
let makeupType = "Eyeshadow";

// MENGUBAH ATRIBUT GAMBAR SVG
function setAttr(id, name, value) {
  document.getElementById(id).setAttribute(name,value);
}

// MEMPERBARUI TAMPILAN PRINCESS
function updateAll() {
  // Dress
  setAttr("skirt","fill",dressColors[state.dressColor]);
  setAttr("bodice","fill",dressColors[state.dressColor]);
  setAttr("skirt","d",skirts[state.dressStyle]);

  // Rambut
  setAttr("backHair","fill",hairColors[state.hairColor]);
  setAttr("frontHair","fill",hairColors[state.hairColor]);
  setAttr("backHair","d",backs[state.hairStyle]);
  setAttr("frontHair","d",fronts[state.hairStyle]);

  // Sepatu
  setAttr("shoeLeft","fill",shoeColors[state.shoeColor]);
  setAttr("shoeRight","fill",shoeColors[state.shoeColor]);

  // Makeup
  setAttr("shadowL","fill",makeupColors[state.eyeshadow]);
  setAttr("shadowR","fill",makeupColors[state.eyeshadow]);
  setAttr("lips","fill",makeupColors[state.lipstick]);
  setAttr("blushL","fill",makeupColors[state.blush]);
  setAttr("blushR","fill",makeupColors[state.blush]);
  setAttr("linerL","stroke",makeupColors[state.eyeliner]);
  setAttr("linerR","stroke",makeupColors[state.eyeliner]);
}

// PINDAH MENU
function switchTab(tab, button) {
  currentTab = tab;
  document.querySelectorAll(".tab").forEach(b=>{
    b.classList.remove("active");
  });
  button.classList.add("active");
  renderControls();
}

// MEMBUAT JUDUL BAGIAN
function heading(text) {
  const h = document.createElement("h3");
  h.textContent = text;
  return h;
}

// MEMBUAT TOMBOL PILIHAN
function makeChoices(items, selected, callback) {
  const box = document.createElement("div");
  box.className = "options";

  items.forEach((name,i)=>{
    const button = document.createElement("button");
    button.className = "opt" + (i===selected ? " selected" : "");
    button.textContent = name;
    button.onclick = ()=>callback(i);
    box.appendChild(button);
  });

  return box;
}

// MEMBUAT PILIHAN WARNA
function makePalette(colors, selected, callback) {
  const box = document.createElement("div");
  box.className = "palette";

  colors.forEach((color,i)=>{
    const button = document.createElement("button");
    button.className = "swatch" + (i===selected ? " selected" : "");
    button.style.background = color;
    button.title = "Warna " + (i+1);
    button.setAttribute("aria-label","Warna "+(i+1));
    button.onclick = ()=>callback(i);
    box.appendChild(button);
  });

  return box;
}

// MENAMPILKAN KONTROL SESUAI MENU
function renderControls() {
  const box = document.getElementById("controls");
  box.innerHTML = "";

  if(currentTab === "dress") {
    box.appendChild(heading("👗 Pilih Desain Dress"));
    box.appendChild(makeChoices(
      dressStyles,state.dressStyle,i=>{
        state.dressStyle=i;
        updateAll();
        renderControls();
      }
    ));

    box.appendChild(heading("🎨 Pilih Warna Dress"));
    box.appendChild(makePalette(
      dressColors,state.dressColor,i=>{
        state.dressColor=i;
        updateAll();
        renderControls();
      }
    ));

    box.appendChild(heading("👠 Pilih Warna Sepatu"));
    box.appendChild(makePalette(
      shoeColors,state.shoeColor,i=>{
        state.shoeColor=i;
        updateAll();
        renderControls();
      }
    ));
  }

  else if(currentTab === "hair") {
    box.appendChild(heading("💇 Pilih Model Rambut"));
    box.appendChild(makeChoices(
      hairStyles,state.hairStyle,i=>{
        state.hairStyle=i;
        updateAll();
        renderControls();
      }
    ));

    box.appendChild(heading("🎨 Pilih Warna Rambut"));
    box.appendChild(makePalette(
      hairColors,state.hairColor,i=>{
        state.hairColor=i;
        updateAll();
        renderControls();
      }
    ));
  }

  else if(currentTab === "makeup") {
    box.appendChild(heading("💄 Pilih Jenis Makeup"));
    box.appendChild(makeChoices(
      makeupTypes,
      makeupTypes.indexOf(makeupType),
      i=>{
        makeupType=makeupTypes[i];
        renderControls();
      }
    ));

    const key = {
      Eyeshadow:"eyeshadow",
      Lipstick:"lipstick",
      Blush:"blush",
      Eyeliner:"eyeliner"
    }[makeupType];

    box.appendChild(heading("🌈 Pilih Warna "+makeupType));
    box.appendChild(makePalette(
      makeupColors,state[key],i=>{
        state[key]=i;
        updateAll();
        renderControls();
      }
    ));
  }
}

// TOMBOL RANDOM
function randomLook() {
  state.dressStyle=Math.floor(Math.random()*dressStyles.length);
  state.dressColor=Math.floor(Math.random()*dressColors.length);
  state.hairStyle=Math.floor(Math.random()*hairStyles.length);
  state.hairColor=Math.floor(Math.random()*hairColors.length);
  state.shoeColor=Math.floor(Math.random()*shoeColors.length);

  ["eyeshadow","lipstick","blush","eyeliner"].forEach(key=>{
    state[key]=Math.floor(Math.random()*makeupColors.length);
  });

  updateAll();
  renderControls();
  document.getElementById("message").textContent =
    "🎀 Surprise! Your new princess look is ready!";
}

// TOMBOL RESET
function resetLook() {
  state={...defaultState};
  updateAll();
  renderControls();
  document.getElementById("message").textContent =
    "✨ Create your dream princess! ✨";
}

// TOMBOL FINISH
function finishLook() {
  document.getElementById("message").textContent =
    "👑 Princess Makeover Complete! ✨";
}

// MENJALANKAN APLIKASI
updateAll();
renderControls();