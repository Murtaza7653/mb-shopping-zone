import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Products from './Components/Products';
import Cart from './Components/Cart';

function App() {
  return (
    <Router>
        <Navbar />
        <div className="container my-5">
          <Routes>
            <Route exact path='/' element={<Products />}></Route>
          </Routes>
          <Routes>
            <Route exact path='/cart' element={<Cart />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
