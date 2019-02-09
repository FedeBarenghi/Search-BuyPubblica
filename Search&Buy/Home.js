 var carr=0;
    carr=JSON.parse(sessionStorage.getItem("carrello"));
    var tipoUtente=sessionStorage.getItem("tipoUtente");
    console.log(carr);
    var preferenza="all";
    localStorage.setItem("Prodotti", JSON.stringify(Prodotti));
    var utenti=JSON.parse(localStorage.getItem("utenti"));
    var products=JSON.parse(localStorage.getItem("Prodotti"));
    id=sessionStorage.getItem("utente");
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
          if(tipoUtente=="c"){
          log.innerHTML=utenti[0].Clienti[id].Nome;
          lg.appendChild(log);
        }else {
          log.innerHTML=utenti[0].Venditori[id].Nome;

        lg.appendChild(log);
        lg=document.getElementById("sell");
         log=document.createElement('a');
          log.className="nav-link";
          log.idName="sell";
          log.href="SellProducts.html";
          log.innerHTML="SellProducts";
        lg.appendChild(log);
        }
          lg.appendChild(log);
          lg=document.getElementById("logoff");
          log=document.createElement('a');
          log.className="nav-link"
          log.href="Home.html";
          log.setAttribute('onclick','clr()');
          
          log.innerHTML="Log Off";
          lg.appendChild(log);
           
        }
           console.log(utenti[0].Venditori[0].ID)
           console.log(utenti[0].Venditori[0].ID==products[0].IDvenditore);

          for(var i=0;i<products.length;i++){
          


              for(var j=0;j<utenti[0].Venditori.length;j++){
                if(utenti[0].Venditori[j].ID==products[i].IDvenditore){
                  venditore=utenti[0].Venditori[j].NomeAzienda;
                }
              }




            prD="<div class='col-3'> <img src='"+products[i].Immagine+"'> </div> <div class='col-8'><h5><a class='"+products[i].Categoria+"' href='InfoProdotto.html?prodotto="+products[i].ID+"'>"+products[i].NomeProdotto+"</a></h5><br> Prezzo = <span class='Prz'>"+products[i].Prezzo+"</span> \u20AC<br> <hr> Descrizione = <span class='descr'>"+products[i].Descrizione+" </span> <br> <hr>Venduto da = <a href= 'venditore.html?"+products[i].IDvenditore+"''>"+venditore+"</a> </div> <hr>";
            elem=document.getElementById("prodotti");
            newElem=document.createElement('div');
            newElem.className="row ";
            newElem.innerHTML=prD;
            elem.appendChild(newElem);
            newElem=document.createElement('div');
            newElem.className="row";
            newElem.innerHTML="<div class='col'><hr></div>";
            elem.appendChild(newElem);
          }/*else if (preferenza==products[i].Categoria||products[i].NomeProdotto.indexOf(preferenza)>-1){
          	prD="<div class='col-3'> <img src='"+products[i].Immagine+"'> </div> <div class='col-8'><h5>"+products[i].NomeProdotto+"</h5><br> Prezzo="+products[i].Prezzo+" <br> Descrizione="+products[i].Descrizione+"</div>";
            elem=document.getElementById("prodotti");
            newElem=document.createElement('div');
            newElem.className="row";
            newElem.innerHTML=prD;
            elem.appendChild(newElem);
            newElem=document.createElement('div');
            newElem.className="row";
            newElem.innerHTML="<div class='col'><hr></div>";
            elem.appendChild(newElem);
          }*/
      


         
    
    document.getElementById("bs").innerHTML=carr;
  }function researchCat(value){
      elem=document.getElementById("prodotti");
      console.log(value);
   var c = elem.children;
   console.log();
   for(var i=0;i<c.length;i++){
    
    c[i].style="null"; // annulla l'opzione none , in modo tale che posso passare da una categoria ad un'altra
    if(value!="all"){
   if(value!=c[i].children[1].children[0].children[0].className){ //poichè per raggiungere il nome devo scorrere i figli dei figli 
    c[i].style.display="none";
   i++;
  c[i].style.display="none";
   }else{//poichè per raggiungere il nome devo scorrere i figli dei figli 
   i++;
   } //salto sempre una riga perchè è la riga separatoria 

  }
  }
  }
  
function venditore(value){
window.location.href="venditore.html?"+value;


}
var tiporicerca;
  function research(){

    var name =document.getElementById("serc").value;
      elem=document.getElementById("prodotti");
      var c = elem.children;
   console.log(c[0].children[1].children[5].innerHTML);
    console.log(name);
  if(tiporicerca=="Nome"){
   for(var i=0;i<c.length;i++){
    c[i].style="null"; 

   
    if(c[i].children[1].children[0].children[0].innerHTML.toUpperCase().indexOf(name.toUpperCase())<=-1){ //poichè per raggiungere il nome devo scorrere i figli dei figli (toUpperCase rende tutto maiuscolo così non ho problemi di lettere q)
    c[i].style.display="none";
  i++;
   c[i].style.display="none";
   }else{ i++;} //salto sempre una riga perchè è la riga separatoria 

     }
   
  }else if(tiporicerca=="PrezzoMin"){
   for(var i=0;i<c.length;i++){
  c[i].style="null"; 
   
    if(parseInt(name)>=parseInt(c[i].children[1].children[2].innerHTML)){ //poichè per raggiungere il Prezzo devo scorrere i figli dei figli 
    c[i].style.display="none";
  i++;
   c[i].style.display="none";
   }else{ i++;} //salto sempre una riga perchè è la riga separatoria 

     }
   
  }else if(tiporicerca=="PrezzoMax"){
   for(var i=0;i<c.length;i++){

   c[i].style="null"; 
    if(parseInt(name)<parseInt(c[i].children[1].children[2].innerHTML)){ //poichè per raggiungere il Prezzo devo scorrere i figli dei figli 
    c[i].style.display="none";
  i++;
   c[i].style.display="none";
   }else{ i++;} //salto sempre una riga perchè è la riga separatoria 

     }
   
  }else if(tiporicerca=="Descrizione"){
   for(var i=0;i<c.length;i++){
     c[i].style="null"; 
   
      if(c[i].children[1].children[5].innerHTML.toUpperCase().indexOf(name.toUpperCase())<=-1){ //poichè per raggiungere la descrizione devo scorrere i figli dei figli l'upper case serve perchè così ricerco non considerando se le lettere sono maiuscole o minuscole 
    c[i].style.display="none";
     i++;
   c[i].style.display="none";
   }else{ i++;} //salto sempre una riga perchè è la riga separatoria 

     }
   
  }
  }


  function infoProdotto(value){
    
    window.location.href="InfoProdotto.html?prodotto="+value;

  }
  function clr(){
    window.alert("logOff effettuato");
  sessionStorage.removeItem("utente");
  sessionStorage.removeItem("carrello");
  window.location.href="Home.html";
  }
  var tiporicerca;
  function tipoRicerca(value){
    tiporicerca=value;
     document.getElementById("dropdownLink").innerHTML="Cerca Per: "+value;
  }
  