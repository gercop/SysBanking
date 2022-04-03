const milionario = 1000000.;
var investiments = null;
var nome, agencia, nroConta, digito; 

function limparTela(){
        document.location.reload(true);
}

/* A requisicação de dados é realizada através da API Open Banking, contudo
algumas API necessárias para a presente proposta ainda não foram liberadas e
neste caso foi criado um JSON Hardcoded conforme orientação do Mentor

clientId -> campo personalId da estrutura JSON que deveria vir da interface
            que  será incorporda no internet banking Safra 
temNaAPIOpenBanking -> direciona a rotina pra o Open Banking ou para o JSON Hardcoded
Data de Alteração: 02/04/2022 */
function requisitarDados(clientId, tipo ,temNaAPIOpenBanking) {                                        
        
        $("form-resultado").prop('hidden',false);
        if (temNaAPIOpenBanking) {
                requisitarOpenBanking();        
        } else {
                jsonHardCoded();        
                
                id = getIndexClient(clientId, investiments);
        
                nome     = investiments.data[id].civilName;
                agencia  = investiments.data[id].accounts[0].accounts_list[0].branchCode;
                nroConta = investiments.data[id].accounts[0].accounts_list[0].number;
                digito   = investiments.data[id].accounts[0].accounts_list[0].checkDigit;
        
                document.getElementById("resultado").style.visibility = "visible"; 
                document.getElementById("resultado").appendChild(criarTabelaId());
                document.getElementById("resultado").appendChild(criarTabela(tipo,id,investiments));        
        }
}

/* Rotina para buscar o cliente na estrutura de dados JSON HardCoded devido a falta da API 
   liberada no Open Banking 
   clientId -> campo personalId da estrutura de dados JSON
   data -> estrutura de investimentos
   Data de Alteração: 03/04/2022     */
function getIndexClient(clientId, data) {
        
        for (i=0; i < data.data.length; i++) 
                if (data.data[i].personalId === clientId)
                        return i;        
        return 0;
}

/* Rotina pra criar uma span com msg de texto */
function criarSpan(texto) {

        var legenda = document.createElement("span");
        var texto_aux = document.createTextNode( texto );
        legenda.appendChild( texto_aux );
        return legenda;
}

function parseDate(texto) {

        let dataDigitadaSplit = texto.split("/");
      
        let dia = dataDigitadaSplit[0];
        let mes = dataDigitadaSplit[1];
        let ano = dataDigitadaSplit[2];      
      
        if (ano.length < 4 && parseInt(ano) < 50) {
          ano = "20" + ano;
        } else if (ano.length < 4 && parseInt(ano) >= 50) {
          ano = "19" + ano;
        }
        ano = parseInt(ano);
        mes = mes - 1;
      
        return new Date(ano, mes, dia);
      }

/* Criar  tabela com os dados do cliente */
function criarTabelaId() {
        
        $("#tabela").remove();
        var tabelaId = document.createElement("table");        
        var theadId  = document.createElement("thead");

        var tr = document.createElement("tr");                
        var t = document.createElement( thd(0) );
        
        let nomeAux = nome.split(" ");
        var texto = document.createTextNode( "Seja bem-vindo " + nomeAux[0] + ",");
        t.appendChild(texto);
        tr.appendChild(t);              
        
        var t = document.createElement( thd(0) );
        var texto = document.createTextNode( "Natureza: Conta Poupança");
        t.appendChild(texto);
        t.style.textAlign = "center";
        tr.appendChild(t);                
        
        var t = document.createElement( thd(0) );
        var texto = document.createTextNode( "Data: " + (new Date()).toLocaleString() );
        t.appendChild(texto);
        t.style.textAlign = "right";
        tr.appendChild(t);         

        tr.style.height = "20px";
        tr.style.textAlign = "left";
        
        theadId.appendChild(tr);   

        var tr = document.createElement("tr");                
        var t = document.createElement( thd(0) );
        var texto = document.createTextNode( "Agência: " + agencia );
        t.appendChild(texto);      
        tr.appendChild(t);           
        
        var t = document.createElement( thd(0) );
        var texto = document.createTextNode( "Nro da Conta: " + nroConta + "-" + digito  );
        t.appendChild(texto);      
        tr.appendChild(t);           
        
        tr.style.height = "40px";
        tr.style.textAlign = "left";
        
        tr.appendChild(t);
        theadId.appendChild(tr);                
        tabelaId.appendChild(theadId);

        tabelaId.appendChild(theadId);

        return tabelaId;
}

