// Meghívott keresztnevek
var keresztnevek = ["zsanett", "istvan", "kornelia", "iren", "mark", "agnes", "szofia", "nikolett", "kinga", "peter", "krisztian", "adrienn", "gabor", "nico" , "melania" , "laszlo"] ;

// Meghívott vezetéknevek
var vezeteknev = ["litter", "varga", "rozsahegyi", "bogdan", "mihalovics", "fejes" , "manyik" , "vanmuysen", "orban"]  ;

// Ékezetek eltávolítása
function stripDiacritics(str){
  try {
    return str.normalize('NFD').replace(/\p{M}/gu, '');
  } catch(e) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}

const form = document.getElementById('nameForm');
const input = document.getElementById('firstname');
const error = document.getElementById('error');
const result = document.getElementById('result');
const lastnameGroup = document.getElementById('lastname-group');
const lastnameInput = document.getElementById('lastname');

// -------------------------
// FORM VALIDÁCIÓ ÉS ÁTIRÁNYÍTÁS
// -------------------------
if (form) {
  input.addEventListener('input', ()=>{
    let cleaned = stripDiacritics(input.value)
                    .replace(/[^A-Za-z\-\s]/g,'')
                    .toLowerCase()
                    .trim();

    input.value = cleaned;

    if(cleaned && keresztnevek.includes(cleaned)){
      lastnameGroup.style.display = 'block';
    } else {
      lastnameGroup.style.display = 'none';
      lastnameInput.value = "";
    }

    error.style.display = 'none';
    result.style.display = 'none';
  });

  form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const raw = input.value.trim();
    const cleaned = stripDiacritics(raw).replace(/[^A-Za-z\-\s]/g,'').trim().toLowerCase();

    if(!cleaned){
      error.style.display = 'block';
      error.textContent = 'A keresztnevet kötelező megadni (ékezetek nélkül).';
      result.style.display = 'none';
      input.focus();
      return;
    }

    if(!keresztnevek.includes(cleaned)){
      error.style.display = 'block';
      error.textContent = 'Ez a keresztnév nincs a meghívottak listáján.';
      result.style.display = 'none';
      return;
    }

    const lastname = stripDiacritics(lastnameInput.value)
                       .replace(/[^A-Za-z\-\s]/g,'')
                       .trim()
                       .toLowerCase();

    if(!lastname){
      error.style.display = 'block';
      error.textContent = 'A vezetéknevet is meg kell adni.';
      result.style.display = 'none';
      return;
    }

    if(!vezeteknev.includes(lastname)){
      error.style.display = 'block';
      error.textContent = 'Ez a vezetéknév nincs a meghívottak listáján.';
      result.style.display = 'none';
      return;
    }

    // Sikeres validáció → átirányítás
    window.location.href = './buli.html';
  });
}

// -------------------------
// GOMB1 → ZENE + UI VÁLTOZÁS
// -------------------------
// Globális audio objektum, hogy kezelni tudjuk a leállítást is
let currentAudio = null;

// GOMB1 → indul az első zene és UI változik
const gomb1 = document.getElementById('gomb1');
if (gomb1) {
  gomb1.addEventListener('click', () => {
    // Zene indítása
    if (currentAudio) currentAudio.pause();
    currentAudio = new Audio('./audio/zene1.mp3');
    currentAudio.play();

    // gomb1 elrejtése
    gomb1.classList.add('hidden');

    // több gomb mutatása
    document.getElementById('gombcombo1').classList.remove('hidden');
    document.getElementById('gomb2').classList.remove('hidden');
    document.getElementById('gomb3').classList.remove('hidden');


    // kép cseréje
    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img2.png';
    }

    // szöveg cseréje
    const hazigazda = document.getElementById('hazigazda');
    if (hazigazda) {
      hazigazda.textContent = "A narancssárga jelzésig kell eljutnod, kicsit messze van, de hallgass egy kis zenét közben.";
    }
  });
}

// GOMB3 → váltás zene2-re
const gomb3 = document.getElementById('gomb3');
if (gomb3) {
  gomb3.addEventListener('click', () => {
    // gomb3 elrejtése
    gomb3.classList.add('hidden');

    // gomb4 megjelenítése
    const gomb4 = document.getElementById('gomb4');
    if (gomb4) {
      gomb4.classList.remove('hidden');
    }

    // zene1 leállítása
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // zene2 indítása
    currentAudio = new Audio('./audio/zene2.mp3');
    currentAudio.play();
  });
}

// GOMB4 → visszaváltás zene1-re
const gomb4 = document.getElementById('gomb4');
if (gomb4) {
  gomb4.addEventListener('click', () => {
    // gomb4 elrejtése
    gomb4.classList.add('hidden');

    // gomb3 megjelenítése
    const gomb3 = document.getElementById('gomb3');
    if (gomb3) {
      gomb3.classList.remove('hidden');
    }

    // zene2 leállítása
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

  
    currentAudio = new Audio('./audio/zene1.mp3');
    currentAudio.play();
  });
}
  const gomb2 = document.getElementById('gomb2');
