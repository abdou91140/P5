var numberChoice = (prompt(""));
var typeSentence = (prompt(""));

//* les partie de la phrase de type 1
var firstPart1 = ["La cuisine", "La chaise", "Une bouteille", "Un banc", "Une télé", "Le four"];
var secondePart1 = ["choque par", "avertie", "voulais", "vient", "regarde", "passe"];
var thirdPart1 = ["l'amour", "une overdose de chouquette", "un mois en avance", "le coté obscure ", "une personne", "un sage, un saint"];
var lastPart1 = [".", "!", "?"];

//* les partie de la phrase de type 1
var firstPart2 = ["Alix", "Madou", "Bryan", "Esteban", "Gloria", "Momo"];
var secondePart2 = ["baigne", "brise", "balade", "balance", "balaye", "banni", "baptise"];
var thirdPart2 = ["Rihanna", "le jeune buffle", "moi", "le pouvoir", "une pomme", "un sage , un saint"];
var lastPart2 = [".", "!", "?"];

//* variable concatené parla fonction ramdomSentence
var type1, type2;
type1 = ramdomSentence(firstPart1)+ " " +ramdomSentence(secondePart1)+ " " +ramdomSentence(thirdPart1)+ " " +ramdomSentence(lastPart1);
 type2 = ramdomSentence(firstPart2)+ " " +ramdomSentence(secondePart2)+ " " +ramdomSentence(thirdPart2)+ " " +ramdomSentence(lastPart2);

function ramdomSentence(array) { 
  return array[Math.floor(Math.random() * array.length)]
 }
function randomFor() { 

  for ( i = 0 ; i <= numberChoice ; i++) { 
console.log(type1[Math.floor(Math.random() * 5)])
            }
  
}

randomFor();