/* Criar a tabela com os dados a simulação.  */
function criarTabela(tipo, id, investiments) {        
        
        var saldoInicial = investiments.data[id].accounts[0].accounts_balances[0].availableAmount;
        var interestRateP = 0.61/100.; //Versão 4.0: Buscar API para obter tais informações
        var interestRateR = 0.81/100.; //Versão 4.0: Buscar API para obter tais informações
        var interestRateL = 0.9/100.;  //Versão 4.0: Buscar API para obter tais informações
        var interestRateA = 0.85/100.;  //Versão 4.0: Buscar API para obter tais informações
        var depositosM1   = 400.;        
        var depositosM2   = 800.;
        
        var tabela = document.createElement("table");        
        var thead  = document.createElement("thead");
        var tbody  = document.createElement("tbody");                
        
        if (tipo === 1) {
                thead.appendChild(addCabecalho("Mês/ano","Poupança (R$)","CDB/RDB (R$)","CDB/RDB (R$)","Renda Passiva (R$)",true,false));
                thead.appendChild(addCabecalho("Aportes Regulares","-","-","R$ 400,00","-",false,true));        
        } else if (tipo === 2) {
                thead.appendChild(addCabecalho("Mês/ano","Poupança (R$)","LCI (R$)","LCI (R$)","Renda Passiva (R$)",true,false));
                thead.appendChild(addCabecalho("Aportes Regulares","-","-","R$ 400,00","-",false,true));        
        } else if (tipo === 3) {
                thead.appendChild(addCabecalho("Mês/ano","Poupança (R$)","LCA (R$)","LCA (R$)","Renda Passiva (R$)",true,false));
                thead.appendChild(addCabecalho("Aportes Regulares","-","-","R$ 400,00","-",false,true));     
        }       
        
        var saldoInicialAcumuladoP  = 0., 
            saldoInicialAcumuladoR1 = 0., 
            saldoInicialAcumuladoR2 = 0., 
            saldoInicialAcumuladoR3 = 0.,
            saldoInicialAcumuladoL1 = 0., 
            saldoInicialAcumuladoL2 = 0., 
            saldoInicialAcumuladoL3 = 0., 
            saldoInicialAcumuladoA1 = 0., 
            saldoInicialAcumuladoA2 = 0., 
            saldoInicialAcumuladoA3 = 0., 
            vlr = 0.;
        var saldoInicialAcumuladoP = saldoInicial;        
        var saldoInicialAcumuladoR1 = saldoInicialAcumuladoR2 = saldoInicialAcumuladoR3 = saldoInicial;        
        var saldoInicialAcumuladoL1 = saldoInicialAcumuladoL2 = saldoInicialAcumuladoL3 = saldoInicial;        
        var saldoInicialAcumuladoA1 = saldoInicialAcumuladoA2 = saldoInicialAcumuladoA3 = saldoInicial;        
        var finalizarProjecao = false;

        for (var i=1; i<=35*12 && !finalizarProjecao; i++) {                
                
                saldoInicialAcumuladoP  = (1.+interestRateP)*saldoInicialAcumuladoP;

                saldoInicialAcumuladoR1 = (1.+interestRateR)*saldoInicialAcumuladoR1;
                saldoInicialAcumuladoR2 = depositosM1+(1.+interestRateR)*saldoInicialAcumuladoR2;
                saldoInicialAcumuladoR3 = depositosM2+(1.+interestRateR)*saldoInicialAcumuladoR3;                

                saldoInicialAcumuladoL1 = (1.+interestRateL)*saldoInicialAcumuladoL1;                
                saldoInicialAcumuladoL2 = depositosM1+(1.+interestRateL)*saldoInicialAcumuladoL2;
                saldoInicialAcumuladoL3 = depositosM2+(1.+interestRateL)*saldoInicialAcumuladoL3;                

                saldoInicialAcumuladoA1 = (1.+interestRateA)*saldoInicialAcumuladoA1;                
                saldoInicialAcumuladoA2 = depositosM1+(1.+interestRateA)*saldoInicialAcumuladoA2;
                saldoInicialAcumuladoA3 = depositosM2+(1.+interestRateA)*saldoInicialAcumuladoA3;                                
                
                if ( mostraMesAno( (i) ) ) {                        
                        
                        var dtNext = somaMes(new Date(), i);              
                        var tr = document.createElement("tr");                                                
                        var t = document.createElement( thd(1) );
                        var str_aux = (i>12) ? " (" + ((i-1)/12) + " anos)" : "";
                        var texto = document.createTextNode( dataFormatadaMesAno(dtNext) + str_aux  );
                        t.appendChild(texto);
                        tr.appendChild(t);

                        vlr = saldoInicialAcumuladoP.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                        var t = document.createElement( thd( !seTornouMilionario(saldoInicialAcumuladoP) ) );                        
                        var texto = document.createTextNode( vlr );
                        t.appendChild(texto);
                        tr.appendChild(t);                        

                        if (tipo === 1) {                                
                                tr = mostraPoupancaVersusCDB_RDB(tr,saldoInicialAcumuladoR1,saldoInicialAcumuladoR2,interestRateR);
                                finalizarProjecao = seTornouMilionarioT(saldoInicialAcumuladoP,saldoInicialAcumuladoR1,saldoInicialAcumuladoR2);
                        } else if (tipo === 2) {
                                tr = mostraPoupancaVersusLCI(tr,saldoInicialAcumuladoR1,saldoInicialAcumuladoR2,interestRateR);
                                finalizarProjecao = seTornouMilionarioT(saldoInicialAcumuladoP,saldoInicialAcumuladoL1,saldoInicialAcumuladoL2);                                                                                
                        } else if (tipo === 3) {
                                tr = mostraPoupancaVersusLCA(tr, saldoInicialAcumuladoA1, saldoInicialAcumuladoA2, interestRateA); 
                                finalizarProjecao = seTornouMilionarioT(saldoInicialAcumuladoP,saldoInicialAcumuladoA1,saldoInicialAcumuladoA2);                                                                                
                        }

                        (i==1) ? thead.appendChild(tr):tbody.appendChild(tr);                        
                }
        }
        
        tabela.appendChild(thead);
        tabela.appendChild(tbody);

        return tabela;
}