if (gomb2) {
  gomb2.addEventListener('click', () => {
gomb2.classList.add(`hidden`);
 const gomb5 = document.getElementById('gomb5');
    if (gomb5) {
      gomb5.classList.remove('hidden');
    }
 if (gomb6) {
      gomb6.classList.remove('hidden');
    }
 if (gomb7) {
      gomb7.classList.remove('hidden');
    }
    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img3.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Egy elágazódáshoz érkeztél. Na vajon most merre haladsz tovább?";
    }

     });
    }
    if (gomb7) {
  gomb7.addEventListener('click', () => {
gomb7.classList.add(`hidden`);
gomb5.classList.add(`hidden`);
gomb6.classList.add(`hidden`);
 const gomb8 = document.getElementById('gomb8');
    if (gomb8) {
      gomb8.classList.remove('hidden');
    }

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img4.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Rossz irányba indultál. Nem tudom, hogy túrázol-e éppen, de errefelé nem sok látnivaló van a fákon kívül.";
    }

     });
    }
    if (gomb8) {
  gomb8.addEventListener('click', () => {
gomb8.classList.add(`hidden`);
 const gomb5 = document.getElementById('gomb5');
    if (gomb5) {
      gomb5.classList.remove('hidden');
    }
 if (gomb6) {
      gomb6.classList.remove('hidden');
    }
 if (gomb7) {
      gomb7.classList.remove('hidden');
    }
    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img3.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Egy elágazódáshoz érkeztél. Na vajon most merre haladsz tovább?";
    }

     });
    }
     if (gomb6) {
  gomb6.addEventListener('click', () => {
gomb7.classList.add(`hidden`);
gomb5.classList.add(`hidden`);
gomb6.classList.add(`hidden`);
 const gomb9 = document.getElementById('gomb9');
    if (gomb9) {
      gomb9.classList.remove('hidden');
    }

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img5.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Jól megnézted azt a térképet, vajon?";
    }

     });
    }
        if (gomb9) {
  gomb9.addEventListener('click', () => {
gomb9.classList.add(`hidden`);
 const gomb5 = document.getElementById('gomb5');
    if (gomb5) {
      gomb5.classList.remove('hidden');
    }
 if (gomb6) {
      gomb6.classList.remove('hidden');
    }
 if (gomb7) {
      gomb7.classList.remove('hidden');
    }
    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img3.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Egy elágazódáshoz érkeztél. Na vajon most merre haladsz tovább?";
    }

     });
    }
         if (gomb5) {
  gomb5.addEventListener('click', () => {
gomb7.classList.add(`hidden`);
gomb5.classList.add(`hidden`);
gomb6.classList.add(`hidden`);
 const gomb10 = document.getElementById('gomb10');
    if (gomb10) {
      gomb10.classList.remove('hidden');
    }
      gomb11.classList.remove('hidden');
    
      gomb12.classList.remove('hidden');
    

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img6.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Egy újabb elágazódáshoz értél, de már nem járhatsz messze…";
    }

     });
    }
     if (gomb12) {
  gomb12.addEventListener('click', () => {
gomb10.classList.add(`hidden`);
gomb11.classList.add(`hidden`);
gomb12.classList.add(`hidden`);
 const gomb13 = document.getElementById('gomb13');
    if (gomb13) {
      gomb13.classList.remove('hidden');
    }

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img7.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Lehetne itt is a házam, de nem itt van.";
    }

     });
    }
             if (gomb13) {
  gomb13.addEventListener('click', () => {
gomb13.classList.add(`hidden`);
gomb14.classList.add(`hidden`);
gomb15.classList.add(`hidden`);
gomb16.classList.add(`hidden`);

 const gomb10 = document.getElementById('gomb10');
    if (gomb10) {
      gomb10.classList.remove('hidden');
    }
      gomb11.classList.remove('hidden');
    
      gomb12.classList.remove('hidden');
    

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img6.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Egy újabb elágazódáshoz értél, de már nem járhatsz messze…";
    }

     });
    }
             if (gomb11) {
  gomb11.addEventListener('click', () => {
gomb11.classList.add(`hidden`);
gomb10.classList.add(`hidden`);
gomb12.classList.add(`hidden`);
 const gomb14 = document.getElementById('gomb14');
    if (gomb14) {
      gomb14.classList.remove('hidden');
    }
      gomb15.classList.remove('hidden');
    
      gomb16.classList.remove('hidden');
         gomb13.classList.remove('hidden');
    

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img8.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Látom, téged izgalomba hoz a friss fű és a fák illata. Merre mész tovább?";
    }

     });
    }
         if (gomb14) {
  gomb14.addEventListener('click', () => {
gomb14.classList.add(`hidden`);
gomb15.classList.add(`hidden`);
gomb16.classList.add(`hidden`);
gomb13.classList.add(`hidden`);
gomb2.classList.add(`hidden`);
gomb3.classList.add(`hidden`);
 const gomb17 = document.getElementById('gomb17');
    if (gomb17) {
      gomb17.classList.remove('hidden');
    }

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img9.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Szerintem te easter eggre vadászol… hát tessék, itt van egy!";
    }
if (currentAudio) {
      currentAudio.pause();
   
    }

  
    currentAudio = new Audio('./audio/zene3.mp3');
    currentAudio.play();
     });
    }
    if (gomb17) {
  gomb17.addEventListener('click', () => {
    // Zene indítása
    if (currentAudio) currentAudio.pause();
    currentAudio = new Audio('./audio/zene1.mp3');
    currentAudio.play();

    // gomb1 elrejtése
    gomb17.classList.add('hidden');

    // több gomb mutatása
    document.getElementById('gombcombo1').classList.remove('hidden');
    document.getElementById('gomb2').classList.remove('hidden');
    document.getElementById('gomb3').classList.remove('hidden');


    // kép cseréje
    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img2.png';
    }

    // szöveg cseréje
    const hazigazda = document.getElementById('hazigazda');
    if (hazigazda) {
      hazigazda.textContent = "Nem is értem, hogy kerülhettél vissza az indulópontra, de nem gond, próbáld meg újra!";
    }
  });
}
 if (gomb15) {
  gomb15.addEventListener('click', () => {
gomb14.classList.add(`hidden`);
gomb15.classList.add(`hidden`);
gomb16.classList.add(`hidden`);
gomb13.classList.add(`hidden`);

 const gomb18 = document.getElementById('gomb18');
    if (gomb18) {
      gomb18.classList.remove('hidden');
    }

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img10.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Ez bizony zsákutca… tovább innen nem vezet út, ideje visszafordulni.";
    }

     });
    }
            if (gomb18) {
  gomb18.addEventListener('click', () => {
gomb18.classList.add(`hidden`);

 const gomb14 = document.getElementById('gomb14');
    if (gomb14) {
      gomb14.classList.remove('hidden');
    }
      gomb15.classList.remove('hidden');
    
      gomb16.classList.remove('hidden');
         gomb13.classList.remove('hidden');
    

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img8.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Látom, téged izgalomba hoz a friss fű és a fák illata. Merre mész tovább?";
    }

     });
    }
     if (gomb16) {
  gomb16.addEventListener('click', () => {
gomb14.classList.add(`hidden`);
gomb15.classList.add(`hidden`);
gomb16.classList.add(`hidden`);
gomb13.classList.add(`hidden`);

 const gomb18 = document.getElementById('gomb18');
    if (gomb18) {
      gomb18.classList.remove('hidden');
    }

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img11.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Hoppá, zsákutcába futottál. Erre bizony nincs tovább, keress másik utat!";
    }

     });
    }
         if (gomb10) {
  gomb10.addEventListener('click', () => {
gomb10.classList.add(`hidden`);
gomb11.classList.add(`hidden`);
gomb12.classList.add(`hidden`);
gomb2.classList.add(`hidden`);
gomb3.classList.add(`hidden`);
gomb4.classList.add(`hidden`);
gombcombo1.classList.add(`hidden`);

 const gomb19 = document.getElementById('gomb19');
    if (gomb19) {
      gomb19.classList.remove('hidden');
    }

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img12.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Végre rátaláltál a házra! Az út fáradalmai mögötted vannak, most jöhet a jól megérdemelt szórakozás.";
    }
if (currentAudio) {
      currentAudio.pause();
   
    }

  
    currentAudio = new Audio('./audio/zene4.mp3');
    currentAudio.play();
   
     });
    }
             if (gomb19) {
  gomb19.addEventListener('click', () => {
gomb19.classList.add(`hidden`);

 const gomb20 = document.getElementById('gomb20');
    if (gomb20) {
      gomb20.classList.remove('hidden');
    }
    const gombcombo2 = document.getElementById('gombcombo2');
 gomb21.classList.remove('hidden');
 gombcombo2.classList.remove(`hidden`);
    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img13.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Ez a bejárati vaskapu kicsit tropa.";
    }

     });
    }
                if (gomb20) {
  gomb20.addEventListener('click', () => {
gomb20.classList.add(`hidden`);
gomb21.classList.add(`hidden`);

 const gomb22 = document.getElementById('gomb22');
    if (gomb22) {
      gomb22.classList.remove('hidden');
    }
    gomb23.classList.remove('hidden');
    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img14.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "A ház mellett ott csillog a medence, mintha csak a napfénynek építették volna.";
    }
 const effekt = new Audio('./audio/effekt1.mp3');
    effekt.play();
     });
    }
       if (gomb21) {
  gomb21.addEventListener('click', () => {
gomb20.classList.add(`hidden`);
gomb21.classList.add(`hidden`);

 const gomb22 = document.getElementById('gomb22');
    if (gomb22) {
      gomb22.classList.remove('hidden');
    }
        gomb23.classList.remove('hidden');

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img14.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Hát, az ata nem biztos, hogy örülni fog a berúgott ajtónak, de majd azt mondom, kidőlt. Amúgy jó kis medence.";
    }
 const effekt = new Audio('./audio/effekt2.mp3');
    effekt.play();
     });
    }
                   if (gomb22) {
  gomb22.addEventListener('click', () => {
gomb22.classList.add(`hidden`);
gomb23.classList.add(`hidden`);

 const gomb24 = document.getElementById('gomb24');
    if (gomb24) {
      gomb24.classList.remove('hidden');
    }
    gomb25.classList.remove('hidden');
    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img15.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "Még tábortüze is van az atának, meg elkerített kertje. De miért épp gombákat ültetett?";
    }

     });
    }
                      if (gomb23) {
  gomb23.addEventListener('click', () => {
gomb22.classList.add(`hidden`);
gomb23.classList.add(`hidden`);

 const gomb24 = document.getElementById('gomb24');
    if (gomb24) {
      gomb24.classList.remove('hidden');
    }
    gomb25.classList.remove('hidden');
    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img15.png';
    }
     if (hazigazda) {
      hazigazda.textContent = "De jó volt ez a kis medencézés! Az atánál minden megvan: tábortűz, elkerített kert… csak hát miért döntött úgy, hogy gombák nőjenek benne?";
    }
 const effekt = new Audio('./audio/effekt3.mp3');
    effekt.play();
     });
    }
                      if (gomb25) {
  gomb25.addEventListener('click', () => {
gomb24.classList.add(`hidden`);
gomb25.classList.add(`hidden`);

 const gomb26 = document.getElementById('gomb26');
    if (gomb26) {
      gomb26.classList.remove('hidden');
    }
   
    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga.gif';
    }
     if (hazigazda) {
      hazigazda.textContent = "Nem is tudom, mi történik most… Hol lehetek, és miért ragyog minden ennyire erősen?";
    }
 const effekt = new Audio('./audio/effekt4.mp3');
    effekt.play();
     });
    }
                          if (gomb26) {
  gomb26.addEventListener('click', () => {
gomb26.classList.add(`hidden`);

 setTimeout(() => {

 const gomb27 = document.getElementById('gomb27');
    if (gomb27) {
      gomb27.classList.remove('hidden');
    }
         gomb28.classList.remove('hidden');
              }, 2000); 
    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img17.jpg';
    }
      setTimeout(() => {
        imago.src = './image/img16.png';
      }, 2000); 
     if (hazigazda) {
      hazigazda.textContent = "Ez nagyon durva volt… Ez a gomba tuti nem ehető fajta. Na mindegy, jeleznem kell, hogy ideértem.";
    }

     });
    }
                              if (gomb24) {
  gomb24.addEventListener('click', () => {
gomb24.classList.add(`hidden`);
gomb25.classList.add(`hidden`);


 const gomb27 = document.getElementById('gomb27');
    if (gomb27) {
      gomb27.classList.remove('hidden');
    }
         gomb28.classList.remove('hidden');
    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img16.png';
    }
  
     if (hazigazda) {
      hazigazda.textContent = "Hát, végre itt vagyok! Már csak jeleznem kell, hogy ideértem.";
    }

     });
    }
                                  if (gomb27) {
  gomb27.addEventListener('click', () => {
gomb27.classList.add(`hidden`);
gomb28.classList.add(`hidden`);


 const gomb29 = document.getElementById('gomb29');
    if (gomb29) {
      gomb29.classList.remove('hidden');
    }
         gomb30.classList.remove('hidden');
    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img18.png';
    }
  
     if (hazigazda) {
      hazigazda.textContent = "„Üdvözöllek, örülök, hogy ideértél a bulira! Te vagy az első, aki megérkezett. De semmi gond, foglalj helyet, vagy nézz körbe nyugodtan. Még akadnak kisebb hibák a házban, például a hálószobámnak sincs még ajtaja, meg hasonlók.";
    }
 const effekt = new Audio('./audio/effekt5.mp3');
    effekt.play();
     });
    }
                                     if (gomb28) {
  gomb28.addEventListener('click', () => {
gomb27.classList.add(`hidden`);
gomb28.classList.add(`hidden`);


 const gomb29 = document.getElementById('gomb29');
    if (gomb29) {
      gomb29.classList.remove('hidden');
    }
         gomb30.classList.remove('hidden');
    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img18.png';
    }
  
     if (hazigazda) {
      hazigazda.textContent = "Te jó ég, nagyon megijedtem! Eltévedtél, hogy ilyen mérgesen dörömböltél az ajtón? Mindegy, nem számít, örülök, hogy ideértél, ráadásul te vagy az első. Ülj le nyugodtan az asztalhoz, vagy nézz körbe a házban, csak a hálószobához még nem érkezett meg az ajtó.";
    }
 const effekt = new Audio('./audio/effekt6.mp3');
    effekt.play();
     });
    }
   if (gomb30) {
  gomb30.addEventListener('click', () => {
gomb30.classList.add(`hidden`);
gomb29.classList.add(`hidden`);

setTimeout(() => {
const gomb29 = document.getElementById('gomb29');
    if (gomb29) {
      gomb29.classList.remove('hidden');
    }
   }, 6000); 
    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img19.png';
    }
         setTimeout(() => {
        imago.src = './image/img20.png';
      }, 2000); 
            setTimeout(() => {
        imago.src = './image/img21.png';
      }, 4000); 
            setTimeout(() => {
        imago.src = './image/img22.png';
      }, 6000); 
  
     if (hazigazda) {
      hazigazda.textContent = "Nézz csak körbe nyugodtan, ne lepődj meg, ha valami félkész vagy furán néz ki – ez még nem luxusvilla, csak a bulihelyszín!";
    }

     });
    }
 if (gomb29) {
  gomb29.addEventListener('click', () => {
gomb29.classList.add(`hidden`);
gomb30.classList.add(`hidden`);



 const gomb31 = document.getElementById('gomb31');
    if (gomb31) {
      gomb31.classList.remove('hidden');
    }
 const gomb32 = document.getElementById('gomb32');
    if (gomb32) {
      gomb32.classList.remove('hidden');
    }
     const gomb33 = document.getElementById('gomb33');
    if (gomb33) {
      gomb33.classList.remove('hidden');
    }
        const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img23.png';
    }
    
     if (hazigazda) {
      hazigazda.textContent = "Mivel te vagy az első vendég, te döntheted el, milyen stílusú zenét indítsunk! Előre szólok, nincs túl nagy gyűjteményem: három kategóriából választhatsz, és mindegyikben csak két szám van.";
    }

     });
    }
      if (gomb31) {
  gomb31.addEventListener('click', () => {
gomb31.classList.add(`hidden`);
gomb32.classList.add(`hidden`);
gomb33.classList.add(`hidden`);


const gomb34 = document.getElementById('gomb34');
    if (gomb34) {
      gomb34.classList.remove('hidden');
    }
  gomb35.classList.remove('hidden');
    gomb36.classList.remove('hidden');
      gomb37.classList.remove('hidden');

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga1.gif';
    }
         setTimeout(() => {
        imago.src = './image/img23.png';
      }, 2000); 

  
     if (hazigazda) {
      hazigazda.textContent = "Nagyszerű választás! Én is imádom az operát, olyan nyugalmat áraszt az emberre. Már csak az a kérdés, mit szeretnél inni? Sajnos nincs túl széles a választék.";
    }
if (currentAudio) {
      currentAudio.pause();
   
    }

  
    currentAudio = new Audio('./audio/zene6.mp3');
    currentAudio.play();
   
     });
    }
        if (gomb37) {
  gomb37.addEventListener('click', () => {
gomb37.classList.add(`hidden`);



const gomb38 = document.getElementById('gomb38');
    if (gomb38) {
      gomb38.classList.remove('hidden');
    }
 


  
  
if (currentAudio) {
      currentAudio.pause();
   
    }

  
    currentAudio = new Audio('./audio/zene5.mp3');
    currentAudio.play();
   
     });
    }
            if (gomb38) {
  gomb38.addEventListener('click', () => {
gomb38.classList.add(`hidden`);



const gomb37 = document.getElementById('gomb37');
    if (gomb37) {
      gomb37.classList.remove('hidden');
    }
 


  
  
if (currentAudio) {
      currentAudio.pause();
   
    }

  
    currentAudio = new Audio('./audio/zene6.mp3');
    currentAudio.play();
   
     });
    }
      if (gomb32) {
  gomb32.addEventListener('click', () => {
gomb31.classList.add(`hidden`);
gomb32.classList.add(`hidden`);
gomb33.classList.add(`hidden`);


const gomb34 = document.getElementById('gomb34');
    if (gomb34) {
      gomb34.classList.remove('hidden');
    }
  gomb35.classList.remove('hidden');
    gomb36.classList.remove('hidden');
      gomb39.classList.remove('hidden');

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga2.gif';
    }
         setTimeout(() => {
        imago.src = './image/img23.png';
      }, 2000); 
  
     if (hazigazda) {
      hazigazda.textContent = "Nem vagyok egy nagy poprajongó, de mint minden műfajban, ebben is vannak kiemelkedő darabok. Szeretnél inni valamit?";
    }
if (currentAudio) {
      currentAudio.pause();
   
    }

  
    currentAudio = new Audio('./audio/zene7.mp3');
    currentAudio.play();
   
     });
    }
      if (gomb39) {
  gomb39.addEventListener('click', () => {
gomb39.classList.add(`hidden`);



const gomb40 = document.getElementById('gomb40');
    if (gomb40) {
      gomb40.classList.remove('hidden');
    }
 


  
  
if (currentAudio) {
      currentAudio.pause();
   
    }

  
    currentAudio = new Audio('./audio/zene8.mp3');
    currentAudio.play();
   
     });
    }
          if (gomb40) {
  gomb40.addEventListener('click', () => {
gomb40.classList.add(`hidden`);



const gomb39 = document.getElementById('gomb39');
    if (gomb39) {
      gomb39.classList.remove('hidden');
    }
 


  
  
if (currentAudio) {
      currentAudio.pause();
   
    }

  
    currentAudio = new Audio('./audio/zene7.mp3');
    currentAudio.play();
   
     });
    }
      if (gomb33) {
  gomb33.addEventListener('click', () => {
gomb31.classList.add(`hidden`);
gomb32.classList.add(`hidden`);
gomb33.classList.add(`hidden`);


const gomb34 = document.getElementById('gomb34');
    if (gomb34) {
      gomb34.classList.remove('hidden');
    }
  gomb35.classList.remove('hidden');
    gomb36.classList.remove('hidden');
      gomb41.classList.remove('hidden');

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga3.gif';
    }
         setTimeout(() => {
        imago.src = './image/img23.png';
      }, 2000); 

  
     if (hazigazda) {
      hazigazda.textContent = "A rap a legszókimondóbb, általában a legőszintébb és a valóságot mutató műfaj. Szeretnél inni valamit?";
    }
if (currentAudio) {
      currentAudio.pause();
   
    }

  
    currentAudio = new Audio('./audio/zene9.mp3');
    currentAudio.play();
   
     });
    }
    if (gomb41) {
  gomb41.addEventListener('click', () => {
gomb41.classList.add(`hidden`);



const gomb42 = document.getElementById('gomb42');
    if (gomb42) {
      gomb42.classList.remove('hidden');
    }
 


  
  
if (currentAudio) {
      currentAudio.pause();
   
    }

  
    currentAudio = new Audio('./audio/zene10.mp3');
    currentAudio.play();
   
     });
    }
      if (gomb42) {
  gomb42.addEventListener('click', () => {
gomb42.classList.add(`hidden`);



const gomb41 = document.getElementById('gomb41');
    if (gomb41) {
      gomb41.classList.remove('hidden');
    }
 


  
  
if (currentAudio) {
      currentAudio.pause();
   
    }

  
    currentAudio = new Audio('./audio/zene9.mp3');
    currentAudio.play();
   
     });
    }
      if (gomb34) {
  gomb34.addEventListener('click', () => {
gomb34.classList.add(`hidden`);
gomb35.classList.add(`hidden`);
gomb36.classList.add(`hidden`);

   setTimeout(() => {
const gomb43 = document.getElementById('gomb43');
    if (gomb43) {
      gomb43.classList.remove('hidden');
    }
  gomb44.classList.remove('hidden');
    gomb45.classList.remove('hidden');
 }, 6000);

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga4.gif';
    }
         setTimeout(() => {
        imago.src = './image/img24.png';
      }, 2000); 
setTimeout(() => {
        imago.src = './image/imga5.gif';
      }, 4000);
      setTimeout(() => {
        imago.src = './image/img27.png';
      }, 6000);
  
     if (hazigazda) {
      hazigazda.textContent = "A víz az élet forrása, nélküle minden elcsendesülne és megszűnne létezni. Biztosan éhes vagy már, mit szeretnél enni?";
    }  
  
    const effekt = new Audio('./audio/effekt8.mp3');
    effekt.play();
    setTimeout(() => {
const effekt = new Audio('./audio/effekt7.mp3');
    effekt.play();
     }, 4000); 
     });
    }
      if (gomb35) {
  gomb35.addEventListener('click', () => {
gomb34.classList.add(`hidden`);
gomb35.classList.add(`hidden`);
gomb36.classList.add(`hidden`);

   setTimeout(() => {
const gomb43 = document.getElementById('gomb43');
    if (gomb43) {
      gomb43.classList.remove('hidden');
    }
  gomb44.classList.remove('hidden');
    gomb45.classList.remove('hidden');
 }, 6000);

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga6.gif';
    }
         setTimeout(() => {
        imago.src = './image/img25.png';
      }, 2000); 
setTimeout(() => {
        imago.src = './image/imga7.gif';
      }, 4000);
      setTimeout(() => {
        imago.src = './image/img27.png';
      }, 6000);
  
     if (hazigazda) {
      hazigazda.textContent = "A kávé nemcsak ital, hanem egy pillanatnyi menedék a rohanó világ elől. Biztosan éhes vagy már, mit szeretnél enni?";
    }  
  
    const effekt = new Audio('./audio/effekt8.mp3');
    effekt.play();
    setTimeout(() => {
const effekt = new Audio('./audio/effekt7.mp3');
    effekt.play();
     }, 4000); 
     });
    }
      if (gomb36) {
  gomb36.addEventListener('click', () => {
gomb34.classList.add(`hidden`);
gomb35.classList.add(`hidden`);
gomb36.classList.add(`hidden`);

   setTimeout(() => {
const gomb43 = document.getElementById('gomb43');
    if (gomb43) {
      gomb43.classList.remove('hidden');
    }
  gomb44.classList.remove('hidden');
    gomb45.classList.remove('hidden');
 }, 6000);

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga8.gif';
    }
         setTimeout(() => {
        imago.src = './image/img26.png';
      }, 2000); 
setTimeout(() => {
        imago.src = './image/imga9.gif';
      }, 4000);
      setTimeout(() => {
        imago.src = './image/img23.png';
      }, 6000);
  
     if (hazigazda) {
      hazigazda.textContent = "A sör nem csak ital, hanem a baráti beszélgetések kenőanyaga. Biztosan éhes vagy már, mit szeretnél enni?";
    }  
  

    setTimeout(() => {
const effekt = new Audio('./audio/effekt7.mp3');
    effekt.play();
     }, 4000); 
     });
    }
     if (gomb43) {
  gomb43.addEventListener('click', () => {
gomb43.classList.add(`hidden`);
gomb44.classList.add(`hidden`);
gomb45.classList.add(`hidden`);

   setTimeout(() => {
const gomb46 = document.getElementById('gomb46');
    if (gomb46) {
      gomb46.classList.remove('hidden');
    }
  gomb46.classList.remove('hidden');
    gomb47.classList.remove('hidden');
 }, 6000);

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga10.gif';
    }
         setTimeout(() => {
        imago.src = './image/img28.png';
      }, 2000); 
setTimeout(() => {
        imago.src = './image/imga10.gif';
      }, 4000);
      setTimeout(() => {
        imago.src = './image/img31.png';
      }, 6000);
  
     if (hazigazda) {
      hazigazda.textContent = "Hát, a burritót jobban szeretem, de elfogyott a palacsinta hozzá, és lusta voltam elmenni a boltba érte. Ez van, remélem, azért ízlett.";
    }  
  

    setTimeout(() => {
const effekt = new Audio('./audio/effekt9.mp3');
    effekt.play();
     }, 4000); 
     });
    }
      if (gomb44) {
  gomb44.addEventListener('click', () => {
gomb43.classList.add(`hidden`);
gomb44.classList.add(`hidden`);
gomb45.classList.add(`hidden`);

   setTimeout(() => {
const gomb46 = document.getElementById('gomb46');
    if (gomb46) {
      gomb46.classList.remove('hidden');
    }
  gomb46.classList.remove('hidden');
    gomb47.classList.remove('hidden');
 }, 6000);

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga11.gif';
    }
         setTimeout(() => {
        imago.src = './image/img30.png';
      }, 2000); 
setTimeout(() => {
        imago.src = './image/imga12.gif';
      }, 4000);
      setTimeout(() => {
        imago.src = './image/img31.png';
      }, 6000);
  
     if (hazigazda) {
      hazigazda.textContent = "A lasagne egy megunhatatlan étel, bár nem vinné fel a gyomorsavat, ha minden nap enném. Remélem, ízlik az étel!";
    }  
  

    setTimeout(() => {
const effekt = new Audio('./audio/effekt9.mp3');
    effekt.play();
     }, 4000); 
     });
    }
       if (gomb45) {
  gomb45.addEventListener('click', () => {
gomb43.classList.add(`hidden`);
gomb44.classList.add(`hidden`);
gomb45.classList.add(`hidden`);

   setTimeout(() => {
const gomb46 = document.getElementById('gomb46');
    if (gomb46) {
      gomb46.classList.remove('hidden');
    }
  gomb46.classList.remove('hidden');
    gomb47.classList.remove('hidden');
 }, 6000);

    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga13.gif';
    }
         setTimeout(() => {
        imago.src = './image/img29.png';
      }, 2000); 
setTimeout(() => {
        imago.src = './image/imga14.gif';
      }, 4000);
      setTimeout(() => {
        imago.src = './image/img31.png';
      }, 6000);
  
     if (hazigazda) {
      hazigazda.textContent = "A sushi sosem volt a nagy kedvencem, de mivel tudom, hogyan kell elkészíteni, arra gondoltam, talán valamelyik vendég örül majd neki. Remélem, ízlett.";
    }  
  

    setTimeout(() => {
const effekt = new Audio('./audio/effekt9.mp3');
    effekt.play();
     }, 4000); 
     });
    }
         if (gomb46) {
  gomb46.addEventListener('click', () => {
gomb46.classList.add(`hidden`);
gomb47.classList.add(`hidden`);


     setTimeout(() => {
const gomb48 = document.getElementById('gomb48');
    if (gomb48) {
      gomb48.classList.remove('hidden');
    }
  gomb49.classList.remove('hidden');
  }, 2000);


    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga15.gif';
    }
         setTimeout(() => {
        imago.src = './image/img32.png';
      }, 2000); 

     if (hazigazda) {
      hazigazda.textContent = "Örülök, hogy ízlett az étel, de születésnap torta nélkül nem az igazi. Ezért elmentem a Lidlbe, és vettem pár szeletet a legolcsóbb tortákból. Kérsz belőle?";
    }  
  


     });
    }
          if (gomb47) {
  gomb47.addEventListener('click', () => {
gomb46.classList.add(`hidden`);
gomb47.classList.add(`hidden`);


     setTimeout(() => {
const gomb48 = document.getElementById('gomb48');
    if (gomb48) {
      gomb48.classList.remove('hidden');
    }
  gomb49.classList.remove('hidden');
  }, 2000);


    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga16.gif';
    }
         setTimeout(() => {
        imago.src = './image/img32.png';
      }, 2000); 

     if (hazigazda) {
      hazigazda.textContent = "Hát, sajnálom, hogy nem ízlett. Mindent megtettem, amit tőlem telt, hogy finom legyen. De mindegy, van egy kis olcsó lidlis tortám, hát, majd annak a magas cukortartalma talán pozitívan hat az ízlelőbimbóidra.";
    }  
  


     });
    }
       if (gomb48) {
  gomb48.addEventListener('click', () => {
gomb48.classList.add(`hidden`);
gomb49.classList.add(`hidden`);


     setTimeout(() => {
const gomb50 = document.getElementById('gomb50');
    if (gomb50) {
      gomb50.classList.remove('hidden');
    }
  gomb51.classList.remove('hidden');
    gomb52.classList.remove('hidden');
      gomb53.classList.remove('hidden');
  }, 6000);


    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/img33.png';
    }
         setTimeout(() => {
        imago.src = './image/imga17.gif';
      }, 2000); 
      setTimeout(() => {
        imago.src = './image/img34.png';
      }, 4000); 
       setTimeout(() => {
        imago.src = './image/imga18.gif';
      }, 5000); 
       setTimeout(() => {
        imago.src = './image/img35.png';
      }, 6000); 
 setTimeout(() => {
const effekt = new Audio('./audio/effekt9.mp3');
    effekt.play();
     }, 2000); 
     if (hazigazda) {
      hazigazda.textContent = "Na, most hogy megvolt a kaja, a pia meg minden, zárjuk le a bulit egy jó kis filmnézéssel! Az alábbi kategóriák közül válassz egyet, és én abból indítok egy igazi mesterművet. Nagyon szépen köszönöm, hogy eljöttél a szülinapomra!";
    }  
  


     });
    }
      if (gomb49) {
  gomb49.addEventListener('click', () => {
gomb48.classList.add(`hidden`);
gomb49.classList.add(`hidden`);


     setTimeout(() => {
const gomb50 = document.getElementById('gomb50');
    if (gomb50) {
      gomb50.classList.remove('hidden');
    }
  gomb51.classList.remove('hidden');
    gomb52.classList.remove('hidden');
      gomb53.classList.remove('hidden');
  }, 2000);


    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga20.gif';
    }

      setTimeout(() => {
        imago.src = './image/img35.png';
      }, 2000); 
 

const effekt = new Audio('./audio/effekt10.mp3');
    effekt.play();

     if (hazigazda) {
      hazigazda.textContent = "Nem gond, így legalább több marad nekem. Zárásként arra gondoltam, nézzünk meg egy filmet! Az alábbi kategóriák közül válassz egyet, én pedig abból berakok egy igazi mesterművet. Nagyon szépen köszönöm, hogy eljöttél a szülinapomra!";
    }  
  


     });
    }
      if (gomb50) {
  gomb50.addEventListener('click', () => {
gomb50.classList.add(`hidden`);
gomb51.classList.add(`hidden`);
gomb52.classList.add(`hidden`);
gomb53.classList.add(`hidden`);
gomb37.classList.add(`hidden`);
gomb38.classList.add(`hidden`);
gomb39.classList.add(`hidden`);
gomb40.classList.add(`hidden`);
gomb41.classList.add(`hidden`);
gomb42.classList.add(`hidden`);
valaszok.classList.add(`hidden`);
  setTimeout(() => {
imago.classList.add(`hidden`);

  }, 2000);

 setTimeout(() => {
 if (rajz) {
      rajz.classList.remove('hidden');
    }
  }, 2000);


    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga19.gif';
    }



     if (hazigazda) {
      hazigazda.textContent = "Film cime: Elio. itt a link ha ad-blockered van: https://videa.hu/videok/film-animacio/meglepetesfilm-28.-hd-2025-wXpZBDFkJZYPn1U6?start=3.413868";
    }  
  if (currentAudio) {
      currentAudio.pause();
   
    }


     });
    }
     if (gomb51) {
  gomb51.addEventListener('click', () => {
gomb50.classList.add(`hidden`);
gomb51.classList.add(`hidden`);
gomb52.classList.add(`hidden`);
gomb53.classList.add(`hidden`);
gomb37.classList.add(`hidden`);
gomb38.classList.add(`hidden`);
gomb39.classList.add(`hidden`);
gomb40.classList.add(`hidden`);
gomb41.classList.add(`hidden`);
gomb42.classList.add(`hidden`);
valaszok.classList.add(`hidden`);
  setTimeout(() => {
imago.classList.add(`hidden`);

  }, 2000);

 setTimeout(() => {
 if (vigj) {
      vigj.classList.remove('hidden');
    }
  }, 2000);


    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga19.gif';
    }



     if (hazigazda) {
      hazigazda.textContent = "A film címe Dilis trió. Itt a link hozzá ha ad-blockered van:https://videa.hu/videok/film-animacio/a-dilis-trio-el3NYbZCwiT3IiQv?start=0.556109";
    }  
  
if (currentAudio) {
      currentAudio.pause();
   
    }

     });
    }
      if (gomb52) {
  gomb52.addEventListener('click', () => {
gomb50.classList.add(`hidden`);
gomb51.classList.add(`hidden`);
gomb52.classList.add(`hidden`);
gomb53.classList.add(`hidden`);
gomb37.classList.add(`hidden`);
gomb38.classList.add(`hidden`);
gomb39.classList.add(`hidden`);
gomb40.classList.add(`hidden`);
gomb41.classList.add(`hidden`);
gomb42.classList.add(`hidden`);
valaszok.classList.add(`hidden`);
  setTimeout(() => {
imago.classList.add(`hidden`);

  }, 2000);

 setTimeout(() => {
 if (akc) {
      akc.classList.remove('hidden');
    }
  }, 2000);


    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga19.gif';
    }



     if (hazigazda) {
      hazigazda.textContent = "Becstelen brigantyk a link ha ad blockered van:https://videa.hu/videok/film-animacio/becstelen-brigantyk-drama-tortenelmi-haborus-ekN0WumI6LJk3Our";
    }  
  
if (currentAudio) {
      currentAudio.pause();
   
    }

     });
    }
     if (gomb53) {
  gomb53.addEventListener('click', () => {
gomb50.classList.add(`hidden`);
gomb51.classList.add(`hidden`);
gomb52.classList.add(`hidden`);
gomb53.classList.add(`hidden`);
gomb37.classList.add(`hidden`);
gomb38.classList.add(`hidden`);
gomb39.classList.add(`hidden`);
gomb40.classList.add(`hidden`);
gomb41.classList.add(`hidden`);
gomb42.classList.add(`hidden`);
valaszok.classList.add(`hidden`);
  setTimeout(() => {
imago.classList.add(`hidden`);

  }, 2000);

 setTimeout(() => {
 if (horror) {
      horror.classList.remove('hidden');
    }
  }, 2000);


    const imago = document.querySelector('.imago');
    if (imago) {
      imago.src = './image/imga19.gif';
    }



     if (hazigazda) {
      hazigazda.textContent = "Fűrész - Újra játékban itt a link ha netan ad blockered van:https://videa.hu/videok/film-animacio/furesz-8-teljes-film-magyarul-a3fWBw0EFKmq4k8A?start=0.573607";
    }  
  
if (currentAudio) {
      currentAudio.pause();
   
    }

     });
    }