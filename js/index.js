
function requisitarBanking( url ){                
        
        debugger;
        var data = null;                
        var requestURL = url;
        var request = new XMLHttpRequest();        
        request.open('GET', requestURL);        
        request.responseType = 'json';

        request.send(data);      
        request.onload = function() {                
                data = request.response;
                console.log(data);   
                
                //montar a tela para o cliente

                //data_poupanca
                //data_CDB
                //if (data_CDB.projecao >  data_POUP.projecao) {

                //} else {

                //}
        }        
}



