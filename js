var numberChoice = (prompt(""));
var typeSentence = (prompt(""));

//* les partie de la phrase de type 1
var firstPart1 = ["La cuisine", "La chaise", "Une bouteille", "Un banc", "Une télé", "Le four"];
var secondePart1 = ["écoute", "avertie", "voulais", "vient", "regarde", "passe"];
var thirdPart1 = ["l'amour", "une overdose de chouquette", "à moi", "le coté obscure ", "à personne", "un sage, un saint"];
var lastPart1 = [".", "!", "?"];

//* les partie de la phrase de type 1
var firstPart2 = ["Alix", "Madou", "Bryan", "Esteban", "Gloria", "Momo"];
var secondePart2 = ["baigne", "brise", "balade", "balance", "balaye", "banni", "baptise"];
var thirdPart2 = ["Rihanna", "le jeune buffle", "moi", "le pouvoir", "une pomme", "un sage , un saint"];
var lastPart2 = [".", "!", "?"];

//* variable concatené parla fonction ramdomSentence


//* variable concatené parla fonction ramdomSentence
var type1, type2;
 type1 = ramdomSentence(firstPart1)+ " " +ramdomSentence(secondePart1)+ " " +ramdomSentence(thirdPart1)+ " " +ramdomSentence(lastPart1);
 type2 = ramdomSentence(firstPart2)+ " " +ramdomSentence(secondePart2)+ " " +ramdomSentence(thirdPart2)+ " " +ramdomSentence(lastPart2);

//* création de la fonction pour générer aléatoirement les blocs de citations
function ramdomSentence(array) { 
  return array[Math.floor(Math.random() * array.length)]
 }

//* fonction qui agis sur le nombre de phrase et le type de phrase
function choice(){
   
   for(var i = 0 ; i < (numberChoice); i++) { 
   
  if (typeSentence === "1") { 
    
  console.log(type1); }

if (typeSentence === "2")  { 
  console.log (type2) ;}
 else { alert("Mauvais numéro");}
    }
 }

choice();

choice();
