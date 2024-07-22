//var er=1;
function randomStory() {
    const subjects = ["Ein Zauberer", "Ein Ninja", "Ein Roboter", "Ein Drachen", "Ein Pirat", "Lukas", "Ferdinant der Regenwurm"];
    const verbs = ["kaufte", "entdeckte", "sicherte", "erkundet", "kaufte"];
    const objects = ["eine geheime Schriftrolle", "ein geheimnisvolles Land", "eine Märchenstadt", "ein magisches Reich", "einen verborgenen Schatz", "einen Bugatti und eine fette Villa und 1000 mio.:) "];
    const objects2 =[" und eine Bratwurst", "und eine Banane", "und einen Babyschnuller", "und eine Unterhose", "und ein Pfurzkissen"]
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];
    const object2 = objects2[Math.floor(Math.random() * objects2.length)];

    return `${subject} ${verb} ${object} ${object2}.`;
}

function button_click(){
//const erg = 8767*644+555;
let ra = randomStory()
var randomstory =//"Geschichten: <br/>" + 
ra;
console.log(randomstory);

//console.log("lukashi Max monie  fotiete ist cool Max sagt Lukasbs und Minikrft +Gtea 5 " + erg);

document.getElementById("ergebnis").innerHTML = randomstory;
}