
let cells = [];
let rows = [];
let number = 16;

const body = document.body;
 const grid = document.querySelector("#grid");
// grid.setAttribute("style","display:flex");
// grid.setAttribute("style","background-color:azure");
const button = document.createElement("button");
const grid2 = document.createElement("div");
//body.appendChild(grid);
button.setAttribute("style", "background-color:#666; color:white; font-weight:bold; padding:5px 15px; border-radius: 10px; margin:20px");
button.textContent = "Reimposta griglia";
button.addEventListener("click", function(e) {
  number = +prompt("Inserisci il numero di righe e colonne",0);

  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  createGrid(number);
})




function createGrid(number) 
{for (let i=0;i<number;i++) {
    const rowname= `row${i}`;
    rows[rowname] = document.createElement("div");
    rows[rowname].style.display = "flex";
    for(let j=0;j<number;j++) {
        const cellname= `cell${i}${j}`;
        cells[cellname] = document.createElement("div");

        cells[cellname].setAttribute("style", `border: 1px solid black; flex:1`);

        cells[cellname].addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = "blue";
            body.appendChild(button);
        })
        
        grid.appendChild(rows[rowname]); 
        rows[rowname].appendChild(cells[cellname]);
    }
}}

createGrid(number);