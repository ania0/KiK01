const label = document.querySelector('.label');

const listaElementow = document.querySelectorAll('.gameElement');
console.dir(listaElementow)

let turaX = true;
let plansza = Array(9).fill(null);
let koniec = false;

listaElementow.forEach(function(element){
  element.addEventListener('click', gra)
});

function gra(event) {
    if(koniec === true) return;
    
    let index = event.target.dataset.numer

    if (plansza[index] !== null) return;

    if( turaX === true) {
      event.target.textContent = "X";
      plansza[index] = "X"
      turaX = false;
      label.textContent = "Ruch: O"
    } else{
      event.target.textContent = "O";
      plansza[index] = "O"
      turaX = true;
      label.textContent = "Ruch: X"
    }
   sprawdzaj();
    
  }

function sprawdzaj(){
  let wyniki = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [1,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [6,4,2]

  ]
}
