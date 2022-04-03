var investiments = null;

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
    
function requisitarDados(temNaAPIOpenBanking) {                
        
        if (temNaAPIOpenBanking) {
                requisitarBanking(url);        
        } else {
                jsonHardCoded();
        }

        let nome = "Seja bem-vindo " + investiments.data[0].civilName + ",";
        let agencia = "Agência: "+ investiments.data[0].accounts[0].accounts_list[0].branchCode;
        let nroConta = "Nro da Conta: "+ investiments.data[0].accounts[0].accounts_list[0].number;
        let digito = "Dígito da Conta: "+ investiments.data[0].accounts[0].accounts_list[0].checkDigit;

        /*document.getElementById("resultado").appendChild(criarTabela([
                ["id", "nome",     "idade"],
                [1,    "matheus",  16],
                [2,    "cristian", 16],
                [3,    "pedro",    10],
                [4,    "henrique", 10]
        ]));*/

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

function criarTabela(conteudo) {        

        debugger;
        var saldoInicial = investiments.data[0].accounts[0].accounts_balances[0].availableAmount;
        var interestRate = 0.5/100.;
        var dtHoje = Date();             

        var tabela = document.createElement("table");        
        var thead  = document.createElement("thead");
        var tbody  = document.createElement("tbody");

        var thd = function( i ) {
                return (i==0) ? "th" : "td";
        };        
        
        var tr = document.createElement("tr");                
        var t = document.createElement( thd(0) );
        var texto = document.createTextNode( 'Data Mês/Ano' );
        t.appendChild(texto);
        tr.appendChild(t);
                
        var t = document.createElement( thd(0) );
        var texto = document.createTextNode( 'Rentabilização (R$)' );
        t.appendChild(texto);
        tr.appendChild(t);

        thead.appendChild(tr);
        
        for (var i=1; i<=12; i++) {
                var tr = document.createElement("tr");                
        
                var dtNext = somaMes(i);              
                var saldoInicial = (1.+interestRate)*saldoInicial;
                
                var t = document.createElement( thd(1) );
                var texto = document.createTextNode( dataFormatadaMesAno(dtNext) );
                t.appendChild(texto);
                tr.appendChild(t);
                
                var moeda = saldoInicial.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                var t = document.createElement( thd(1) );
                var texto = document.createTextNode( moeda );
                t.appendChild(texto);
                tr.appendChild(t);

                (i==1) ? thead.appendChild(tr):tbody.appendChild(tr);
        }

        tabela.appendChild(thead);
        tabela.appendChild(tbody);

        return tabela;
}

function somaMes(qtdeMeses) {

        var dtHoje = new Date();
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