function mostraPoupancaVersusLCI(tr, saldoInicialAcumuladoR1, saldoInicialAcumuladoR2, interestRateR) {

        var vlr = saldoInicialAcumuladoR1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        var t = document.createElement( thd( !seTornouMilionario(saldoInicialAcumuladoR1) ) );
        var texto = document.createTextNode( vlr );
        t.appendChild(texto);
        tr.appendChild(t);                        
                                
        var vlr = saldoInicialAcumuladoR2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        var t = document.createElement( thd( !seTornouMilionario(saldoInicialAcumuladoR2) ) );
        var texto = document.createTextNode( vlr );
        t.appendChild(texto);
        tr.appendChild(t);

        var rendaPassiva = saldoInicialAcumuladoR2*interestRateR;
        var vlr = rendaPassiva.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        var t = document.createElement( thd( !seTornouMilionario(rendaPassiva) ) );
        var texto = document.createTextNode( vlr );
        t.appendChild(texto);
        tr.appendChild(t);

        if ( seTornouMilionario(saldoInicialAcumuladoR2) ) {
                tr.style.backgroundColor = "#add";
                tr.style.border = "2px solid blue"
                tr.style.height = "30px"                                
        }
        return tr;                                
}                  

function mostraPoupancaVersusCDB_RDB(tr, saldoInicialAcumuladoL1, saldoInicialAcumuladoL2, interestRateL) {

        var vlr = saldoInicialAcumuladoL1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        var t = document.createElement( thd( !seTornouMilionario(saldoInicialAcumuladoL1) ) );
        var texto = document.createTextNode( vlr );                        
        t.appendChild(texto);                              
        tr.appendChild(t);

        var vlr = saldoInicialAcumuladoL2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        var t = document.createElement( thd( !seTornouMilionario(saldoInicialAcumuladoL2) ) );
        var texto = document.createTextNode( vlr );                        
        t.appendChild(texto);                              
        tr.appendChild(t);

        rendaPassiva = saldoInicialAcumuladoL2*interestRateL;
        var vlr = rendaPassiva.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        var t = document.createElement( thd( !seTornouMilionario(rendaPassiva) ) );
        var texto = document.createTextNode( vlr );                        
        t.appendChild(texto);                              
        tr.appendChild(t);

        if ( seTornouMilionario(saldoInicialAcumuladoL2) ) {
                tr.style.backgroundColor = "#add";
                tr.style.border = "2px solid blue"
                tr.style.height = "30px"                                
        }

        return tr;
}

