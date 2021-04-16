import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ImagenMK from './imagesPortadas/mortalKombat.jpg'
import './App.css';



function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer
        imagenPelicula={ImagenMK}
        nombrePelicula="Morta Kombat"
        descripcionPelicula="Un boxeador fracasado descubre un secreto familiar que lo lleva a un torneo místico llamado Mortal Kombat donde se encuentra con un grupo de guerreros que luchan hasta la muerte para salvar los reinos del malvado hechicero Shang Tsung."
      />
    </div>
  );
}

export default App;