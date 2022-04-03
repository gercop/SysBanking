function exemploEstruturaDados () {
    let data = [
            {
              "name": "Molecule Man",
              "age": 29,
              "secretIdentity": "Dan Jukes",
              "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
              ]
            },
            {
              "name": "Madame Uppercut",
              "age": 39,
              "secretIdentity": "Jane Wilson",
              "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
              ]
            }
    ]         

    console.log(data);
}

function requisitar(){         

    debugger;
    var req = new XMLHttpRequest();        
    req.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json", false);
    req.responseType = 'json'
    req.send();
    request.onload = function() {
            debuuger;
            var data = request.response;
            console.log(data);
    }
    
    console.log(req.responseText);        
            
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
  
    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}

function show(jsonObj) {
    debugger;
    var heroes = jsonObj['members'];
  
    for (var i = 0; i < heroes.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';
  
      var superPowers = heroes[i].powers;
      for (var j = 0; j < superPowers.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
}


var tabela = document.createElement("table");        
var thead  = document.createElement("thead");
var tbody  = document.createElement("tbody");

var thd = function( i ) {
        return (i==0) ? "th" : "td";
};

for (var i=0; i<conteudo.length; i++) {
        var tr = document.createElement("tr");
        
        for (var j=0; j<conteudo[i].length; j++) {
                var t = document.createElement( thd(i) );
                var texto = document.createTextNode( conteudo[i][j] );
                t.appendChild(texto);
                tr.appendChild(t);
        }

        (i==0) ? thead.appendChild(tr):tbody.appendChild(tr);
}

tabela.appendChild(thead);
tabela.appendChild(tbody);

return tabela;