function mostraPoupancaVersusLCA(tr, saldoInicialAcumuladoA1, saldoInicialAcumuladoA2, interestRateA) {

        var vlr = saldoInicialAcumuladoA1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        var t = document.createElement( thd( !seTornouMilionario(saldoInicialAcumuladoA1) ) );
        var texto = document.createTextNode( vlr );                        
        t.appendChild(texto);                              
        tr.appendChild(t);

        var vlr = saldoInicialAcumuladoA2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        var t = document.createElement( thd( !seTornouMilionario(saldoInicialAcumuladoA2) ) );
        var texto = document.createTextNode( vlr );                        
        t.appendChild(texto);                              
        tr.appendChild(t);

        var rendaPassiva = saldoInicialAcumuladoA2*interestRateA;
        var vlr = rendaPassiva.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        var t = document.createElement( thd( !seTornouMilionario(rendaPassiva) ) );
        var texto = document.createTextNode( vlr );                        
        t.appendChild(texto);                              
        tr.appendChild(t);

        if ( seTornouMilionario(saldoInicialAcumuladoA2) ) {
                tr.style.backgroundColor = "#add";
                tr.style.border = "2px solid blue"
                tr.style.height = "30px"                                
        }
        return tr;
}




function pularEspacoComTexto(str1,str2,str3,str4) {
        var tr = document.createElement("tr");                                                
        var t = document.createElement( thd(1) );
        var texto = document.createTextNode( str1 );
        t.appendChild(texto);
        tr.appendChild(t);
        
        var tr = document.createElement("tr");                                                
        var t = document.createElement( thd(1) );
        var texto = document.createTextNode( str2 );
        t.appendChild(texto);
        tr.appendChild(t);
        
        var tr = document.createElement("tr");                                                
        var t = document.createElement( thd(1) );
        var texto = document.createTextNode( str3 );
        t.appendChild(texto);
        tr.appendChild(t);

        var tr = document.createElement("tr");                                                
        var t = document.createElement( thd(1) );
        var texto = document.createTextNode( str4 );
        t.appendChild(texto);
        tr.appendChild(t);
        return tr;
}
                
function seTornouMilionario(vlr) {
        return (vlr > milionario);
}

function seTornouMilionarioT(vlr1,vlr2,vlr3) {
        return    (vlr1 > milionario) 
               || (vlr2 > milionario) 
               || (vlr3 > milionario);
}

function mostraMesAno(i) {
        return (  ( (i > 0) && (i <= 12) ) 
                 || ( i === (1+24)     )  //2 anos 
                 || ( i === (1+5*12)   )  //5 anos
                 || ( i === (1+10*12)  )  //5 anos
                 || ( i === (1+20*12)  )  //10 anos  
                 || ( i === (1+25*12)  )  //25 anos
               )  
}              

