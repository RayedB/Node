const app = {

  init: function(){

    app.loadYodaList();

  },

loadYodaList: function() { 
  // 1. Je récupère en Ajax les informations liées à Yoda
  var getYodaListAjaxQuery = $.ajax({
    method: 'GET',
    url: 'https://swapi.co/api/people/20/',
    dataType: 'json'
  });

  // 1.1 Si la requête HTTP est un succès, je traite les informations de Yoda
  getYodaListAjaxQuery.done(app.getSwapiYodaList); // permet de récupérer les informations si la requête est bonne
  getYodaListAjaxQuery.fail(app.displayError);
},

getSwapiYodaList: function(data) {
  console.log(data);
}
};

$(app.init);
