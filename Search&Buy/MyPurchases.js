var utenti=JSON.parse(localStorage.getItem("utenti"));
    var carr=JSON.parse(sessionStorage.getItem("carrello"));
    console.log(carr);
    var carri=JSON.parse(sessionStorage.getItem("carrid"));

var id=sessionStorage.getItem("utente");
        var products=JSON.parse(localStorage.getItem("Prodotti"));
      
        console.log(products);
        sessionStorage.setItem("tipo","Clienti");
        var tipoUtente =sessionStorage.getItem("tipoUtente");
    
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
        if(tipoUtente=="c"){
          log.innerHTML=utenti[0].Clienti[id].Nome;
          lg.appendChild(log);

        }else{
          log.innerHTML=utenti[0].Venditori[id].Nome;
        
        lg.appendChild(log);
        log.innerHTML="SellProducts";
        lg.appendChild(log);
      }
        lg=document.getElementById("logoff");
        log=document.createElement('a');
        log.className="nav-link"
        log.href="Home.html";
        log.onclick="clr()"
        log.innerHTML="Log Off";
        lg.appendChild(log);
         
      }


        document.getElementById("bs").innerHTML=carr.toString();

        for(var i=0;i<utenti[0].Clienti[id].acquisti.length;i++){
         for(var j=0;j<products.length;j++){
          if(utenti[0].Clienti[id].acquisti[i].IDPR==products[j].ID){
            var idacq=utenti[0].Clienti[id].acquisti[i].IDacquisto;
      
          prD="<div class='col-3'> <img src='"+products[j].Immagine+"'> </div> <div class='col-8'><h5><a href='InfoProdotto.html?prodotto="+products[j].ID+"'>"+products[j].NomeProdotto+"</a></h5><br> Prezzo = "+products[j].Prezzo+" \u20AC <br> <hr> Data Di acquisto = "+utenti[0].Clienti[id].acquisti[i].DataAcq+" "+utenti[0].Clienti[id].acquisti[i].OraAcq; //ua2c serve a far apparire l'euro
          var parts=utenti[0].Clienti[id].acquisti[i].DataAcq.split("-");
          var orario=utenti[0].Clienti[id].acquisti[i].OraAcq.split(".");
          var data = new Date();
         if((data.getDate()-parts[0]==0||(data.getDate()-parts[0]==1&&orario[0]<=data.getHours()&&orario[1]<=data.Minutes()))&&parts[1]==data.getMonth()&&parts[2]==data.getFullYear()){
           prD=prD+" <button class='btn btn-danger' onclick='elim("+idacq+")'>Elimina acquisto</button> ";

          }
          prD=prD+"</div>";
          elem=document.getElementById("prodotti");
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

function elim(value){
  var utenti=JSON.parse(localStorage.getItem("utenti"));
  

  for(var i=0;i<utenti[0].Clienti[id].acquisti.length;i++){
    if(value==utenti[0].Clienti[id].acquisti[i].IDacquisto){
  

  utenti[0].Clienti[id].acquisti.splice(i,1);//elimina elemento dalla pos i,1 indica quanti elementi elimina
 
  localStorage.setItem("utenti", JSON.stringify(utenti));

  window.alert("AcquistoAnnullato");
   window.location.href="MyPurchases.html";

}
}
}
