function button_click(){
//const erg = 8767*644+555;
//let ra = randomStory()
const zahl = [];
const loopnr = document.getElementById('loop').value;
for(i=1;i<=loopnr;i++){
     er = i*i+i*i+i;
     zahl[i]=("<div>Lukas rechnet: "+i+" x "+i+" + "+i+" x "+i+" + "+i+ " = "+er+"<br/><div/>");
   // console.log("Lukas rechnet: "+i+" x "+i+" + "+i+" x "+i+" + "+i+ " = "+er)
//console.log("lukashi Max monie  fotiete ist cool Max sagt Lukasbs und Minikrft +Gtea 5 " + erg);
}
const str=zahl.join("");
document.getElementById('ergebnis').innerHTML = str;
//document.getElementById("ergebnis").innerHTML= zahl.toString();
}