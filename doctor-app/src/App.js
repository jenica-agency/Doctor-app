
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import MainRoute from './Components/MainRoute/MainRoute';
import BtnScrollToTop from './Components/ScrollToTop/BtnScrollToTop';



function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <MainRoute></MainRoute>
      <BtnScrollToTop></BtnScrollToTop>
      <Footer></Footer>
      

    </div>
  );
}

export default App;
