import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ImagenMK from './imagesPortadas/mortalKombat.jpg'
import ImagenTNM from './imagesPortadas/theNewMutants.jpg'
import ImagenGVsK from './imagesPortadas/godzillaVsKong.jpg'
import './App.css';



function App() {
  let bdd = [{
    "id": 1,
    "stock": 5,
    "imagenPelicula": ImagenMK,
    "nombrePelicula": "Mortal Kombat",
    "descripcionPelicula": "Un boxeador fracasado descubre un secreto familiar que lo lleva a un torneo místico llamado Mortal Kombat donde se encuentra con un grupo de guerreros que luchan hasta la muerte para salvar los reinos del malvado hechicero Shang Tsung."
  },
  {
    "id": 2,
    "stock": 0,
    "imagenPelicula": ImagenTNM,
    "nombrePelicula": "The new Mutants",
    "descripcionPelicula": "La historia de los Nuevos Mutantes, un equipo de héroes mutantes formado por los primeros graduados de la escuela de Charles Xavier."
  },
  {
    "id": 3,
    "stock": 8,
    "imagenPelicula": ImagenGVsK,
    "nombrePelicula": "Godzilla Vs Kong",
    "descripcionPelicula": "Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por todo tipo de aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad. Monarch (Kyle Chandler) se embarca en una misión de alto riesgo y pone rumbo hacia territorios inexplorados para descubrir los orígenes de estos dos titanes, en un último esfuerzo por tratar de salvar a dos bestias que parecen tener las horas contadas sobre la faz de la Tierra."
  }
  ]
  let cards = bdd.map(element =>
    <ItemListContainer
      key={element.id}
      imagenPelicula={element.imagenPelicula}
      nombrePelicula={element.nombrePelicula}
      descripcionPelicula={element.descripcionPelicula}
      stock={element.stock}
    />
  );
  return (
    <div>
      <NavBar />
      {cards}
    </div>
  );
}

export default App;