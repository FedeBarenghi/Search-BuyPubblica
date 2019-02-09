var carr=parseInt(JSON.parse(sessionStorage.getItem("carrello")));
    var utenti=JSON.parse(localStorage.getItem("utenti"));
 var id=sessionStorage.getItem("utente");
var carri=[];
  carri=JSON.parse(sessionStorage.getItem("carrid"));
console.log(carri);

        var preferenza="all";
    var url, s0, s2,prod; // divido il link per recuperare l'id
    url = document.location.href;
    s0 = url.split("?");//prendo la variabile s0[1]perchè contiene l'url al lato destro 
    for (var i=0;i<s0.length;i++) {
    s2 = s0[i].split("=");
     


    if (s2[0] == "prodotto") {
    prod=s2[1];

                            }
          

                            }
      
    
          var products=JSON.parse(localStorage.getItem("Prodotti"));
      
         utent=JSON.parse(sessionStorage.getItem("utente"));
        console.log(products);
      
         document.getElementById("bs").innerHTML=carr;
        document.getElementById("nomeCliente").innerHTML=utente[0].Clienti[id].Nome;
      

      
       function infoProdotto(){
        
        
         
        for(var i=0;i<products.length;i++){

              for(var j=0;j<utenti[0].Venditori.length;j++){
                if(utenti[0].Venditori[j].ID==products[i].IDvenditore){
                  venditore=utenti[0].Venditori[j].NomeAzienda;
                }
              }
          if(prod==products[i].ID&&parseInt(products[i].Quantita)>0){
          prD="<div class='col-3'> <img src='"+products[i].Immagine+"' id = 'infoprodottoimmagine'> </div> <div class='col-6'><h5>"+products[i].NomeProdotto+" <p id='VenditoreProd'>Venditore = <a href=venditore.html?"+products[i].IDvenditore+">"+venditore+"</a></p></h5><br> <hr> Descrizione = "+products[i].Descrizione+"</div> <div class='col-3'>  <div class='card'><div class='card-body'><h5 class='card-title'>Prezzo = "+products[i].Prezzo+"\u20AC</h5><p class='card-text'>Pezzi disponibili= "+products[i].Quantita+"<br> Tipo di spedizione = "+products[i].TipoSpedizione+"</p><a href='#' class='btn btn-primary' onclick='addsb()'>Add to Shopping Basket</a></div></div> ";
          elem=document.getElementById("prodotti");
          newElem=document.createElement('div');
          newElem.className="row";
          newElem.innerHTML=prD;
          elem.appendChild(newElem);
        }
        else if(prod==products[i].ID&&parseInt(products[i].Quantita)==0){
          prD="<div class='col-3'> <img src='"+products[i].Immagine+"' id='infoprodottoimmagine'> </div> <div class='col-6'><h5>"+products[i].NomeProdotto+" <p>Venditore = <a href=venditore.html?"+products[i].IDvenditore+">"+venditore+"</a></h5><br> <p><hr> Descrizione="+products[i].Descrizione+"</div> <div class='col-3'>  <div class='card'><div class='card-body'><h5 class='card-title'>Prezzo= "+products[i].Prezzo+"</h5><p class='card-text'>Pezzi disponibili= "+products[i].Quantita+"<br> Tipo di spedizione= "+products[i].TipoSpedizione+"</p><button class='btn btn-danger' disabled>ProdottoEsaurito!</a></div></div> ";
          elem=document.getElementById("prodotti");
          newElem=document.createElement('div');
          newElem.className="row";
          newElem.innerHTML=prD;
          elem.appendChild(newElem);
        }
      }
     
       }
function addsb(){
   carri[carr]=prod;
  carr++;
  console.log(carr);
  window.alert("elemento aggiunto al carrello");
  document.getElementById("bs").innerHTML=carr.toString();
  console.log(carri);
  sessionStorage.setItem("carrid",JSON.stringify(carri));
  sessionStorage.setItem("carrello",carr.toString());

}
