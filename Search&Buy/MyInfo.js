
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
    for (var i=0;i<s0.length;i++) {
    s2 = s0[i].split("=");
 if (s2[0] == "preferenza") {
     preferenza=s2[1];

                            }
          }
    
    
    //creo la home con i prodotti
       

       function caricamento(){
              
         var lg=document.getElementById("log");
        var log=document.createElement('a');
        log.className="nav-link";
        log.href="MyInfo.html";

         if(tipoUtente=="c"){
           document.getElementById("myinfoV").style.display="none";
          log.innerHTML=utenti[0].Clienti[id].Nome;
          lg.appendChild(log);
           document.getElementById("Nome").value=utenti[0].Clienti[id].Nome;
         document.getElementById("Cognome").value=utenti[0].Clienti[id].Cognome;
         document.getElementById("Email").value=utenti[0].Clienti[id].Email;
         document.getElementById("Password").value=utenti[0].Clienti[id].Password;
         document.getElementById("Indirizzo").value=utenti[0].Clienti[id].Indirizzo;
        document.getElementById("TipoPagamento").value=utenti[0].Clienti[id].TipoPagamento;
        document.getElementById("DataDiNascita").value=utenti[0].Clienti[id].DataDiNascita;
        }else{
          log.innerHTML=utenti[0].Venditori[id].Nome;
           document.getElementById("myinfo").style.display="none";
            
          lg.appendChild(log);
           document.getElementById("NomeV").value=utenti[0].Venditori[id].Nome;
         document.getElementById("TipoDiAttivita").value=utenti[0].Venditori[id].TipoDiAttivita;
         document.getElementById("EmailV").value=utenti[0].Venditori[id].Email;
         document.getElementById("PasswordV").value=utenti[0].Venditori[id].Password;
         document.getElementById("IndirizzoV").value=utenti[0].Venditori[id].Indirizzo;
        document.getElementById("PartitaIva").value=utenti[0].Venditori[id].PartitaIva;
        document.getElementById("Numero").value=utenti[0].Venditori[id].NumeroDiTelefono;
        document.getElementById("DataDiNascitaV").value=utenti[0].Venditori[id].DataNascita;
        document.getElementById("NomeAzienda").value=utenti[0].Venditori[id].NomeAzienda;

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
        
         


          
          /*prD="<div class='row justify-content-center'>Nome = "+utent.Nome+" <br> Cognome = "+utent.Cognome+"<br> Indirizzo Email = "+utent.Email+"<br> ID = "+utent.ID+"<br> Tipo di pagamento = "+utent.TipoPagamento+"<br> Data Di Nascita = "+utent.DataNascita+"<br> Indirizzo = "+utent.Indirizzo+" <br> </div> <div class='row justify-content-center'><button onclick='Delete()' class='btn btn-danger'>Delete Account</a></div>";
          elem=document.getElementById("myinfo");
          newElem=document.createElement('div');
          newElem.className="row ";
          newElem.innerHTML=prD;
          elem.appendChild(newElem);*/
         

        

       
  var bs=0;
  document.getElementById("bs").innerHTML=bs;
}

function Delete(){
  var utenti=JSON.parse(localStorage.getItem("utenti"));

  
    if(utenti[0].Clienti[id].ID){
  utenti[0].Clienti.splice(id,1);
  localStorage.setItem("utenti", JSON.stringify(utenti));
  sessionStorage.removeItem("utente");
  window.alert("accountEliminato");
   window.location.href="Home.html";
return false;
  }
 }


function research(value){
  
  window.location.href="Home.html?preferenza="+value;



}
function infoProdotto(value){
  
  window.location.href="InfoProdotto.html?prodotto="+value;



}
function clr(){
sessionStorage.removeItem("id");
}
function Modify(){
  window.alert("Dati Modificati");

  if (tipoUtente=="c"){

   utenti[0].Clienti[id].Nome=document.getElementById("Nome").value;
   utenti[0].Clienti[id].Cognome=document.getElementById("Cognome").value;
   utenti[0].Clienti[id].Email=document.getElementById("Email").value;
   utenti[0].Clienti[id].Password=document.getElementById("Password").value;
   utenti[0].Clienti[id].DataDiNascita=document.getElementById("DataDiNascita").value;
   utenti[0].Clienti[id].Indirizzo=document.getElementById("Indirizzo").value;
   utenti[0].Clienti[id].TipoPagamento=document.getElementById("TipoPagamento").value;
 }else{
   
   utenti[0].Venditori[id].Nome=document.getElementById("NomeV").value;
   utenti[0].Venditori[id].TipoDiAttivita=document.getElementById("TipoDiAttivita").value;
   utenti[0].Venditori[id].PartitaIva=document.getElementById("PartitaIva").value;
   utenti[0].Venditori[id].NomeAzienda=document.getElementById("NomeAzienda").value;
   utenti[0].Venditori[id].Password=document.getElementById("PasswordV").value;
   utenti[0].Venditori[id].Email=document.getElementById("EmailV").value;
   utenti[0].Venditori[id].DataNascita=document.getElementById("DataDiNascitaV").value;
   utenti[0].Venditori[id].NumeroDiTelefono=document.getElementById("Numero").value;
  utenti[0].Venditori[id].Indirizzo=document.getElementById("Indirizzo").value;

 }
localStorage["utenti"]=JSON.stringify(utenti);
  window.location.href="MyInfo.html";

}