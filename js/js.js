/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Ok, JavaScriptet kører ...');

/* fiskeobjekt */
/*const guldfisk = {
    navn: "Guldfisk",
    info: "Fisk, der stammer fra den mystiske sø ...",
    image: "gladFisk_mini.png",
    xPos: 400,
    yPos: 150,
    speed: 12
}
    */

/* Placer fisken på scenen */
/*scene.innerHTML += `
    <figure 
     id="${guldfisk.navn}" 
     onclick="fiskInfo('${guldfisk.info}')"
     >
        <img 
         src="images/${guldfisk.image}" 
         alt="${guldfisk.info}" >
    </figure>
`

/* Indsætter egenskaben "info" fra et objekt */
/*function fiskInfo(tekst){
    console.log("fiskInfo() svarer ...") // test
    info.innerHTML = "<p>" + tekst + "</p>"

    /*
        Og her kunne intruktionerne så fortsætte med:
            - afspil lyd, video
            - start andre animationer ved at kalde deres funktioner
            - etc.
    */


/* Funktion der viser infoboks når man klikker på doryfisk */
function bang() {
  const info = document.getElementById("info");
  if (!info) {
    console.error("Elementet #info findes ikke i DOM'en.");
    return;
  }

  info.innerHTML = `
    <div id="infokasse" role="dialog" aria-label="Fisk info" onclick="badaboom()">
      <h2>Paletkirurgfisk (Dory)</h2>
      <p>15–23 cm lang.<br>Levetid: 5–7 år.<br>Lever i tropiske koralrev.</p>
      <button id="lukInfoknap" aria-label="Luk info">Luk</button>
    </div>
  `;
  // Sikr at knappen lukker boksen (bedre end kun onclick på div)
  const knap = document.getElementById("lukInfoknap");
  if (knap) knap.addEventListener('click', badaboom);

  // Valgfrit: sæt fokus til dialogen for tilgængelighed
  const infokasse = document.getElementById("infokasse");
  if (infokasse) infokasse.focus();
}

function badaboom() {
  document.getElementById("infokasse").remove();
}