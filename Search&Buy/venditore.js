var preferenza="all";
        sessionStorage.setItem("Prodot", JSON.stringify(Prodotti));
        var utenti=JSON.parse(localStorage.getItem("utenti"));
        var products=JSON.parse(sessionStorage.getItem("Prodot"));
        var id=sessionStorage.getItem("utente");
        console.log(products);
        var tipoUtente=sessionStorage.getItem("tipoUtente");
   
   var url, s0, s2,ut,id;  // divido il link per recuperare l'id
    url = document.location.href;
    s0 = url.split("?");//prendo la variabile s0[1]perchè contiene l'url al lato destro 
    
    //creo la home con i prodotti
       

       function caricamento(){
              
         var lg=document.getElementById("log");
        var log=document.createElement('a');
        log.className="nav-link";
        log.href="MyInfo.html";

         if(tipoUtente=="c"){
          
          log.innerHTML=utenti[0].Clienti[id].Nome;
          lg.appendChild(log);
          
        }else{
          log.innerHTML=utenti[0].Venditori[id].Nome;
        
        lg.appendChild(log);
        lg=document.getElementById("sell");
         log=document.createElement('a');
          log.className="nav-link";
          log.idName="sell";
          log.href="SellProducts.html";
          log.innerHTML="SellProducts";
       // lg.appendChild(log);
        }
      
         console.log(utenti[0].Clienti[id]);
        var vend;
        for(var i=0;i<utenti[0].Venditori.length;i++){
          if (s0[1]==utenti[0].Venditori[i].ID){
           vend=utenti[0].Venditori[i];
          }
        }
         console.log(vend);


           prD=" <div class='col-6'><h5>"+vend.NomeAzienda+"<br> Proprietario = "+vend.Nome+" <br> Tipo Di Attivita = "+vend.TipoDiAttivita+" <br> Numero Di Telefono = "+vend.NumeroDiTelefono+" <br> Indirizzo = "+vend.Indirizzo+"</div>";
          elem=document.getElementById("myinfo");
          newElem=document.createElement('div');
          newElem.className="row";
          newElem.innerHTML=prD;
          elem.appendChild(newElem);
         

        

       
  var bs=0;
  document.getElementById("bs").innerHTML=bs;
}


function infoProdotto(value){
  
  window.location.href="InfoProdotto.html?prodotto="+value;



}
function clr(){
sessionStorage.removeItem("utente");
}