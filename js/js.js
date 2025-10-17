//alle har været inde over det meste af koden
console.log("JavaScript kører...");

const fishList = [
  "Dvaergkejser",
  "doryfisk",
  "lilleklovnfisk",
  "lillegraafisk",
  "lilleblaafisk",
  "lillelyseblaafisk",
  "snegl"
];

const infoBox = document.getElementById("info");
const pirateWalk = document.getElementById("piratmandgaar");
const piratePoint = document.getElementById("piratmandpeger");

fishList.forEach(id => {
  const fish = document.getElementById(id);
  if (fish) {
    fish.addEventListener("click", () => showInfo(id));
  }
});

//Lavet af Julie og Anton
function showInfo(fishName) {
  infoBox.innerHTML = `
    <h2>${fishName}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <button id="closeInfo">Luk</button>
  `;
  infoBox.classList.remove("hidden");
  pirateWalk.style.display = "none";
  piratePoint.style.display = "block";

  document.getElementById("closeInfo").addEventListener("click", hideInfo);
}

function hideInfo() {
  infoBox.classList.add("hidden");
  pirateWalk.style.display = "block";
  piratePoint.style.display = "none";
}
