const app = {

  init: function(){

    app.loadYodaList();
    app.loadSpeciesList();
    app.getSwapiSpeciesList()

  },

loadYodaList: function() { 
  // 1. Je récupère en Ajax les informations liées à Yoda
  const getYodaListAjaxQuery = $.ajax({
    method: 'GET',
    url: 'https://swapi.co/api/people/20/',
    dataType: 'json'
  });

  // 1.1 Si la requête HTTP est un succès, je traite les informations de Yoda
  getYodaListAjaxQuery.done(app.getSwapiYodaList); // permet de récupérer les informations si la requête est bonne
  getYodaListAjaxQuery.fail(app.displayError);
},

getSwapiYodaList: function(dataYoda) {
  console.log(dataYoda);
},

loadSpeciesList: function() {
  const getSpeciesListAjaxQuery = $.ajax({
    method: 'GET',
    url: 'https://swapi.co/api/species/?page=1&page=2&page=3&page=4',
    dataTypes: 'json'
  });

  getSpeciesListAjaxQuery.done(app.getSwapiSpeciesList)
  getSpeciesListAjaxQuery.fail(app.getSwapiSpeciesList)
},

getSwapiSpeciesList: function(dataSpecies) {
  // console.log(dataSpecies);
  const Lists = dataSpecies.results;
  // console.log(results);
  
  const speciesOverTwoPeople = Lists.filter(List => List.people.length > 1)
  console.log(speciesOverTwoPeople);
  

}

};

$(app.init);
