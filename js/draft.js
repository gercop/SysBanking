function requisitarBanking( ){        
        
    debugger; 
    var requestURL = 'https://bb-api.concore.io/open-banking/channels/v1/branches';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);  
    request.responseType = 'json';
    request.send();      
    request.onload = function() {
            debugger;
            var superHeroes = request.response;
            //var superHeroes = JSON.parse(superHeroesText); // convert it to an object
            //populateHeader(superHeroes);                                
            //showHeroes(superHeroes);
            console.log(superHeroes);
            
    }
}


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

function requisitarHero(){         

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

function showHeroes(jsonObj) {
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

