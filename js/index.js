
function requisitarBanking( ){        
        
        debugger; 
        var data;
        var requestURL = 'https://bb-api.concore.io/open-banking/channels/v1/branches';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);  
        request.responseType = 'json';
        request.send();      
        request.onload = function() {
                debugger;
                data = request.response;
                console.log(data);                
        }
}



