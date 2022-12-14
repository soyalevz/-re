let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguente = document.getElementById("btnSiguente");

btnSiguiente.addEventListener("click", () => {
  if (pagina < 1000) {
    pagina += 1;
    cargarPelis();
  }
});

btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    pagina -= 1;
    cargarPelis();
  }
});

const cargarPelis = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-CO&page=${pagina}`
    );

    console.log(respuesta);

    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let peliculas = "";

      datos.results.forEach((pelicula) => {
        peliculas += `
  <div class="pelicula">
  <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
  <h3 class="titulos">${pelicula.title} </h3>"
  
  </div>  
  `;
      });

      document.getElementById("contenedor").innerHTML = peliculas;
    } else if (respuesta.status === 401) {
      console.log("Algo salio mal");
    } else if (respuesta.status === 404) {
      console.log("La pelicula no existe");
    } else {
      console.log("Hubo un error, no sabemos que salio mal :(");
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPelis();