function thd(i) {
        return (i==0) ? "th" : "td";
}

function addCabecalho(col1, col2, col3, col4, col5, bordaSuperior, bordaInferior) {

        var tr = document.createElement("tr");                
        var t = document.createElement( thd(0) );
        var texto = document.createTextNode( col1 );
        t.appendChild(texto);
        tr.appendChild(t);
        if (bordaSuperior)
                tr.style.borderTop = "1px solid";   
        if (bordaInferior)
                tr.style.borderBottom = "1px solid";      
                
        var t = document.createElement( thd(0) );
        var texto = document.createTextNode( col2 );
        t.appendChild(texto);
        tr.appendChild(t);

        var t = document.createElement( thd(0) );
        var texto = document.createTextNode( col3 );
        t.appendChild(texto);
        tr.appendChild(t);

        var t = document.createElement( thd(0) );
        var texto = document.createTextNode( col4 );
        t.appendChild(texto);
        tr.appendChild(t);

        var t = document.createElement( thd(0) );
        var texto = document.createTextNode( col5 );
        t.appendChild(texto);
        tr.appendChild(t);
        
        return tr;        
}

function somaMes(data, qtdeMeses) {

        var dtHoje = data;
        var dia = 1;
        var mes = dtHoje.getMonth() + qtdeMeses;
        var ano = dtHoje.getFullYear();
        var dtNext = new Date( ano, mes, dia);
        console.log(dtNext);
        return dtNext;
}

function dataFormatadaMesAno(data){        
        mes  = (data.getMonth()+1).toString(); //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes;
        anoF = data.getFullYear();
        return mesF+"/"+anoF;
}

function requisitarOpenBanking(){                                
        
        var data = null;
        var request = new XMLHttpRequest();        
        request.open('GET', "https://bb-api.concore.io/open-banking/channels/v1/branches");        
        request.responseType = 'json';        
        request.send(data);      
        request.onload = function() {                   
                var dialogId = document.createElement("dialog");                                             
                document.getElementById("resultado").appendChild(dialogId);
                var data = request.response; 
                console.log(data);
                debugger;
                alert("Foi carregada a API do " + data.data.brand.name + ", CNPJ: " + data.data.brand.companies[0].cnpjNumber);    
        }                
}

