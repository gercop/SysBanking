const milionario = 1000000.;
var investiments = null;
var nome, agencia, nroConta, digito; 
    
function requisitarDados(temNaAPIOpenBanking) {                
        
        if (temNaAPIOpenBanking) {
                requisitarBanking(url);        
        } else {
                jsonHardCoded();
        }
        
        nome     = investiments.data[0].civilName;
        agencia  = investiments.data[0].accounts[0].accounts_list[0].branchCode;
        nroConta = investiments.data[0].accounts[0].accounts_list[0].number;
        digito   = investiments.data[0].accounts[0].accounts_list[0].checkDigit;
        
        document.getElementById("resultado").appendChild(criarTabelaId());
        document.getElementById("resultado").appendChild(criarTabela(investiments));        
}

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

function criarTabelaId() {

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

function criarTabela(conteudo) {        
        
        var saldoInicial = investiments.data[0].accounts[0].accounts_balances[0].availableAmount;
        var interestRate1 = 0.61/100.; //Versão 4.0: Buscar API para obter tais informações
        var interestRate2 = 0.81/100.; //Versão 4.0: Buscar API para obter tais informações
        var depositosM1    = 400.;        
        var depositosM2    = 800.;
        
        var tabela = document.createElement("table");        
        var thead  = document.createElement("thead");
        var tbody  = document.createElement("tbody");
        
        thead.appendChild(addCabecalho("Mês/ano","Poupança (R$)","CDB/RDB (R$)","CDB/RDB (R$)","CDB/RDB (R$)",true,false));
        thead.appendChild(addCabecalho("Aportes Regulares","-","-","R$ 400,00","R$ 800,00",false,true));        
        
        var vlr = 0., saldoInicialAcumuladoP =0., saldoInicialAcumuladoR =0., saldoInicialAcumuladoD1 =0., saldoInicialAcumuladoD2 =0.;
        var saldoInicialAcumuladoD2 = saldoInicialAcumuladoD1 = saldoInicialAcumuladoR = saldoInicialAcumuladoP = saldoInicial;        
        var finalizarProjecao = false;

        for (var i=1; i<=35*12 && !finalizarProjecao; i++) {                
                
                saldoInicialAcumuladoP  = (1.+interestRate1)*saldoInicialAcumuladoP;
                saldoInicialAcumuladoR  = (1.+interestRate2)*saldoInicialAcumuladoR;
                saldoInicialAcumuladoD1 = depositosM1+(1.+interestRate2)*saldoInicialAcumuladoD1;
                saldoInicialAcumuladoD2 = depositosM2+(1.+interestRate2)*saldoInicialAcumuladoD2;                
                
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

                        vlr = saldoInicialAcumuladoR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                        var t = document.createElement( thd( !seTornouMilionario(saldoInicialAcumuladoR) ) );
                        var texto = document.createTextNode( vlr );
                        t.appendChild(texto);
                        tr.appendChild(t);                        

                        vlr = saldoInicialAcumuladoD1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                        var t = document.createElement( thd( !seTornouMilionario(saldoInicialAcumuladoD1) ) );
                        var texto = document.createTextNode( vlr );
                        t.appendChild(texto);
                        tr.appendChild(t);

                        vlr = saldoInicialAcumuladoD2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                        var t = document.createElement( thd( !seTornouMilionario(saldoInicialAcumuladoD2) ) );
                        var texto = document.createTextNode( vlr );                        
                        t.appendChild(texto);                              
                        tr.appendChild(t);
                        if ( seTornouMilionario(saldoInicialAcumuladoD2) ) {
                                tr.style.backgroundColor = "#add";
                                tr.style.border = "2px solid blue"
                                tr.style.height = "30px"                                
                        }

                        (i==1) ? thead.appendChild(tr):tbody.appendChild(tr);

                        finalizarProjecao = seTornouMilionarioT(saldoInicialAcumuladoD2,saldoInicialAcumuladoD1,saldoInicialAcumuladoR,saldoInicialAcumuladoP);                                                                                
                }
        }
        
        tabela.appendChild(thead);
        tabela.appendChild(tbody);

        return tabela;
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

function seTornouMilionarioT(vlr1,vlr2,vlr3,vlr4) {
        return    (vlr1 > milionario) 
               || (vlr2 > milionario) 
               || (vlr3 > milionario) 
               || (vlr4 > milionario);
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

function requisitarOpenBanking(url){                

        var data = null;                
        var requestURL = url;
        var request = new XMLHttpRequest();        
        request.open('GET', requestURL);        
        request.responseType = 'json';

        request.send(data);      
        request.onload = function() {                
                debugger;
                data = request.response;
                console.log(data);                   
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
