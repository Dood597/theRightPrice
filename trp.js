function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


// Etape 1 - Sélectionner nos éléments
let input= document.getElementById("price");
let error= document.querySelector("small");
let form= document.getElementById("form");

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let ramdomNbr = Math.floor(Math.random() * 1001);
let rounds = 0;
let choosedNumber;

// Etape 6 - Créer la fonction vérifier
function checkIt(number){
  
  let instruction = document.createElement("div");

  if (number < ramdomNbr) {

    instruction.textContent = "#" + rounds + " It's more";
    instruction.className = "instruction plus";

  } else if (number > ramdomNbr) {

    instruction.textContent = "#" + rounds + " It's less";
    instruction.className = "instruction moins";

  }else{

    instruction.textContent = "#" + rounds + " Congrats !";
    instruction.className = "instruction fini";
    input.disabled = true;
  }

  document.querySelector("#instructions").prepend(instruction);

}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {

   if (isNaN(input.value)) {
    error.style.display = "inline";
    input.value = "";
   }else{
    error.style.display = "none";
}

});

// Etape 5 - Agir à l'envoi du form
form.addEventListener('submit', (e) => {

    // Cancel Event
    e.preventDefault();
    
    if(isNaN(input.value) || input.value == ""){
      // Red border
      input.style.borderColor = "red";
    }else{
      rounds++;
      input.style.borderColor = "silver";
      choosedNumber = input.value;
      input.value = "";
      checkIt(choosedNumber);
    }

});







