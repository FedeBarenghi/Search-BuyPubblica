 var utenti =JSON.parse(localStorage.getItem("utenti"));
    console.log(utenti);
    var carr=JSON.parse(sessionStorage.getItem("carrello"));
    console.log(carr);
    var carri=JSON.parse(sessionStorage.getItem("carrid"));
    console.log(carri);
        sessionStorage.setItem("Prodot", JSON.stringify(Prodotti));

        var products=JSON.parse(sessionStorage.getItem("Prodot"));
     
        console.log(products);
   
   var url, s0, s2,ut,id;  // divido il link per recuperare l'id
    url = document.location.href;
    s0 = url.split("?");//prendo la variabile s0[1]perchè contiene l'url al lato destro 
    for (var i=0;i<s0.length;i++) {
    s2 = s0[i].split("=");
 if (s2[0] == "preferenza") {
     preferenza=s2[1];

                            }
          }
    
    
    //creo la home con i prodotti
       

       function caricamento(){
        if (id==null){
          var lg=document.getElementById("log");
        var log=document.createElement('a');
        log.className="nav-link";
        log.href="LoginS&B.html";
        log.innerHTML="Login";
        lg.appendChild(log);
       
      } else {
         var lg=document.getElementById("log");
        var log=document.createElement('a');
        log.className="nav-link";
        log.idName="inf";
        log.href="MyInfo.html";
        log.innerHTML=utent[0].Nome;
        lg.appendChild(log);
        lg=document.getElementById("logoff");
        log=document.createElement('a');
        log.className="nav-link"
        log.href="Home.html";
        log.onclick="clr()"
        log.innerHTML="Log Off";
        lg.appendChild(log);
         
      }


        document.getElementById("bs").innerHTML=carr.toString();
        if(carri.length!=0){
          elem=document.getElementById("prod");
          newElem=document.createElement('a');
          newElem.className="btn btn-primary";
          newElem.setAttribute('id','buybutton');
          newElem.setAttribute('onclick','buy()');
          newElem.innerHTML="BuyAll"
       elem.appendChild(newElem);
      }

        for(var i=0;i<carri.length;i++){
         for(var j=0;j<products.length;j++){
          if(carri[i]==products[j].ID){
      
          prD="<div class='col-3'> <img src='"+products[j].Immagine+"'> </div> <div class='col-8'><h5><a href='InfoProdotto.html?prodotto="+products[j].ID+"'>"+products[j].NomeProdotto+"</a></h5><br> Prezzo="+products[j].Prezzo+" <br> <hr> Descrizione="+products[j].Descrizione+" </div> <hr>";
          elem=document.getElementById("prod");
          newElem=document.createElement('div');
          newElem.className="row ";
          newElem.innerHTML=prD;
          elem.appendChild(newElem);
          newElem=document.createElement('div');
          newElem.className="row";
          newElem.innerHTML="<div class='col'><hr></div>";
          elem.appendChild(newElem);
          j=j+products.length;
        }
      }
        
    }

       
  
  document.getElementById("bs").innerHTML=carr.toString();
}
function research(value){
  
  window.location.href="Home.html?preferenza="+value;



}
function infoProdotto(value){
  
  window.location.href="ShoppingBasket.html?prodotto="+value;



}
function clr(){
sessionStorage.removeItem("utente");
}
function buy(){

  for(var i=0;i<carri.length;i++){
    
    utenti[0].Clienti[0]["acquisti"].push({"IDPR":carri[i],"DataAcq":new Date()});
  
  
    localStorage["utenti"]=JSON.stringify(utenti);
    
    
     
  }
  window.alert("acquisto effettuato");
 window.location.href="Home.html";
 sessionStorage.removeItem("carello");
 sessionStorage.removeItem("carrid");
 sessionStorage.setItem("carrello","0");
 var arr=[];
 sessionStorage.setItem("carrid",JSON.stringify(arr));
}
var t="c";
function radiovalue(value){
  if (value=="c"){
t="c";
  document.getElementById("c").style.display="block";
  document.getElementById("v").style.display="none";
}else{
  t="v";
  document.getElementById("v").style.display="block";
  document.getElementById("c").style.display="none";
}
}
var pag;
function pag(value){
  pag=value;
}
var priv="no";
function priv(value){
  priv=value;
}

function Registratio(){

 window.alert("registrato");
  if (t=="c"){
   utenti[0]["Clienti"].push({"ID":(utenti[0].Clienti.length+1),"Nome":document.getElementById("Nome").value, "Cognome":document.getElementById("Cognome").value, "Email": document.getElementById("Email").value,"Password":document.getElementById("Password").value,"DataDiNascita":document.getElementById("DataDiNascita").value,"Indirizzo":document.getElementById("Indirizzo").value,"tipo":"c","TipoPagamento":pag,"acquisti":new Array(),"Privacy":document.getElementById("Privacy")});  
   
 }else{

   utenti[0]["Venditori"].push({"ID":(utenti[0].Venditori.length+1),"Nome":document.getElementById("NomeV").value, "PartitaIva":document.getElementById("Iva").value, "Email": document.getElementById("EmailV").value,"Password":document.getElementById("PasswordV").value,"DataDiNascita":document.getElementById("DataDiNascitaV").value,"NumeroDiTelefono":document.getElementById("NumeroDiTelefono").value,"tipo":"v","TipoDiAttivita":document.getElementById("TipoDiAttivita").value}); 
 }
localStorage["utenti"]=JSON.stringify(utenti);
window.location.href="LoginS&B.html";

}
