/*   Kihívás  modal   

login = ["gizi", "matyi", "Béla"]
passw = ["fkjsgfks","454325khh", "Edina1975"]

document.querySelector('.inputlogin').value;
document.querySelector('.inputpassw').value;

megfelel akkor Modal -> Succesfull , ha nem akkor access denied */
// const modal = document.querySelector('.modal');
// const false1 = document.querySelector('.modalFalse');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');

const usernames = [
  { username: "1", password: "1" },
  { username: "Simon", password: "macskavagyok" },
  { username: "MiraÚrnő", password: "Öntelt-vagyok" },
  { username: "Morty", password: "csakszeressetek01" },
];

// Függvény a beléptetés ellenőrzésére
function ellenorzes(username, password) {
  // Végigmegyünk a tömbön
  for (var i = 0; i < usernames.length; i++) {
    var felhasznalo = usernames[i];
    // Ellenőrizzük a felhasználónév és jelszó egyezését
    if (
      felhasznalo.username === username &&
      felhasznalo.password === password
    ) {
      return true; // Egyezés esetén visszaadunk igaz értéket
      
    }
  }
  return false; // Ha nem találtunk egyezést, akkor visszaadunk hamis értéket
}

// function showSuccessModal() {
//   var modal = document.getElementById("modal");
//   modal.style.diplay = 'block';
// }

// function closeModal() {
//   var modal = document.getElementById("modal");
//   modal.style.display = "none";
// }

// Űrlap eseménykezelő hozzáadása
var form = document.getElementById("login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Megakadályozza az alapértelmezett űrlap beküldési műveletét

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (ellenorzes(username, password)) {       
    // showSuccessModal();
    alert('Sikeres bejelentkezés!')
    console.log("Sikeres belépés!");    
      // További műveletek a sikeres belépés esetén
  } else {
      alert('Hibás felhasználónév vagy jelszó!')
      console.log("Hibás felhasználónév vagy jelszó!");
      // További műveletek a sikertelen belépés esetén  
    }
});

// btnCloseModal.addEventListener('click', function(){
//   modal.classList.add('hidden');  
// });

// for (let i=0; i < btnOpenModal.length; i++) {
//   console.log(btnOpenModal[i].addEventListener('click',
//   function() {
//       console.log('Button clicked');
//       console.log(btnOpenModal[i].textContent);
//       modal.classList.remove('hidden');          
//   }));

// for (let i=0; i < btnOpenModal.length; i++) {
//   console.log(btnOpenModal[i].addEventListener('click',
//   function() {
//       console.log('Button clicked');
//       console.log(btnOpenModal[i].textContent);
//       false1.classList.remove('hidden');          
//   }));