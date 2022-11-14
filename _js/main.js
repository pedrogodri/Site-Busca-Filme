document.getElementById('formulario').addEventListener('submit', pesquisarFilme);

function pesquisarFilme(e) {
    var filmePesquisa = document.getElementById('pesquisar').value;
    buscarFilmes(filmePesquisa);
    e.preventDefault();
}

function buscarFilmes(filmePesquisa) {
    axios.get(`http://www.omdbapi.com/?s=${filmePesquisa}&page=1&apikey=65d09b9d`)
        .then(function (response) {
            console.log(response);
            var filmes = response.data.Search;
            var mostrarFilmes = '';

            for(var i = 0; i < filmes.length; i++) {
                mostrarFilmes += `
                    <div class="col-sm-6 col-md-4">
			            <div class="thumbnail">
			                <img src="${filmes[i].Poster}" class="img-thumbnail">
			                <h4>${filmes[i].Title}</h4>
			                <p><a href="#" class="btn btn-primary" role="button" onclick="filmeDetalhes('${filmes[i].imdbID}')">Ver Detalhes</a></p>
			            </div>
			        </div>
                `;
            }

            document.getElementById('filmes').innerHTML = mostrarFilmes;
        })
        .catch(function (error) {
            console.log(error);
        });
}