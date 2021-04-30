import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Contacto from './components/Contacto/Contacto';
import Categoria from './components/Categoria/Categoria';
import Producto from './components/Producto/Producto';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/categoria/:nombre">
          <Categoria />
        </Route>
        <Route path="/producto/:id">
          <Producto />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
      </Switch>

    </Router>
  )
}

export default App;