function jsonHardCoded() {

        investiments = {
                "data": [
                        {
                                "updateDateTime": "2021-01-17T08:30:00Z",
                                "personalId": "578-psd-71md6971kjh-2d414",
                                "brandName": "Organização A",
                                "civilName": "Cláudio Fernandes",
                                "socialName": "Pamela de Freitas",
                                "birthDate": "1993-05-03",
                                "maritalStatusCode": "SOLTEIRO",
                                "maritalStatusAdditionalInfo": "Casado",
                                "sex": "FEMININO",
                                "companyCnpj": [
                                        "01663247000103",
                                        "01663247000563"
                                ],
                                "documents": {
                                        "cpfNumber": "29687252137",
                                        "passportNumber": "75253494730594820620",
                                        "passportCountry": "CAN",
                                        "passportExpirationDate": "2022-05-21",
                                        "passportIssueDate": "2022-05-21"
                                },
                                "otherDocuments": [
                                        {
                                                "type": "CNH",
                                                "typeAdditionalInfo": "NA",
                                                "number": "15871908",
                                                "checkDigit": "P",
                                                "additionalInfo": "SSP/SP",
                                                "expirationDate": "2024-06-21"
                                        }
                                ],
                                "hasBrazilianNationality": false,
                                "nationality": [
                                        {
                                                "otherNationalitiesInfo": "CAN",
                                                "documents": [
                                                        {
                                                                "type": "SOCIAL SEC",
                                                                "number": "423987299",
                                                                "expirationDate": "2024-05-21",
                                                                "issueDate": "2022-05-21",
                                                                "country": "Brasil",
                                                                "typeAdditionalInfo": "Informações adicionais."
                                                        }
                                                ]
                                        }
                                ],
                                "filiation": [
                                        {
                                                "type": "PAI",
                                                "civilName": "Marcelo Fagundes",
                                                "socialName": "NA"
                                        }
                                ],
                                "contacts": {
                                        "postalAddresses": [
                                                {
                                                        "isMain": true,
                                                        "address": "Av Naburo Ykesaki, 70",
                                                        "additionalInfo": "Esquina",
                                                        "districtName": "Centro",
                                                        "townName": "Marília",
                                                        "ibgeTownCode": "3550308",
                                                        "countrySubDivision": "SP",
                                                        "postCode": "17500001",
                                                        "country": "Brasil",
                                                        "countryCode": "BRA",
                                                        "geographicCoordinates": {
                                                                "latitude": "-90.8365180",
                                                                "longitude": "-180.836519"
                                                        }
                                                }
                                        ],
                                        "phones": [
                                                {
                                                        "isMain": true,
                                                        "type": "FIXO",
                                                        "additionalInfo": "Informações adicionais.",
                                                        "countryCallingCode": "55",
                                                        "areaCode": "19",
                                                        "number": "29875132",
                                                        "phoneExtension": "972"
                                                }
                                        ],
                                        "emails": [
                                                {
                                                        "isMain": true,
                                                        "email": "pamelafreitas-81@br.inter.net"
                                                }
                                        ],
                                },
                                "accounts": [
                                        {
                                                "accounts_list": [
                                                        {
                                                                "brandName": "Organização A",
                                                                "companyCnpj": "21128159130166",
                                                                "type": "CONTA_DEPOSITO_A_VISTA",
                                                                "compeCode": "001",
                                                                "branchCode": "6272",
                                                                "number": "94948392",
                                                                "checkDigit": "6",
                                                                "accountId": "92792126019929292922650822221989319252576"
                                                        }
                                                ],
                                                "accounts_identification": [
                                                        {
                                                                "compeCode": "001",
                                                                "branchCode": "6272",
                                                                "number": "94948392",
                                                                "checkDigit": "6",
                                                                "type": "CONTA_DEPOSITO_A_VISTA",
                                                                "subtype": "INDIVIDUAL",
                                                                "currency": "BRL"
                                                        }
                                                ],
                                                "accounts_balances": [
                                                        {
                                                                "availableAmount": 47841.04,
                                                                "availableAmountCurrency": "BRL",
                                                                "blockedAmount": 26147.94,
                                                                "blockedAmountCurrency": "BRL",
                                                                "automaticallyInvestedAmount": 35000.00,
                                                                "automaticallyInvestedAmountCurrency": "BRL"
                                                        }
                                                ]
                                        }
                                ]
                        }
                ]},
               {
                "data": [
                        {
                                "updateDateTime": "2007-01-17T08:30:00Z",
                                "personalId": "578-psd-17md6791kjh-2d714",
                                "brandName": "Organização B",
                                "civilName": "Paulo Medeiros",
                                "socialName": "Augusta Carvalho",
                                "birthDate": "1998-09-23",
                                "maritalStatusCode": "Casado",
                                "maritalStatusAdditionalInfo": "Casado",
                                "sex": "FEMININO",
                                "companyCnpj": [
                                        "01663977000392",
                                        "07863265700563"
                                ],
                                "documents": {
                                        "cpfNumber": "27687252987",
                                        "passportNumber": "77683194730594820620",
                                        "passportCountry": "CAN",
                                        "passportExpirationDate": "2025-05-21",
                                        "passportIssueDate": "2022-05-21"
                                },
                                "otherDocuments": [
                                        {
                                                "type": "CNH",
                                                "typeAdditionalInfo": "NA",
                                                "number": "16871908",
                                                "checkDigit": "P",
                                                "additionalInfo": "SSP/SP",
                                                "expirationDate": "2024-11-21"
                                        }
                                ],
                                "hasBrazilianNationality": false,
                                "nationality": [
                                        {
                                                "otherNationalitiesInfo": "CAN",
                                                "documents": [
                                                        {
                                                                "type": "SOCIAL SEC",
                                                                "number": "428880299",
                                                                "expirationDate": "2024-05-21",
                                                                "issueDate": "2018-05-21",
                                                                "country": "Brasil",
                                                                "typeAdditionalInfo": "Informações adicionais."
                                                        }
                                                ]
                                        }
                                ],
                                "filiation": [
                                        {
                                                "type": "PAI",
                                                "civilName": "Bruno Domingues",
                                                "socialName": "NA"
                                        }
                                ],
                                "contacts": {
                                        "postalAddresses": [
                                                {
                                                        "isMain": true,
                                                        "address": "Av 18 de Setembro, 756",
                                                        "additionalInfo": "Fundo",
                                                        "districtName": "Leste",
                                                        "townName": "Campinas",
                                                        "ibgeTownCode": "7770308",
                                                        "countrySubDivision": "SP",
                                                        "postCode": "17500988",
                                                        "country": "Brasil",
                                                        "countryCode": "BRA",
                                                        "geographicCoordinates": {
                                                                "latitude": "-78.8365180",
                                                                "longitude": "-150.836519"
                                                        }
                                                }
                                        ],
                                        "phones": [
                                                {
                                                        "isMain": true,
                                                        "type": "FIXO",
                                                        "additionalInfo": "Informações adicionais.",
                                                        "countryCallingCode": "55",
                                                        "areaCode": "19",
                                                        "number": "2998732",
                                                        "phoneExtension": "997"
                                                }
                                        ],
                                        "emails": [
                                                {
                                                        "isMain": true,
                                                        "email": "augustacarvalho-32@br.inter.net"
                                                }
                                        ],
                                },
                    "accounts": [
                                        {
                                                "accounts_list": [
                                                        {
                                                                "brandName": "Organização B",
                                                                "companyCnpj": "2687865730166",
                                                                "type": "CONTA_POUPANCA",
                                                                "compeCode": "066",
                                                                "branchCode": "6983",
                                                                "number": "94913452",
                                                                "checkDigit": "9",
                                                                "accountId": "92764389512629292922650822221989319252576"
                                                        }
                                                ],
                        "accounts_identification": [
                                                        {
                                                                "compeCode": "066",
                                                                "branchCode": "6983",
                                                                "number": "94913452",
                                                                "checkDigit": "9",
                                                                "type": "CONTA_POUPANCA",
                                                                "subtype": "CONJUNTA_SOLIDARIA",
                                                                "currency": "BRL"
                                                        }
                                                ],
                        "accounts_balances": [
                                                        {
                                                                "availableAmount": 512.84,
                                                                "availableAmountCurrency": "BRL",
                                                                "blockedAmount": 500.94,
                                                                "blockedAmountCurrency": "BRL",
                                                                "automaticallyInvestedAmount": 50.00,
                                                                "automaticallyInvestedAmountCurrency": "BRL"
                                                        }
                                                ]
                                        }
                                ]
                        }
                ]},
                {
                        "data": [
                                {
                                        "updateDateTime": "2007-12-12T08:30:00Z",
                                        "personalId": "023-psd-98md6745kjh-2d714",
                                        "brandName": "Organização C",
                                        "civilName": "Carlos Prado",
                                        "socialName": "Carlos Prado",
                                        "birthDate": "1956-08-13",
                                        "maritalStatusCode": "Casado",
                                        "maritalStatusAdditionalInfo": "Casado",
                                        "sex": "MASCULINO",
                                        "companyCnpj": [
                                                "08963157006892",
                                                "03065865840563"
                                        ],
                                        "documents": {
                                                "cpfNumber": "27157257888",
                                                "passportNumber": "77636894730485825550",
                                                "passportCountry": "CAN",
                                                "passportExpirationDate": "2023-04-21",
                                                "passportIssueDate": "2019-04-21"
                                        },
                                        "otherDocuments": [
                                                {
                                                        "type": "CNH",
                                                        "typeAdditionalInfo": "NA",
                                                        "number": "16587900",
                                                        "checkDigit": "P",
                                                        "additionalInfo": "SSP/SP",
                                                        "expirationDate": "2028-11-21"
                                                }
                                        ],
                                        "hasBrazilianNationality": false,
                                        "nationality": [
                                                {
                                                        "otherNationalitiesInfo": "CAN",
                                                        "documents": [
                                                                {
                                                                        "type": "SOCIAL SEC",
                                                                        "number": "447882299",
                                                                        "expirationDate": "2024-04-11",
                                                                        "issueDate": "2015-04-11",
                                                                        "country": "Brasil",
                                                                        "typeAdditionalInfo": "Informações adicionais."
                                                                }
                                                        ]
                                                }
                                        ],
                                        "filiation": [
                                                {
                                                        "type": "PAI",
                                                        "civilName": "Carlos Ferreira",
                                                        "socialName": "NA"
                                                }
                                        ],
                                        "contacts": {
                                                "postalAddresses": [
                                                        {
                                                                "isMain": true,
                                                                "address": "Av 18 de Setembro, 756",
                                                                "additionalInfo": "Fundo",
                                                                "districtName": "Centro",
                                                                "townName": "Araraquara",
                                                                "ibgeTownCode": "7755508",
                                                                "countrySubDivision": "SP",
                                                                "postCode": "17009948",
                                                                "country": "Brasil",
                                                                "countryCode": "BRA",
                                                                "geographicCoordinates": {
                                                                        "latitude": "-28.8365180",
                                                                        "longitude": "-122.836519"
                                                                }
                                                        }
                                                ],
                                                "phones": [
                                                        {
                                                                "isMain": true,
                                                                "type": "FIXO",
                                                                "additionalInfo": "Informações adicionais.",
                                                                "countryCallingCode": "55",
                                                                "areaCode": "19",
                                                                "number": "2993332",
                                                                "phoneExtension": "911"
                                                        }
                                                ],
                                                "emails": [
                                                        {
                                                                "isMain": true,
                                                                "email": "augustacarvalho-32@br.inter.net"
                                                        }
                                                ],
                                        },
                    "accounts": [
                                                {
                                                        "accounts_list": [
                                                                {
                                                                        "brandName": "Organização C",
                                                                        "companyCnpj": "2687843596166",
                                                                        "type": "CONTA_PAGAMENTO_PRE_PAGA",
                                                                        "compeCode": "256",
                                                                        "branchCode": "0153",
                                                                        "number": "8456552",
                                                                        "checkDigit": "3",
                                                                        "accountId": "92764389512629292922650822221989319252576"
                                                                }
                                                        ],
                        "accounts_identification": [
                                                                {
                                                                        "compeCode": "256",
                                                                        "branchCode": "0153",
                                                                        "number": "8456552",
                                                                        "checkDigit": "3",
                                                                        "type": "CONTA_PAGAMENTO_PRE_PAGA",
                                                                        "subtype": "CONJUNTA_NAO_SOLIDARIA",
                                                                        "currency": "BRL"
                                                                }
                                                        ],
                        "accounts_balances": [
                                                                {
                                                                        "availableAmount": 2512.84,
                                                                        "availableAmountCurrency": "BRL",
                                                                        "blockedAmount": 1598.94,
                                                                        "blockedAmountCurrency": "BRL",
                                                                        "automaticallyInvestedAmount": 1000.00,
                                                                        "automaticallyInvestedAmountCurrency": "BRL"
                                                                }
                                                        ]
                                                }
                                        ]
                                }
                        ],
                        "links": {
                                "self": "https://api.banco.com.br/open-banking/api/v1/resource",
                                "first": "https://api.banco.com.br/open-banking/api/v1/resource",
                                "prev": "https://api.banco.com.br/open-banking/api/v1/resource",
                                "next": "https://api.banco.com.br/open-banking/api/v1/resource",
                                "last": "https://api.banco.com.br/open-banking/api/v1/resource"
                        },
                        "meta": {
                                "totalRecords": 1,
                                "totalPages": 1,
                                "requestDateTime": "2021-05-21T08:30:00Z"
                        }
                }
}
