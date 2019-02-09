  if(localStorage.getItem("utenti")==null){
      localStorage.setItem("utenti", JSON.stringify(Utenti));
    }
      sessionStorage.setItem("carrello","0");
      var listu=JSON.parse(localStorage.getItem("utenti"));

    

      var arr=[];
      sessionStorage.setItem("carrid",JSON.stringify(arr));
  		
        
  		
  		function login(){
  			var e = document.getElementById("Email").value; // ottengo il valore corrente nell box Email
  			var  p = document.getElementById("Password").value; // ottengo il  valore corrente nel box Password
  			
  			console.log(JSON.stringify(listu[0].Clienti[0]));
        console.log(JSON.stringify(Utenti[0].Venditori[0]));
        //controllo i dati se presenti nel file JSON
      
          for(var i=0;i<listu[0].Clienti.length;i++){
            
              if (listu[0].Clienti[i].Email == e &&listu[0].Clienti[i].Password == p){
                sessionStorage.setItem("utente",i);
                       sessionStorage.setItem("tipoUtente","c");
			           window.location.href="Home.html";//mi ridirigo alla home 
				         return false;//senza non funziona il reindirizzamento , poichè serve a svuotare il form 
                                                                                        }
  			        
              
               for(var i=0;i<listu[0].Venditori.length;i++){
              if (listu[0].Venditori[i].Email == e &&listu[0].Venditori[i].Password == p){
                sessionStorage.setItem("utente",i);
                sessionStorage.setItem("tipoUtente","v");
                 window.location.href="Home.html";//mi ridirigo alla home 
                 return false;//senza non funziona il reindirizzamento , poichè serve a svuotare il form 
                              

                                                                                           }
  			         }
  			 window.alert("errore");

  		}
    }

  	function registration(){
       window.location.href="Registration.html";
    }